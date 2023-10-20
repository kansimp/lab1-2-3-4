import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function News() {
    return (
        <div>
            <h1>'Chú thuật hồi chiến' mùa 2 sẽ 'gây sốt' màn ảnh nhỏ?</h1>
            <h2>
                Trang Anime News Network gọi tên Chú thuật hồi chiến (Jujutsu Kaisen) mùa 2 là một trong những anime
                đáng trông đợi, hứa hẹn tạo nên "cơn sốt" màn ảnh nhỏ mùa hè này.
            </h2>
            <p>
                Còn không lâu nữa, mùa 2 của loạt phim đình đám Chú thuật hồi chiến (chuyển thể dựa trên nguyên tác cùng
                tên của họa sĩ truyện tranh Akutami Gege) chính thức lên sóng màn ảnh nhỏ. Phim được trông đợi vì mùa
                phim trước cũng như một phần phim điện ảnh tiền truyện là Chú thuật hồi chiến 0 (Jujutsu Kaisen 0) được
                tiếp nhận rất tích cực từ khán giả, tại phòng vé cũng như nhận "mưa lời khen" từ giới phê bình.
            </p>
            <img
                className={cx('img')}
                src="https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/6/29/chu-thuat-hoi-chien-16880264529941993030246.png"
            ></img>
            <p>
                Từ tháng 3 năm nay, MAPPA - hãng sản xuất loạt phim, đã tung ra 2 trailer của series, trailer đầu tiên
                hé lộ nhiều chi tiết quan trọng về thời niên thiếu của chú thuật sư Gojo, còn trailer sau đó tung ra
                nhiều hình ảnh mở rộng so với trailer đầu.
            </p>
            <p>
                Mùa phim Chú thuật hồi chiến ra mắt cách nay 3 năm kể về những chú thuật sư có năng lực trấn áp những
                nguyền hồn. Phim được đánh giá cao vì nội dung hấp dẫn và những màn chiến đấu mãn nhãn.
            </p>
            <img
                className={cx('img')}
                src="https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/6/29/chu-thuat-hoi-chien-16880251034671090063527.jpg"
            ></img>
            <p>
                Việc phát hành Chú thuật hồi chiến mùa 2 có nhiều khác biệt giữa các thị trường, vì phim lên lịch ra mắt
                trước tiên chỉ ở Nhật Bản. Theo Collider, sau đó phim mới được chiếu trên các nền tảng như Crunchyroll,
                Funimation hay Hulu; phụ đề tiếng Anh sẽ được dịch cho thị trường Anh ngữ vào tháng 8.
            </p>
            <p>
                Hè năm nay là dịp hàng loạt anime chen chân ra mắt khán giả trên những nền tảng xem phim khác nhau. Tờ
                ScreenRant liệt kê có hơn 20 phim và loạt phim anime sẽ ra mắt khán giả trong hè, và cũng như nhiều danh
                sách khác, tờ này gọi Chú thuật hồi chiến mùa 2 là phim đáng mong đợi nhất khi xếp phim ở vị trí đầu
                bảng.
            </p>
        </div>
    );
}

export default News;
