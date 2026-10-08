# Prompt: Hoàn thiện thế giới phố Sài Gòn sống động cho Alley Grill Tycoon

Bạn là kỹ sư game 2D và technical artist chuyên Phaser 4, TypeScript, WebGL shader và tối ưu game đa nền tảng. Hãy tiếp tục sửa trực tiếp dự án **Alley Grill Tycoon (Quán Nhậu Hẻm)** trong thư mục hiện tại để con phố có cảm giác đang sống, thay đổi theo thời gian và thời tiết. Đây là một game có thể chạy trên trình duyệt, Android và nhiều tỷ lệ màn hình; không tạo demo rời, không dựng lại giao diện hoặc vòng chơi từ đầu.

## Mục tiêu hình ảnh

Giữ chất pixel art giàu chi tiết, ấm áp và đậm đời sống Sài Gòn hiện đại: nhà phố ống, mái hiên, quán ăn vỉa hè, xe máy đỗ, dây điện, cây nhiệt đới, người đi bộ trên vỉa hè. Cảnh phải có nhiều lớp chuyển động tinh tế, không biến thành ảnh tĩnh có vài biểu tượng bay phía trước.

Ảnh map đang bắt đầu ngay sát mái nhà, gần như không có bầu trời trống. Không đặt mây, mặt trời, sao hay hiệu ứng bầu trời lên cửa sổ, mái, bảng hiệu, người hoặc vùng tương tác. Đặt chúng trong khoảng trời thực sự còn trống; nếu khung nhìn không có chỗ, ưu tiên ánh sáng và bóng đổ trên cảnh thay vì ép một sprite lên kiến trúc. Chuyển động môi trường không được che quầy, khách, lối đi hay chữ giao diện.

## Tài sản có sẵn phải được tận dụng

- Phố: `assets/backgrounds/saigon-street-map-wide-concept.png`.
- Sprite cành/lá lay gió: `assets/effects/saigon-foliage-wind-animation-atlas.png`.
- Sprite mây, chim, lá bay, mưa, nước bắn, gợn vũng, bóng mây và cờ: `assets/effects/saigon-weather-effects-atlas.png`.
- Sprite mặt trời, hoàng hôn, trăng, sao và quầng sáng cửa tiệm: `assets/effects/saigon-day-night-transition-atlas.png`.
- Sprite 12 cấp cửa tiệm và các sprite nhân vật hiện có trong `assets/`.

Hãy đọc kích thước và bố cục atlas trước khi cắt frame. Chỉ lấy đúng vùng sprite có alpha trong suốt; đặt tên frame dễ hiểu và dùng chung texture. Giữ nguồn gốc của art và không thay chúng bằng emoji, hình khối placeholder hay hình vẽ ngẫu nhiên trong code.

## Thời gian và ánh sáng

Tạo chu kỳ ngày–đêm liên tục, chậm và mượt: bình minh, nắng ban ngày, nắng chiều vàng, chạng vạng, đêm có ánh đèn, rồi trở lại bình minh. Không đổi cứng giữa nhiều ảnh map. Dùng shader/post-processing GPU của Phaser để chỉnh sắc độ, độ sáng, tương phản và vignette thật nhẹ; cập nhật các tham số theo nội suy và có chế độ suy giảm khi bộ lọc không khả dụng.

Tạo hướng nắng thay đổi chậm theo thời gian. Ánh sáng chiếu trên phố phải mềm và có màu phù hợp: hồng đào lúc sớm, vàng ấm vào chiều, xanh dịu khi đêm. Dùng quầng sáng nhẹ ở cửa quán khi tối. Tránh vòng tròn mặt trời quá lớn, các tia sáng gắt, tối toàn màn hình quá mức hoặc shader làm mất màu/chi tiết pixel art.

## Mây và bóng râm

Mây trôi chậm theo lớp chiều sâu và hướng gió; mỗi đám có kích cỡ, độ cao, tốc độ và độ mờ khác nhau. Mây không được vẽ trước mặt người hoặc phủ lên mặt tiền cửa hàng. Bóng mây phải di chuyển trên mặt đường/vỉa hè cùng hướng với mây, dùng biên mềm và alpha thấp để trông như bóng râm ngoài trời. Khi trời nhiều mây, giảm độ gắt và độ bão hòa ánh nắng một cách từ từ.

## Gió, cây, chim và lá

- Dùng frame cành cây để cây, tán lá và cây cảnh đung đưa nhẹ; độ nghiêng/tốc độ phản hồi theo sức gió, không rung đều hoặc lắc quá mạnh.
- Lá rơi và lá cuốn theo gió phải thay đổi độ cao, hướng, tốc độ và vòng xoay; số lượng ít khi trời lặng, tăng vừa phải lúc có gió. Không để lá liên tục bay ngang qua mặt nhân vật hoặc che nút.
- Chim dùng sprite có nhiều tư thế cánh, chuyển động thành từng cụm nhỏ qua bầu trời, nhịp đập cánh nhất quán với tốc độ bay. Buổi tối giảm hoạt động chim.
- Nếu dùng cờ Việt Nam, đặt trên mặt tiền hợp lý, giữ đúng màu và hình ngôi sao; cờ chỉ lay nhẹ theo gió.

