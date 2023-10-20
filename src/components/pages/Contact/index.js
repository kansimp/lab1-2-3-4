import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import avatar from '../../../asset/image/thoxanh.jpg';
import facebook from '../../../asset/image/facebook-logo.svg';
import git from '../../../asset/image/github-logo.svg';
import insta from '../../../asset/image/instagram-logo.svg';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('info')}>
            <img src={avatar} className={cx('avatar')}></img>
            <p className={cx('name')}>Dương Duy Khoa</p>
            <div className={cx('logo')}>
                <a href="https://www.facebook.com/khoatoan1234">
                    <img src={facebook}></img>
                </a>
                <a href="https://github.com/kansimp">
                    <img src={git}></img>
                </a>
                <img src={insta}></img>
            </div>
        </div>
    );
}

export default Contact;
