# Prompt sprite idle chính diện cho khách mua hàng — Alley Grill Tycoon

Dùng prompt này cho từng nhân vật khách riêng. Đưa ảnh chính diện đã duyệt của đúng nhân vật làm Reference A; có thể thêm sheet đi bộ của chính nhân vật làm Reference B để giữ đúng tỉ lệ và nét vẽ. Tạo sheet idle riêng, không ghi đè sheet xoay hướng đang dùng trong game.

```text
Create one production-ready FRONT-FACING CUSTOMER IDLE sprite sheet for Alley Grill Tycoon, a contemporary Saigon street-life tycoon game.

REFERENCES AND IDENTITY:
- Reference A is the approved front-facing view of this exact character. Preserve the same identity, face, hairstyle, skin tone, body shape, age, outfit, colors, accessories, and culturally grounded details in every frame.
- Reference B, if supplied, is this character's approved walking sprite. Use it only to match the established game-art finish, pixel density, outline, shading, proportions, and on-screen scale.
- Do not redesign, replace, simplify, or drift from the approved character. Do not copy another character's identity or clothing.

CHARACTER:
[CHARACTER NAME AND DESCRIPTION: age range, personality, face/hair, body shape, modern Saigon clothing, and one consistent prop or accessory.]

SCENE AND POSE:
- This character has arrived at the street-side tavern and is waiting politely to order or receive food.
- Show the character standing still, facing directly toward the viewer and the vendor. Both eyes should be visible; torso and feet face forward. Use a relaxed, friendly, readable expression.
- This is a quiet idle loop while waiting in line, not a walk, run, greeting, dance, talking, or cooking animation.
- Keep both feet planted on the same ground line in every frame. Keep the contact point and body position fixed; do not slide, step, lift a foot, or translate the whole character up and down.

ANIMATION — FOUR DISTINCT, VERY SUBTLE BREATHING FRAMES:
1. Relaxed neutral pose, shoulders at rest.
2. Gentle inhale: chest and shoulders rise by only 1–2 pixels; head follows very slightly.
3. Soft hold with a tiny natural weight shift through the torso; feet remain planted and the silhouette stays almost in place.
4. Gentle exhale: shoulders settle back toward frame 1. Make the transition from frame 4 to frame 1 seamless.
- Animate only tiny torso/head breathing motion and, where appropriate, a barely noticeable delayed response in hair, loose fabric, or the existing prop.
- Optional: one natural blink in a single frame only if the face remains clean and consistent. Keep the eyes open in the other frames.
- The change between frames must be visible when inspected, yet calm at actual game size. No exaggerated bounce, squash-and-stretch, arm swing, foot movement, or sudden pose change.
- This loop will play at 2 frames per second for a slow, subtle approximately 2-second idle cycle.

OUTPUT AND GAME ALIGNMENT:
- Output one true-transparent RGBA PNG, exactly 988 × 396 pixels: 4 columns × 1 row, four cells exactly 247 × 396 pixels, no gaps, gutters, padding, borders, or labels.
- Draw exactly one complete character in each cell. Keep the same camera, center alignment, body scale, proportions, and facing direction in all four cells.
- Keep the bottoms of both shoes aligned to local y = 374 in every cell. The character's full body, hair, clothing, accessories, and both feet must remain inside the cell.
- Preserve the approved character's clean readable silhouette and face at the game's approximate display size of 58 × 93 pixels.
- Leave a transparent margin around the silhouette. Do not include any ground shadow: the game renders the contact shadow separately beneath the feet.
- Crisp, deliberate 2D game-art pixels, consistent outline and palette matching the references. Clean transparent edges; no stray opaque pixels.

STRICT EXCLUSIONS:
- No walking or running poses, no foot sliding, no jumping, no whole-sprite bobbing, no background, floor, stall, food, queue, other people, pets, or extra props beyond the described character's existing prop.
- No baked shadow, painted checkerboard, text, labels, grid lines, frame numbers, logo, blur, glow, watermark, or cropped body parts.

Before finalizing, inspect all four frames side by side at both 247 × 396 and 58 × 93 display size. Correct any identity drift, foot-baseline change, accidental step, excessive bob, inconsistent scale, or loop snap.
```

## Dùng trong game

- Tạo một sheet riêng cho mỗi loại khách cần idle chính diện; giữ nguyên ảnh xoay hướng và sheet đi bộ hiện có.
- Các ô 247 × 396 khớp lưới khung hiện tại. Bóng tiếp xúc vẫn do game vẽ riêng.
- Khi tích hợp, phát loop idle ở 2 fps trong lúc khách đứng chờ; khi bắt đầu đi tới quầy hoặc rời đi, chuyển lại animation đi bộ.

## Ví dụ mô tả nhân vật

**Nữ sinh áo dài:** `A Vietnamese high-school girl, around 16, lively but a little shy, warm round face, large dark eyes, long black hair tied in a low ponytail with a small red tie. She wears the exact white áo dài over white trousers, dark school shoes, and the same navy backpack shown in Reference A. She waits with a small polite smile, hands resting naturally near the backpack straps.`

**Nhân viên văn phòng:** `A Vietnamese office worker in her early 30s, composed and friendly, neat shoulder-length black hair, light blouse, dark ankle trousers, low shoes, and the same structured tote carried on the same side as Reference A. She waits calmly with one hand lightly holding the tote strap.`

**Khách quen lớn tuổi:** `A familiar older Vietnamese neighborhood customer in his late 60s, kind lined face, silvering short hair, comfortable patterned shirt, dark trousers, sandals, and the same folded newspaper tucked under one arm as Reference A. He waits patiently with a gentle smile; do not add readable newspaper print.`