## Thời tiết và mặt đường

Trời nắng là trạng thái thường gặp. Thi thoảng chuyển dần qua mây âm u, gió, mưa rào nhẹ, rồi tạnh; không đổi thời tiết đột ngột và không làm mưa kéo dài quá lâu. Trong mưa:

- Các vệt mưa nhỏ nghiêng theo gió rơi có tốc độ khác nhau và được tái sử dụng từ pool.
- Tạo splash và gợn sóng riêng trên mặt đường/vũng nước ở dưới cùng cảnh; tránh vẽ ripples nổi trên vỉa hè hoặc tường.
- Phủ tông mát rất nhẹ và phản chiếu ướt thật tiết chế; không làm nền biến thành một lớp xanh đục.
- Mây, cây, cờ và lá phản ứng hợp lý với gió. Khi tạnh, mưa giảm dần rồi bóng nắng quay lại.

## Chuyển động phố và chiều sâu

Giữ người đi đường đang có: mỗi người dùng đúng sheet riêng, đi liên tục trên cùng dải vỉa hè, nhịp chân không trượt, không dịch chuyển tức thời và không bước lên tường/đường xe chạy. Cùng một lúc phải có người đi cả hai hướng với tốc độ/khoảng cách khác nhau. Khách của quầy phải đi vào từ ngoài màn hình, ghé quầy, xếp hàng, nhận món rồi rời đi bằng animation. Chuyển động môi trường chạy liên tục kể cả khi chưa mở ca.

Giữ các lớp sâu/rộng đúng thứ tự: map ở sau; mây/tán cây ở lớp xa; cửa tiệm, ánh sáng và bóng đường theo mặt phẳng map; lá, khách và người đi bộ ở phía trước; mưa gần camera ở lớp cuối. Tất cả lớp gắn với map phải di chuyển đúng khi kéo phố sang trái/phải. Hiệu ứng phủ toàn màn hình phải bám viewport và hoạt động đúng khi đổi tỷ lệ.

## Hiệu năng và thiết bị

- Dùng Phaser 4, TypeScript và tài sản hiện có; giữ nguyên gameplay, save, 12 cấp cửa tiệm và dock quản lý hiện tại.
- Dùng pool cho hạt mưa, nước bắn và lá bay. Không tạo/vứt object liên tục trong mỗi frame, không tạo `Graphics` mới mỗi frame, và không gọi `play()` lại nếu animation chưa đổi.
- Ưu tiên tải map, cửa tiệm, hiệu ứng và nhóm sprite khách cốt lõi trước; tải nhóm người đi đường nền còn lại sau khi cảnh đã hiện để giảm thời gian màn hình trống trên điện thoại.
- Hạn chế số sprite trong viewport, dùng tốc độ update hợp lý, dừng hoặc giảm hiệu ứng khi tab ẩn nếu có thể.
- Giữ canvas rõ khi phóng/thu, không làm méo sprite. Kiểm tra dọc điện thoại, ngang điện thoại, tablet và desktop; thao tác kéo map không bị hiệu ứng chặn.
- Shader không được bắt buộc để game chạy; nếu thiếu WebGL thì map, nhân vật, nút bấm và animation chính vẫn hoạt động.

## Cách thực hiện

1. Đọc cấu trúc game, cách camera kéo map, độ cao đường đi bộ, thứ tự layer và cách lưu dữ liệu trước khi sửa.
2. Tách lớp môi trường thành các hàm nhỏ: đăng ký frame atlas, tạo hiệu ứng, tính chu kỳ ngày/thời tiết, cập nhật ánh sáng, cập nhật mây/bóng, cập nhật gió/lá/chim, cập nhật mưa/vũng nước và bố trí lại khi đổi kích thước màn hình.
3. Giữ tiến trình và dữ liệu hiện có tương thích. Không sửa kinh tế hay cân bằng khách trừ khi cần thiết cho bug được nêu.
4. Sau mỗi nhóm thay đổi, mở game và xem trực tiếp các trạng thái sáng, hoàng hôn/đêm và mưa để chỉnh các hiệu ứng quá lớn, sai vị trí hoặc khó nhìn.
5. Kiểm tra TypeScript/build và xem log trình duyệt; thử ít nhất một khung dọc và một khung ngang. Không tuyên bố hiệu ứng đã được kiểm chứng nếu chưa thực sự mở các trạng thái tương ứng.

## Tiêu chí hoàn tất

- Chu kỳ sáng → chiều → đêm chuyển mượt, cảnh Sài Gòn vẫn đọc rõ và ánh sáng có chiều sâu.
- Mây, bóng râm, chim, tán lá, lá bay và mưa dùng đúng art trong atlas và có nhịp chuyển động tự nhiên.
- Bóng mây/nước nằm trên đúng mặt phẳng; mây không phủ mái, người, cửa hàng hay giao diện.
- Thời tiết hiển thị đúng ở nhãn trạng thái, các lớp môi trường không lệch khi kéo map và không làm khách giật bước.
- Toàn bộ vòng chơi, nhân vật, dock, lưu tiến trình và responsive layout vẫn hoạt động; không có lỗi runtime/build mới.
