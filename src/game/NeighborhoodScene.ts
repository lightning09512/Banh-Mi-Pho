import Phaser from "phaser";
import streetMapUrl from "../../assets/backgrounds/saigon-street-map-wide-concept.png";
import foliageUrl from "../../assets/effects/saigon-foliage-wind-animation-atlas.png";
import schoolgirlUrl from "../../assets/characters/saigon-schoolgirl-sprite-sheet-concept.png";
import officeManUrl from "../../assets/characters/saigon-office-man-front-rotations-concept.png";
import marketShopperUrl from "../../assets/characters/saigon-market-shopper-front-rotations-concept.png";
import touristUrl from "../../assets/characters/saigon-backpacker-tourist-front-rotations-concept.png";
import schoolgirlWalkUrl from "../../assets/characters/saigon-schoolgirl-walk-horizontal-concept.png";
import officeManWalkUrl from "../../assets/characters/saigon-office-man-walk-horizontal-concept.png";
import marketShopperWalkUrl from "../../assets/characters/saigon-market-shopper-walk-horizontal-concept.png";
import touristWalkUrl from "../../assets/characters/saigon-backpacker-tourist-walk-horizontal-concept.png";
import progressionSheetUrl from "../../assets/business-upgrades/saigon-banhmi-12-stage-progression-concept.png";
import { CUSTOMER_TYPES, RECIPES, type CustomerType } from "./data";
import { GameStore, type GameSnapshot, type WaitingCustomer } from "./GameStore";

const CUSTOMER_TEXTURE: Record<CustomerType, string> = {
  student: "customer-student",
  office: "customer-office",
  shopper: "customer-shopper",
  tourist: "customer-tourist",
};

const WALKER_TEXTURES = ["walk-student", "walk-office", "walk-shopper", "walk-tourist"] as const;
const WALK_TEXTURE_BY_CUSTOMER: Record<CustomerType, (typeof WALKER_TEXTURES)[number]> = {
  student: "walk-student",
  office: "walk-office",
  shopper: "walk-shopper",
  tourist: "walk-tourist",
};

const CUSTOMER_FRAME_WIDTH = 247;
const CUSTOMER_FRAME_HEIGHT = 396;

type Walker = {
  sprite: Phaser.GameObjects.Sprite;
  direction: -1 | 1;
  speed: number;
  phase: number;
};

type MovingSprite = {
  sprite: Phaser.GameObjects.Sprite;
  x: number;
  y: number;
  speed: number;
  phase: number;
};

type CrowdMotion = {
  targetX: number;
  speed: number;
  direction: -1 | 1;
  moving: boolean;
  needsWalkingState: boolean;
};

export class NeighborhoodScene extends Phaser.Scene {
  private readonly store: GameStore;
  private streetBackdrop!: Phaser.GameObjects.Image;
  private street!: Phaser.GameObjects.Image;
  private businessImage!: Phaser.GameObjects.Image;
  private nightOverlay!: Phaser.GameObjects.Rectangle;
  private crowd = new Map<number, Phaser.GameObjects.Container>();
  private crowdMotion = new Map<number, CrowdMotion>();
  private pendingDepartures = new Map<number, { type: CustomerType; direction: -1 | 1 }>();
  private walkers: Walker[] = [];
  private leaves: MovingSprite[] = [];
  private clouds: { graphics: Phaser.GameObjects.Graphics; x: number; y: number; speed: number; phase: number }[] = [];
  private birds: { graphics: Phaser.GameObjects.Graphics; x: number; y: number; speed: number; phase: number }[] = [];
  private plant!: Phaser.GameObjects.Sprite;
  private steamPuffs: { puff: Phaser.GameObjects.Ellipse; life: number; speed: number }[] = [];
  private colorGrade?: Phaser.Filters.ColorMatrix;
  private vignette?: Phaser.Filters.Vignette;
  private cartX = 0;
  private groundY = 0;
  private cartWidth = 0;
  private cartHeight = 0;
  private unit = 1;
  private layoutWidth = 0;
  private layoutHeight = 0;
  private gradeNightAmount = -1;
  private lastSnapshot!: GameSnapshot;

  constructor(store: GameStore) {
    super("neighborhood");
    this.store = store;
  }

