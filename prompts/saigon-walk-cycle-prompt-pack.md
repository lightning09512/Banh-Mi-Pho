# Bộ prompt tạo sprite đi bộ — Alley Grill Tycoon

Dùng một lượt cho từng nhân vật: gửi ảnh nhận dạng ở cột đầu làm Reference A, gửi `saigon-schoolgirl-walk-horizontal-v2-concept.png` làm Reference B chỉ để tham chiếu độ hoàn thiện hình và tỉ lệ. Dán mô tả nhân vật tương ứng vào chỗ `[CHARACTER PROFILE]` trong prompt khung.

## Prompt khung

```text
Create one production-ready horizontal walk-cycle sprite sheet for a contemporary Saigon street-life tycoon game, Alley Grill Tycoon.

REFERENCES:
- Reference A is the existing front-view sprite of this exact character. Preserve the same identity, face, hair, body shape, outfit, colors and accessories.
- Reference B is the approved female schoolgirl walk sprite. Use it only for the game's overall 2D character-art finish, outline, shading density and on-screen scale. Do not copy her identity, áo dài, backpack or colors.
- Keep this character visually distinct from every other pedestrian.

CHARACTER PROFILE:
[CHARACTER PROFILE]

OUTPUT:
- One transparent RGBA PNG, exactly 1976 × 792 pixels, 8 columns × 2 rows, cells exactly 247 × 396 pixels, no gaps, margins, borders or labels.
- Row 1: eight distinct frames facing left. Row 2: eight distinct frames facing right. Draw both directions with correct anatomy and consistent asymmetric accessories.
- Full body visible in every frame. Keep planted soles on local y=374, pelvis near cell center, body size consistent, and only subtle 1–3 pixel body bob.
- Eight readable poses: left-foot contact, weight transfer, right-leg passing, right-foot reach, right-foot contact, opposite weight transfer, left-leg passing, left-foot reach. Every adjacent pose must change leg silhouettes, knee/ankle angles and opposite arm swing.
- Add subtle delayed motion only to the character's own hair, clothing or prop. Walk in place; the game moves the sprite.
- Warm expressive 2D game character art matching Reference B. Preserve identity and silhouette at the game's 60 × 96 pixel display size.
- No copied pose shifted sideways, sliding planted foot, identity drift, camera shift, baked ground shadow, checkerboard, text, grid, extra characters, blur or watermark.
- Review the loop at 5 fps. Redraw similar neighboring poses, baseline jumps and any visible loop snap between frames 7 and 0.
```

## Thẻ prompt cho từng nhân vật

Mỗi dòng là một prompt riêng: chọn ảnh nhận dạng tương ứng và ghép đúng mô tả với Prompt khung. Trang phục nên giữ đúng ảnh A nếu khác với gợi ý.

