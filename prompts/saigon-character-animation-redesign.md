# Prompt làm lại chuyển động nhân vật — Alley Grill Tycoon

## Cách dùng

Gửi cho công cụ tạo ảnh **hai ảnh tham chiếu**: (1) sprite nhân vật đã duyệt của Alley Grill Tycoon (Quán Nhậu Hẻm) để giữ đúng danh tính và phong cách; (2) `tải xuống.jpg` để tham khảo **mức độ khác nhau giữa các tư thế**. Ảnh thứ hai chỉ là tham chiếu chuyển động, không phải mẫu nhân vật hay phong cách cần sao chép.

Thay các trường `[CHARACTER]`, `[OUTFIT]`, `[PROP]`, `[PERSONAL GAIT]` trước khi tạo. Tạo **một nhân vật mỗi lần**, duyệt animation trên nền game rồi mới làm nhân vật tiếp theo.

Để tránh 16 hình gần như giống nhau, làm theo bốn lượt: chốt một hình nhân vật gốc; vẽ bốn tư thế chính (chân trái chạm đất, chân phải đi ngang, chân phải chạm đất, chân trái đi ngang); vẽ bốn tư thế chuyển tiếp giữa chúng; cuối cùng ráp hai hướng vào lưới chính xác và xem GIF 8 fps ở kích thước nhân vật trong game. Nếu công cụ không giữ được cùng một nhân vật hoặc không xuất đúng lưới, hãy lấy từng frame PNG riêng và ráp bằng Aseprite/LibreSprite. Không phóng to một frame rồi dịch ngang để giả thành animation.

## Prompt chính — sheet đi ngang tương thích game hiện tại

```text
Create an original, production-ready 2D character WALK CYCLE sprite sheet for the contemporary Saigon street-food tycoon game “Alley Grill Tycoon”.

REFERENCES:
- Reference A is the approved Alley Grill Tycoon sprite for this character. Preserve this exact character identity, face, hairstyle, body proportions, clothing, prop, palette, outline thickness, pixel density, lighting and overall game art style across every frame.
- Reference B is a motion study only. Use it to understand how clearly distinct key poses make a walk cycle readable. Do not copy its anime boy, blue coat, colors, face, or illustration style.

CHARACTER: [CHARACTER].
OUTFIT: [OUTFIT], believable everyday clothing in contemporary Ho Chi Minh City.
PROP: [PROP], attached to the same hand or shoulder in every frame.
PERSONAL GAIT: [PERSONAL GAIT]. This character must have a recognizable way of walking rather than sharing another NPC's gait.

EXACT OUTPUT CONTRACT:
- One RGBA PNG, exactly 1976 × 792 pixels, transparent background.
- Exactly 8 columns × 2 rows; every cell is exactly 247 × 396 pixels, with no gaps, gutters, margins, borders, captions, or frame numbers.
- Row 1, frames 0–7: walk LEFT. Row 2, frames 8–15: walk RIGHT.
- Full body, both feet visible in every cell. Place the standing/planting sole on the same local baseline, y = 374 pixels within each cell. Keep the pelvis near the horizontal cell center and the character's apparent height consistent. Allow only small, intentional 1–3 pixel body bob.
- Draw the right-facing row as its own sequence when clothing, hairstyle, bag, or prop is asymmetric. Keep accessories on the correct side of the same person.
- The first and last frames must connect smoothly when played as an 8 fps loop.

WALK MECHANICS — EIGHT DIFFERENT DRAWINGS, NOT COPIES SHIFTED SIDEWAYS:
0. Left-foot contact: left heel plants ahead, right foot trails, right arm swings forward.
1. Weight transfer: hips move over the planted foot, trailing heel lifts, sleeves and hair follow one beat later.
2. Passing pose: right knee passes the planted leg, feet visibly separate, arms cross their neutral positions.
3. Right foot reaches forward: clear long stride, left foot pushes off; bag or loose clothing lags naturally.
4. Right-foot contact: right heel plants, left leg trails, left arm swings forward.
5. Opposite weight transfer: planted foot bears weight, rear heel rises, torso has a subtle downward beat.
6. Opposite passing pose: left knee passes, arms swing through neutral in the opposite direction.
7. Left foot reaches forward and settles toward frame 0, with cloth and hair following the motion.
For the RIGHT-facing row, repeat the same physically coherent cycle facing right with correct opposite arm/leg motion.

ART AND QUALITY:
- Cute, warm, expressive, culturally grounded Saigon character art that matches Reference A and remains readable at roughly 60 × 96 pixels in the game.
- Distinct leg silhouettes and changing knee/ankle angles from frame to frame; visible heel lift and foot plant. Arms counter-swing instead of moving together with the legs.
- Animate secondary details sparingly: hair tips, áo dài panels or loose shirt hem, backpack strap, shopping bag, scarf, or tool according to this specific character.
- Preserve the same face, hairstyle, number of fingers, clothes, colors, prop shape, and body volume in all 16 frames.
- Crisp edges and deliberate pixel clusters. No blurred or painterly texture, no anti-aliasing that changes the approved style.
- No camera motion, scaling, squash of the whole body, frame-to-frame redraw of the face, or sliding feet. The character walks in place; the game engine moves the sprite horizontally.
- No baked ground shadow: the game adds its own contact shadow under the feet.
- True transparency. No gray checkerboard painted into the image, solid background, scene, platform, street, text, UI, watermark, guides, or other characters.

SELF-CHECK BEFORE FINAL OUTPUT:
View the 16 frames as a looping animation at 8 fps. Reject and redraw any adjacent frames that are nearly identical, show the same foot contact twice, make a planted foot slide, change the character's identity, change the baseline, or cause a visible pop between frames 7 and 0. Then inspect the loop scaled to 60 × 96 pixels.
```

