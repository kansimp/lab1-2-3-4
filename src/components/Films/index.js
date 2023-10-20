import classnames from 'classnames/bind';
import styles from './Films.module.scss';
import { listFilms } from '../../asset/image/ListOfFilms';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Films() {
    return (
        <div className={cx('list-film')}>
            {listFilms.map((film) => {
                return (
                    <Link to={`/film/${film.id}`} className={cx('film-item')} key={film.id}>
                        <img src={film.Image} className={cx('film-img')}></img>
                        <span className={cx('title')}>{film.Title}</span>
                    </Link>
                );
            })}
        </div>
    );
}

export default Films;
