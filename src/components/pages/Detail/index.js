import classnames from 'classnames/bind';
import styles from './Detail.module.scss';
import { listFilms } from '../../../asset/image/ListOfFilms';

const cx = classnames.bind(styles);
function Detail() {
    return (
        <div>
            {listFilms.map((film) => {
                return (
                    <div className={cx('film-detail')}>
                        <img src={film.Image}></img>
                        <div className={cx('info')}>
                            <div className={cx('title')}>{film.Title}</div>
                            <div className={cx('year')}>
                                <span>Year of Manufacture : </span>
                                {film.Year}
                            </div>
                            <div className={cx('nation')}>
                                <span>Nation : </span>
                                {film.Nation}
                            </div>
                            <div className={cx('des')}>{film.Description}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Detail;