| Nhân vật | Ảnh A — nhận dạng | Mô tả nhân vật và dáng đi riêng |
|---|---|---|
| Nhân viên văn phòng nam | assets/characters/saigon-office-man-front-rotations-concept.png | Vietnamese office worker, early 30s, short neat black hair, pale blue rolled-sleeve shirt, charcoal trousers, dark shoes, compact laptop shoulder bag fixed on one shoulder. Brisk but measured short strides, slight end-of-workday forward posture; bag lags gently, free arm counter-swings. |
| Người đi chợ | assets/characters/saigon-market-shopper-front-rotations-concept.png | Vietnamese woman, late 40s, practical sun jacket over a patterned blouse, dark trousers, sandals, simple sun hat, reusable tote with vegetables held in the same hand. Steady short steps; loaded side moves less, tote stays below the waist. |
| Khách du lịch ba lô | assets/characters/saigon-backpacker-tourist-front-rotations-concept.png | Friendly foreign backpacker, late 20s, breathable tee, practical shorts, walking shoes and compact daypack. Relaxed longer steps and a curious glance at shopfronts; backpack sways slightly but stays strapped. Keep the face and outfit from Reference A. |
| Công nhân xây dựng | assets/characters/saigon-construction-worker-front-rotations-concept.png | Vietnamese construction worker, 30s, sun-tanned, sturdy build, breathable work shirt, reflective vest, work trousers, boots and stable safety helmet. Grounded heel plants, wider stance, slower arm swing; helmet stays fixed. |
| Người giao hàng | assets/characters/saigon-delivery-rider-front-rotations-concept.png | Vietnamese delivery rider, late 20s, light sun jacket, dark trousers, sneakers and the same helmet as Reference A; plain insulated delivery bag on the back. Purposeful walking steps, elbows close, restrained bag sway. This is walking, not running or riding. |
| Food reviewer | assets/characters/saigon-food-reviewer-front-rotations-concept.png | Vietnamese food reviewer, late 20s, casual smart shirt, comfortable trousers, sneakers, crossbody mini bag and phone held in the same hand with no readable screen text. Short observant steps, tiny head glance toward food while feet keep walking. |
| Bạn trẻ đi chơi đêm | assets/characters/saigon-genz-nightowl-front-rotations-concept.png | Vietnamese Gen Z adult, early 20s, believable modern Saigon streetwear, oversize tee or light jacket, straight dark trousers, sneakers and subtle accessories. Loose casual steps with slight shoulder rhythm; no dancing, exaggerated swagger or neon costume. |
| Người giao nguyên liệu | assets/characters/saigon-ingredient-supplier-front-rotations-concept.png | Vietnamese produce supplier, 40s, practical checked work shirt, dark trousers, sandals and neck towel. Carries one shallow produce crate with both hands at waist height. Short weight-bearing steps and slight torso counterbalance; crate stays level. |
| Người bán vé số | assets/characters/saigon-lottery-vendor-front-rotations-concept.png | Older Vietnamese lottery seller, around 60, kind lined face, faded long-sleeve shirt, dark trousers, sandals and practical sun hat. Holds a small fan of tickets in one hand; no readable text. Careful compact steps; ticket hand stays steady. |
| Người chạy bộ buổi sáng | assets/characters/saigon-morning-jogger-front-rotations-concept.png | Vietnamese morning jogger, early 30s, modest breathable running shirt, knee-length shorts, trainers, sweat towel and same hair as Reference A. Brisk athletic WALK with bent relaxed elbows and alternating stride. Keep at least one foot planted in every frame; do not make a run cycle. |
| Nhân viên văn phòng nữ | assets/characters/saigon-office-woman-front-rotations-concept.png | Vietnamese office worker, early 30s, tidy shoulder-length hair, breathable blouse, dark ankle trousers, low shoes and light cardigan. Carries one structured tote on the same side. Purposeful compact steps; tote stays near hip, free arm swings naturally. |
| Khách quen lớn tuổi | assets/characters/saigon-older-regular-front-rotations-concept.png | Familiar Vietnamese neighborhood regular, late 60s, gentle smile, silvering hair, comfortable shirt, trousers and sandals. Folded newspaper under one arm, no readable print. Slow relaxed cadence, deliberate short steps and stable balance. |
| Nam sinh | assets/characters/saigon-schoolboy-front-rotations-concept.png | Vietnamese high-school boy, around 16, white school shirt, dark trousers, black shoes and navy backpack worn on both shoulders. Youthful light steps, modest backpack bounce, relaxed opposite arm swing. Contemporary Ho Chi Minh City uniform, not ceremonial clothing. |
| Người quét đường | assets/characters/saigon-street-sweeper-front-rotations-concept.png | Vietnamese municipal street cleaner, 50s, modest work uniform, brimmed sun hat, gloves and durable shoes matching Reference A. Holds one short-handled broom in the same hand, bristles toward ground. Measured even steps; broom responds subtly and never switches hands. |
| Công an phường | assets/characters/saigon-ward-police-officer-front-rotations-concept.png | Vietnamese ward police officer, 30s, approachable attentive face, neat short hair and contemporary green local police uniform matching Reference A. Small belt radio in fixed position, no weapon. Upright measured walk with heel-to-toe foot plants and calm arm swing. |
| Người mẹ trẻ | assets/characters/saigon-young-mother-front-rotations-concept.png | Vietnamese mother, early 30s, warm busy expression, tied-back dark hair, patterned blouse, light trousers, flat sandals and crossbody bag. Carries one reusable shopping bag in the same hand. Careful even steps; loaded-side stride shorter, bag movement restrained. Do not add a child. |
| Nhân viên trật tự đô thị | assets/characters/saigon-ward-inspector-front-rotations-concept.png | Vietnamese urban-order inspector, late 30s, observant but polite, neat pale blue uniform shirt, dark trousers, practical shoes and plain ID lanyard with no readable text. Holds a small clipboard in one hand. Composed official pace, level shoulders, clipboard steady. |
| Mèo mướp đường phố | assets/characters/saigon-street-cat-front-rotations-concept.png | Small healthy Vietnamese tabby cat, brown-gray stripes, alert amber eyes and slim body. Keep the same collar if present in Reference A. Natural four-legged alternating walk, subtle spine motion and tail balancing gently; paws remain grounded in contact poses. Compact silhouette, about 68 × 48 game pixels; never pose like a human. |
| Chó ta đi phố | assets/characters/saigon-street-dog-front-rotations-concept.png | Small-to-medium friendly Vietnamese village dog, tan coat with cream markings, soft curious eyes, upright ears and lean build. Keep the same collar if present in Reference A. Natural four-legged alternating walk, gentle head bob and tail sway; paws share one ground baseline. Compact silhouette, about 76 × 58 game pixels; no anthropomorphic pose. |

## Ghi chú tích hợp

- Đã tạo 19 sheet mới theo các thẻ trên. File v2 nằm trong `assets/characters`; các PNG concept gốc vẫn được giữ nguyên.
- `src/game/NeighborhoodScene.ts` đã chuyển sang dùng sheet v2 cho 19 nhân vật này và sheet v2 của nữ sinh áo dài. Mèo và chó có tỉ lệ hiển thị riêng.
- Các sheet mới đã được căn về lưới 1976 × 792, 16 khung và đường chân chung. Hoạt ảnh đi bộ chạy ở 5 fps.
