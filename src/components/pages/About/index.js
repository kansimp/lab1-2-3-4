import styles from './About.module.scss';
import classNames from 'classnames/bind';
import image from '../../../asset/image/body.jpg';

const cx = classNames.bind(styles);
function About() {
    return (
        <div>
            <p className={cx('para')}>
                Chào mừng đến với KhoaWibu - nơi tận hưởng cuộc phiêu lưu vô tận trong thế giới của anime! KhoaWibu là
                một cộng đồng đam mê anime, nơi chúng tôi đồng hành cùng bạn để khám phá những câu chuyện tuyệt vời,
                những nhân vật đáng yêu và thế giới kỳ diệu của anime.<br></br>
                Tại KhoaWibu, chúng tôi không chỉ cung cấp một kho lưu trữ phong phú với hàng trăm bộ anime nổi tiếng,
                mà còn là nơi để bạn tìm kiếm những tác phẩm mới nhất và thú vị nhất. Chúng tôi đảm bảo rằng bạn sẽ luôn
                cập nhật với các bộ anime hot nhất và những bộ phim đang gây sốt trong cộng đồng.<br></br>
                Đội ngũ của chúng tôi là những người yêu thích anime và sẵn sàng chia sẻ kiến thức, đánh giá, và bản
                dịch với bạn. Chúng tôi tận tâm với việc mang đến cho bạn trải nghiệm xem anime tốt nhất, cùng với các
                bài viết bình luận, phân tích sâu, và thông tin chi tiết về từng tập. Chúng tôi còn cung cấp các dịch vụ
                xem anime trực tuyến đáng tin cậy và tiện lợi.<br></br>
                Hãy tham gia cùng chúng tôi trên cuộc hành trình đầy màu sắc và kỳ diệu của anime. Hãy khám phá những
                thế giới tưởng tượng độc đáo, kết nối với cộng đồng đam mê và đắm chìm trong những chuyến phiêu lưu
                không giới hạn. KhoaWibu - Nơi niềm đam mê được thăng hoa và kết nối.<br></br>
                Hãy bắt đầu chuyến hành trình của bạn cùng với chúng tôi và khám phá vô số câu chuyện thần thánh, bí ẩn
                và trái tim nồng nhiệt của anime ngay bây giờ!<br></br>
            </p>
            <img src={image} className={cx('img')}></img>
        </div>
    );
}

export default About;
