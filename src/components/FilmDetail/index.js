import { useParams } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './FilmDetail.module.scss';
import { listFilms } from '../../asset/image/ListOfFilms';

const cx = classnames.bind(styles);
function FilmDetail() {
    const filmId = useParams();
    return (
        <div className={cx('film-detail')}>
            <img src={listFilms[filmId.filmId - 1].Image}></img>
            <div className={cx('info')}>
                <div className={cx('title')}>{listFilms[filmId.filmId - 1].Title}</div>
                <div className={cx('year')}>
                    <span>Year of Manufacture : </span>
                    {listFilms[filmId.filmId - 1].Year}
                </div>
                <div className={cx('nation')}>
                    <span>Nation : </span>
                    {listFilms[filmId.filmId - 1].Nation}
                </div>
                <div className={cx('des')}>{listFilms[filmId.filmId - 1].Description}</div>
            </div>
        </div>
    );
}

export default FilmDetail;