  preload(): void {
    this.load.image("saigon-street", streetMapUrl);
    this.load.image("business-progression", progressionSheetUrl);
    this.load.spritesheet("foliage-atlas", foliageUrl, { frameWidth: 271, frameHeight: 241 });
    this.load.spritesheet("customer-student", schoolgirlUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("customer-office", officeManUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("customer-shopper", marketShopperUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("customer-tourist", touristUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("walk-student", schoolgirlWalkUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("walk-office", officeManWalkUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("walk-shopper", marketShopperWalkUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
    this.load.spritesheet("walk-tourist", touristWalkUrl, { frameWidth: CUSTOMER_FRAME_WIDTH, frameHeight: CUSTOMER_FRAME_HEIGHT });
  }

  create(): void {
    this.streetBackdrop = this.add.image(0, 0, "saigon-street").setOrigin(0.5).setDepth(-2).setAlpha(0.7).setTint(0x9d8c72);
    this.streetBackdrop.enableFilters();
    this.streetBackdrop.filters?.internal.addBlur(0, 3, 3, 1.8);
    this.street = this.add.image(0, 0, "saigon-street").setOrigin(0.5).setDepth(-1);
    this.createBusinessStageFrames();
    this.businessImage = this.add.image(0, 0, "business-progression", "stage-1").setDepth(0);
    this.nightOverlay = this.add.rectangle(0, 0, 1, 1, 0x17283c, 0).setOrigin(0).setDepth(1);

    const cameraFilters = this.cameras.main.filters;
    if (cameraFilters) {
      this.colorGrade = cameraFilters.external.addColorMatrix();
      this.vignette = cameraFilters.external.addVignette(0.5, 0.52, 0.92, 0.08, 0x332e3c);
    }

    this.anims.create({
      key: "dry-leaf-tumble",
      frames: this.anims.generateFrameNumbers("foliage-atlas", { start: 0, end: 7 }),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: "green-leaf-spin",
      frames: this.anims.generateFrameNumbers("foliage-atlas", { start: 8, end: 15 }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "plant-sway",
      frames: this.anims.generateFrameNumbers("foliage-atlas", { start: 16, end: 23 }),
      frameRate: 5,
      repeat: -1,
      yoyo: true,
    });

    for (const textureKey of WALKER_TEXTURES) {
      this.anims.create({
        key: `${textureKey}-left`,
        frames: this.anims.generateFrameNumbers(textureKey, { start: 0, end: 7 }),
        frameRate: 8,
        repeat: -1,
      });
      this.anims.create({
        key: `${textureKey}-right`,
        frames: this.anims.generateFrameNumbers(textureKey, { start: 8, end: 15 }),
        frameRate: 8,
        repeat: -1,
      });
    }

    this.createAmbientWalkers();
    this.createSkyLife();
    this.plant = this.add.sprite(0, 0, "foliage-atlas", 16).play("plant-sway").setDepth(2).setAlpha(0.9);
    this.time.addEvent({ delay: 1_050, loop: true, callback: () => this.emitSteam() });

    this.scale.on("resize", this.layout, this);
    this.time.addEvent({ delay: 1_000, loop: true, callback: () => this.store.tick() });
    this.store.subscribe((snapshot) => {
      const previous = this.lastSnapshot;
      if (previous?.inShift) {
        const liveIds = new Set(snapshot.customers.map((customer) => customer.id));
        const servedIds = new Set<number>();
        if (snapshot.totalServed > previous.totalServed) {
          const served = previous.customers.find((customer) => !liveIds.has(customer.id));
          if (served) servedIds.add(served.id);
        }
        for (const customer of previous.customers) {
          if (!liveIds.has(customer.id)) {
            this.pendingDepartures.set(customer.id, {
              type: customer.type,
              direction: servedIds.has(customer.id) ? 1 : -1,
            });
          }
        }
      }
      this.lastSnapshot = snapshot;
      this.layout();
    });
    this.layout();
  }

  private createBusinessStageFrames(): void {
    const texture = this.textures.get("business-progression");
    const rowTops = [0, 341, 682];
    const rowHeights = [341, 341, 342];
    for (let stage = 0; stage < 12; stage += 1) {
      const row = Math.floor(stage / 4);
      const column = stage % 4;
      texture.add(`stage-${stage + 1}`, 0, column * 384, rowTops[row], 384, rowHeights[row]);
    }
  }

  update(_time: number, delta: number): void {
    const width = this.scale.width;
    const elapsed = Math.min(delta / 1_000, 0.05);

    for (const [index, walker] of this.walkers.entries()) {
      walker.sprite.x += walker.direction * walker.speed * elapsed;
      walker.sprite.y = this.groundY + Math.sin(index * 1.9) * 3 * this.unit + Math.sin(_time / 180 + walker.phase) * 1.1 * this.unit;
      if (walker.direction > 0 && walker.sprite.x > width + 60 * this.unit) walker.sprite.x = -60 * this.unit;
      if (walker.direction < 0 && walker.sprite.x < -60 * this.unit) walker.sprite.x = width + 60 * this.unit;
    }

    for (const leaf of this.leaves) {
      leaf.x += leaf.speed * elapsed;
      leaf.sprite.setPosition(leaf.x, leaf.y + Math.sin(_time / 370 + leaf.phase) * 13 * this.unit);
      leaf.sprite.rotation += elapsed * (leaf.speed > 0 ? 1.7 : -1.4);
      if (leaf.x > width + 40 * this.unit) leaf.x = -40 * this.unit;
      if (leaf.x < -40 * this.unit) leaf.x = width + 40 * this.unit;
    }

    for (const cloud of this.clouds) {
      cloud.x += cloud.speed * elapsed;
      if (cloud.x > width + 120 * this.unit) cloud.x = -150 * this.unit;
      cloud.graphics.setPosition(cloud.x, cloud.y + Math.sin(_time / 5_000 + cloud.phase) * 3 * this.unit);
    }

    this.birds.forEach((bird, index) => {
      bird.x += bird.speed * elapsed;
      if (bird.x > width + 40 * this.unit) bird.x = -40 * this.unit;
      const y = bird.y + Math.sin(_time / 500 + bird.phase) * 5 * this.unit;
      bird.graphics.setPosition(bird.x, y);
      this.drawBird(bird.graphics, _time, bird.phase, index);
    });

    for (const [id, container] of this.crowd) {
      const motion = this.crowdMotion.get(id);
      const customer = this.lastSnapshot.customers.find((entry) => entry.id === id);
      const sprite = container.getAt(0) as Phaser.GameObjects.Sprite;
      if (!motion || !customer) continue;

      if (motion.moving) {
        if (motion.needsWalkingState) {
          motion.needsWalkingState = false;
          this.store.markCustomerWalking(id);
        }
        const distance = motion.targetX - container.x;
        const direction: -1 | 1 = distance >= 0 ? 1 : -1;
        motion.direction = direction;
        const walkTexture = WALK_TEXTURE_BY_CUSTOMER[customer.type];
        const animationKey = `${walkTexture}-${direction > 0 ? "right" : "left"}`;
        if (sprite.texture.key !== walkTexture || sprite.anims.currentAnim?.key !== animationKey) {
          sprite.setTexture(walkTexture, direction > 0 ? 8 : 0);
          sprite.play(animationKey);
        }
        if (Math.abs(distance) <= motion.speed * elapsed) {
          container.x = motion.targetX;
          motion.moving = false;
          this.store.markCustomerArrived(id);
        } else {
          container.x += direction * motion.speed * elapsed;
        }
      } else {
        sprite.y = Math.sin(_time / 190 + id) * 1.15 * this.unit;
      }
    }

    for (let index = this.steamPuffs.length - 1; index >= 0; index -= 1) {
      const steam = this.steamPuffs[index];
      steam.life -= delta;
      steam.puff.y -= steam.speed * elapsed;
      steam.puff.alpha = Math.max(0, steam.life / 1_250) * 0.38;
      steam.puff.setScale(steam.puff.scaleX + elapsed * 0.22, steam.puff.scaleY + elapsed * 0.22);
      if (steam.life <= 0) {
        steam.puff.destroy();
        this.steamPuffs.splice(index, 1);
      }
    }
  }

  private createAmbientWalkers(): void {
    const width = this.scale.width;
    for (let index = 0; index < 6; index += 1) {
      const textureKey = WALKER_TEXTURES[index % WALKER_TEXTURES.length];
      const direction: -1 | 1 = index % 2 === 0 ? 1 : -1;
      const sprite = this.add.sprite((index + 0.5) * width / 6, 0, textureKey, direction > 0 ? 8 : 0)
        .setOrigin(0.5, 1)
        .setDepth(3.6)
        .setAlpha(index === 2 ? 0.93 : 1)
        .play(`${textureKey}-${direction > 0 ? "right" : "left"}`);
      this.walkers.push({ sprite, direction, speed: (48 + (index % 4) * 9) * this.unit, phase: index * 1.7 });
    }
  }

  private createSkyLife(): void {
    for (let index = 0; index < 3; index += 1) {
      const graphics = this.add.graphics().setDepth(1.2).setAlpha(0.62 - index * 0.08);
      graphics.fillStyle(0xfff4d5, 0.54);
      graphics.fillCircle(0, 0, 18 + index * 2);
      graphics.fillCircle(21 + index * 2, -8, 23 + index * 2);
      graphics.fillCircle(47 + index * 3, 1, 17 + index);
      graphics.fillRoundedRect(-2, -3, 53 + index * 4, 20, 10);
      this.clouds.push({ graphics, x: 0, y: 0, speed: 7 + index * 3, phase: index * 1.9 });
    }

    for (let index = 0; index < 3; index += 1) {
      const graphics = this.add.graphics().setDepth(2.1);
      this.birds.push({ graphics, x: 0, y: 0, speed: 25 + index * 9, phase: index * 2.1 });
    }

    for (let index = 0; index < 8; index += 1) {
      const textureFrame = index % 2 === 0 ? 0 : 8;
      const sprite = this.add.sprite(0, 0, "foliage-atlas", textureFrame)
        .play(index % 2 === 0 ? "dry-leaf-tumble" : "green-leaf-spin")
        .setDepth(3)
        .setAlpha(0.9 - (index % 3) * 0.08);
      const gust = 17 + (index % 4) * 8;
      this.leaves.push({ sprite, x: 0, y: 0, speed: index % 3 === 0 ? -gust : gust, phase: index * 1.3 });
    }
  }

  private drawBird(graphics: Phaser.GameObjects.Graphics, time: number, phase: number, index: number): void {
    graphics.clear();
    const wingUp = Math.floor(time / (115 + index * 17) + phase) % 2 === 0;
    const wing = (wingUp ? -1 : 1) * (4.2 + index * 0.35) * this.unit;
    graphics.lineStyle(Math.max(1.2, 1.7 * this.unit), 0x34473d, 0.88);
    graphics.beginPath();
    graphics.moveTo(-7 * this.unit, 0);
    graphics.lineTo(-3 * this.unit, wing);
    graphics.lineTo(0, 0);
    graphics.lineTo(3 * this.unit, wing);
    graphics.lineTo(7 * this.unit, 0);
    graphics.strokePath();
  }

  private emitSteam(): void {
    if (!this.cartWidth || !this.lastSnapshot) return;
    const x = this.cartX + this.cartWidth * (0.05 + Math.random() * 0.28);
    const y = this.groundY - this.cartHeight * 0.22;
    const puff = this.add.ellipse(x, y, 5 * this.unit, 4 * this.unit, 0xfff4d8, 0.36)
      .setDepth(4.5);
    this.steamPuffs.push({ puff, life: 1_250, speed: 24 * this.unit });
  }

  private layout(): void {
    if (!this.street || !this.businessImage || !this.lastSnapshot) return;

    const width = this.scale.width;
    const height = this.scale.height;
    const portrait = width / height < 0.85;
    // On portrait screens, cap the panorama to about the viewport width so the
    // shop and a useful slice of both neighboring streets remain visible.
    // On landscape/desktop, fit almost the full 3:1 map across the viewport.
    const mapHeight = portrait
      ? Math.min(height * 0.58, width * 1.05)
      : Math.min(height * 0.78, width / 2.65);
    const mapWidth = mapHeight * 3;
    const initialMapTop = (height - mapHeight) / 2;
    const initialGroundY = initialMapTop + mapHeight * 0.705;
    const panelTop = document.querySelector(".play-panel")?.getBoundingClientRect().top ?? height * 0.68;
    const canvasTop = this.game.canvas.getBoundingClientRect().top;
    const panelTopInCanvas = panelTop - canvasTop;
    const verticalShift = Math.min(0, panelTopInCanvas - 14 * (mapHeight / 320) - initialGroundY);
    const mapTop = initialMapTop + verticalShift;
    const groundY = initialGroundY + verticalShift;
    const centerX = width / 2 + mapHeight * 0.025;
    // Keep interactive props at a readable game scale as the panoramic backdrop
    // grows to cover a full-screen viewport.
    const unit = Math.max(0.8, Math.min(width / 1_280, 1.5));
    const stage = this.lastSnapshot.cartLevel;
    const row = Math.floor((stage - 1) / 4);
    const rowHeights = [341, 341, 342];
    const baselineByRow = [307, 301, 311];
    const stageCellHeight = rowHeights[row];
    const stageScale = mapHeight * 0.52 / stageCellHeight;
    const cartWidth = 384 * stageScale;
    const cartHeight = stageCellHeight * stageScale;

    this.unit = unit;
    this.cartX = centerX;
    this.groundY = groundY;
    this.cartWidth = cartWidth;
    this.cartHeight = cartHeight;

    this.streetBackdrop.setPosition(width / 2, height / 2).setDisplaySize(width, height);
    this.street.setPosition(width / 2, mapTop + mapHeight / 2).setDisplaySize(mapWidth, mapHeight);
    this.nightOverlay.setPosition(0, 0).setSize(width, height).setAlpha(this.lastSnapshot.nightAmount * 0.38);
    this.updateColorGrade(this.lastSnapshot.nightAmount);

    const resized = width !== this.layoutWidth || height !== this.layoutHeight;
    if (resized) {
      this.layoutWidth = width;
      this.layoutHeight = height;
      this.walkers.forEach((walker, index) => {
        walker.sprite.x = (index + 0.5) * width / this.walkers.length;
      });
      this.clouds.forEach((cloud, index) => { cloud.x = width * (0.18 + index * 0.32); });
      this.birds.forEach((bird, index) => { bird.x = width * (0.24 + index * 0.3); });
      this.leaves.forEach((leaf, index) => { leaf.x = width * (index / this.leaves.length); });
    }

    this.walkers.forEach((walker, index) => {
      walker.speed = (48 + (index % 4) * 9) * unit;
      walker.sprite.setPosition(walker.sprite.x, groundY + Math.sin(index * 1.9) * 3 * unit)
        .setDisplaySize(60 * unit, 96 * unit)
        .setVisible(width > 760 || index < 3);
    });
    this.clouds.forEach((cloud, index) => {
      cloud.y = mapTop + mapHeight * (0.15 + index * 0.065);
      cloud.graphics.setPosition(cloud.x, cloud.y).setScale(unit * (0.85 + index * 0.18));
    });
    this.birds.forEach((bird, index) => {
      bird.y = mapTop + mapHeight * (0.21 + index * 0.045);
      bird.graphics.setPosition(bird.x, bird.y);
    });
    this.leaves.forEach((leaf, index) => {
      leaf.y = mapTop + mapHeight * (0.61 + (index % 4) * 0.018);
      leaf.sprite.setPosition(leaf.x, leaf.y).setDisplaySize((16 + index % 3 * 2) * unit, (14 + index % 2 * 2) * unit);
    });
    this.plant.setPosition(width * 0.91, mapTop + mapHeight * 0.26).setDisplaySize(52 * unit, 46 * unit);

    this.businessImage
      .setFrame(`stage-${stage}`)
      .setOrigin(0.5, baselineByRow[row] / stageCellHeight)
      .setPosition(centerX, groundY)
      .setDisplaySize(cartWidth, cartHeight)
      .setDepth(0);

    this.syncCrowd(this.lastSnapshot.customers, centerX, groundY, cartWidth, unit);
  }

  private updateColorGrade(nightAmount: number): void {
    if (!this.colorGrade || Math.abs(nightAmount - this.gradeNightAmount) < 0.005) return;
    const matrix = this.colorGrade.colorMatrix;
    matrix.reset();
    matrix.brightness(1 - nightAmount * 0.12);
    matrix.hue(-nightAmount * 9, true);
    matrix.saturate(nightAmount * 0.08, true);
    if (this.vignette) this.vignette.strength = 0.08 + nightAmount * 0.07;
    this.gradeNightAmount = nightAmount;
  }

  private syncCrowd(
    customers: WaitingCustomer[],
    centerX = this.scale.width / 2,
    groundY = this.scale.height * 0.7,
    shopWidth = this.cartWidth,
    unit = this.unit,
  ): void {
    const liveIds = new Set(customers.map((customer) => customer.id));
    for (const [id, container] of this.crowd) {
      if (!liveIds.has(id)) {
        const departure = this.pendingDepartures.get(id);
        if (departure) this.animateDeparture(container, departure.type, departure.direction);
        else container.destroy(true);
        this.pendingDepartures.delete(id);
        this.crowdMotion.delete(id);
        this.crowd.delete(id);
      }
    }

    customers.forEach((customer, index) => {
      let container = this.crowd.get(customer.id);
      const walkKey = WALK_TEXTURE_BY_CUSTOMER[customer.type];
      const frontKey = CUSTOMER_TEXTURE[customer.type];
      const customerInfo = CUSTOMER_TYPES[customer.type];
      const recipe = RECIPES[customer.recipe];
      const targetX = centerX - shopWidth * 0.32 - index * 66 * unit;

      if (!container) {
        const sprite = this.add.sprite(0, 0, walkKey, 8).setOrigin(0.5, 1);
        const label = this.add.text(0, -98 * unit, customerInfo.shortName, {
          fontFamily: "Trebuchet MS, sans-serif",
          fontSize: `${Math.max(9, 10 * unit)}px`,
          color: "#3f3023",
          backgroundColor: "#fff4dc",
          padding: { x: 5, y: 3 },
        }).setOrigin(0.5, 1);
        const orderTag = this.add.text(0, -116 * unit, recipe.name, {
          fontFamily: "Trebuchet MS, sans-serif",
          fontSize: `${Math.max(8, 9 * unit)}px`,
          color: "#ffffff",
          backgroundColor: "#285a53",
          padding: { x: 5, y: 3 },
        }).setOrigin(0.5, 1);
        container = this.add.container(-90 * unit, groundY, [sprite, label, orderTag]).setDepth(6).setData("customerId", customer.id);
        this.crowd.set(customer.id, container);
        const arrival = customer.status === "walking";
        this.crowdMotion.set(customer.id, {
          targetX,
          speed: 70 * unit,
          direction: 1,
          moving: arrival,
          needsWalkingState: false,
        });
      }

      const motion = this.crowdMotion.get(customer.id);
      if (!motion || !container) return;
      motion.targetX = targetX;
      if (!motion.moving && Math.abs(container.x - targetX) > 3 * unit) {
        motion.moving = true;
        motion.needsWalkingState = customer.status === "waiting";
      }

      container.y = groundY;
      const sprite = container.getAt(0) as Phaser.GameObjects.Sprite;
      const label = container.getAt(1) as Phaser.GameObjects.Text;
      const orderTag = container.getAt(2) as Phaser.GameObjects.Text;
      sprite.setDisplaySize(58 * unit, 93 * unit);
      label.setY(-98 * unit).setFontSize(`${Math.max(9, 10 * unit)}px`).setText(customerInfo.shortName);
      orderTag.setY(-116 * unit).setFontSize(`${Math.max(8, 9 * unit)}px`).setText(recipe.name);
      const isWalking = motion.moving || customer.status === "walking";
      if (isWalking) {
        const direction: -1 | 1 = targetX >= container.x ? 1 : -1;
        const animation = `${walkKey}-${direction > 0 ? "right" : "left"}`;
        if (sprite.texture.key !== walkKey || sprite.anims.currentAnim?.key !== animation) {
          sprite.setTexture(walkKey, direction > 0 ? 8 : 0);
          sprite.play(animation);
        }
      } else if (sprite.texture.key !== frontKey) {
        sprite.anims.stop();
        sprite.setTexture(frontKey, 3);
      }
      const showOrder = index === 0 && !isWalking;
      label.setVisible(showOrder);
      orderTag.setVisible(showOrder);
    });
  }

  private animateDeparture(container: Phaser.GameObjects.Container, type: CustomerType, direction: -1 | 1): void {
    const sprite = container.getAt(0) as Phaser.GameObjects.Sprite;
    const label = container.getAt(1) as Phaser.GameObjects.Text;
    const orderTag = container.getAt(2) as Phaser.GameObjects.Text;
    const walkKey = WALK_TEXTURE_BY_CUSTOMER[type];
    sprite.setTexture(walkKey, direction > 0 ? 8 : 0).play(`${walkKey}-${direction > 0 ? "right" : "left"}`);
    label.setVisible(false);
    orderTag.setVisible(false);
    const destination = direction > 0 ? this.scale.width + 100 * this.unit : -100 * this.unit;
    const duration = Math.max(1_000, Math.abs(destination - container.x) / (185 * this.unit) * 1_000);
    this.tweens.add({
      targets: container,
      x: destination,
      duration,
      ease: "Linear",
      onComplete: () => container.destroy(true),
    });
  }
}