## Prompt bổ sung — chính diện và tương tác ở quầy

Sau khi sheet đi ngang đạt yêu cầu, dùng lại ảnh nhân vật đã duyệt và yêu cầu **sheet riêng**:

```text
Create a separate front-facing animation sheet for the exact same approved Alley Grill Tycoon character. Keep the same pixel density, scale, outfit, prop, palette, face, and y = 374 foot baseline in 247 × 396 pixel cells with true transparency.

Make 4 distinct front-facing idle frames: neutral weight on both feet; slight breath and blink; weight shifts to the left leg; weight shifts to the right leg and returns to neutral. Keep the head and face recognizable.

Make 4 distinct order/interaction frames: notice the street-side tavern; turn attention toward the cook; point or gesture naturally while ordering; receive a grilled dish or drink with a small pleased reaction. Hands, prop, and facial expression must visibly change in each pose. Keep the character on the same ground plane. Arrange frames in a clearly specified grid and supply its exact cell size and frame order.

Do not turn the character into the anime figure in the motion reference. Do not add a baked floor shadow, checkerboard background, signage, labels, or other people.
```

## Dáng đi riêng cho các nhân vật

| Nhân vật | Thay vào `[PERSONAL GAIT]` |
| --- | --- |
| Nữ sinh áo dài | Light, modest steps; arms swing gently; áo dài panels and ponytail follow one beat behind the legs; backpack stays on the same shoulders. |
| Nam sinh | Quick, slightly uneven steps; backpack bounces lightly; shoulders relaxed. |
| Nhân viên văn phòng nam | Brisk short strides; shoulders slightly forward; one hand occasionally steadies the work bag. |
| Nhân viên văn phòng nữ | Purposeful compact stride; one arm controls a tote or laptop bag; hair moves subtly. |
| Công nhân xây dựng | Heavier heel plants, wider stance, slower arm swing; tool or helmet remains stable. |
| Khách du lịch ba lô | Longer curious strides; large backpack sways with a delayed motion; head occasionally turns toward shops. |
| Người chạy bộ buổi sáng | Athletic run cycle with a clear airborne phase, bent elbows, and stronger knee lift; use a separate RUN sheet. |
| Người giao hàng | Fast, practical steps; parcel remains secure; do not reuse the jogger's run cycle. |
| Người bán vé số | Shorter, careful steps; one hand keeps the ticket board upright. |
| Chú lao công | Measured steps; broom angle and bristles respond to each step, without teleporting between hands. |
| Người giao nguyên liệu | Weight-bearing gait; shorter steps and slight torso counterbalance under the load. |
| Người review ẩm thực | Observant short strides; phone stays in one hand; head turns subtly toward storefronts without stopping the feet. |
| Gen Z đi chơi đêm | Casual elastic steps; a little shoulder rhythm, never an exaggerated dance. |
| Cô/chú khách quen lớn tuổi | Relaxed, slower cadence; small natural arm swing and stable balance. |
| Mẹ trẻ | Careful steady steps; shopping bag or carried item swings less than the free arm. |
| Công an phường | Controlled, upright pace with measured foot plants; uniform details remain consistent. |

## Lưu ý ghép vào game

Game hiện đang cắt sheet đi ngang thành **8 khung trái + 8 khung phải**, mỗi khung **247 × 396**, chạy ở **8 fps** và hiển thị khoảng **60 × 96**. Các sheet cũ có kích thước **1983 × 793**, không chia hết cho lưới đang dùng; khi thay asset, dùng đúng **1976 × 792** để tránh lệch ô. Duyệt GIF preview ở kích thước hiển thị thật trước khi thay vào `NeighborhoodScene.ts`.
