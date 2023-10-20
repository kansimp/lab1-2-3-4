import classnames from 'classnames/bind';
import styles from './Layout.module.scss';
import { useState } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function Layout({ children }) {
    const location = useLocation();
    const [theme, setTheme] = useState('dark');
    console.log(location.pathname);
    let style1 = {};
    let style2 = {};
    let style3 = {};
    if (theme == 'light') {
        document.body.classList.add('light');
        style1.backgroundColor = '#AED9E0';
        // style2.backgroundColor = '#E0E0E0';
        style3.backgroundColor = '#aecce0';
    } else {
        style1.backgroundColor = '#263238';
        style2.backgroundColor = '#0f1416';
    }
    return (
        <div className={cx('container')} style={style1}>
            <AppBar position="static" className={cx('appbar')} style={style3}>
                <Tabs className={cx('tabs')}>
                    <Tab
                        className={cx('tab', location.pathname === '/' ? 'action' : '')}
                        label="Index"
                        component={Link}
                        to="/"
                    />
                    <Tab
                        className={cx('tab', location.pathname === '/detail' ? 'action' : '')}
                        label="Detail"
                        component={Link}
                        to="/detail"
                    />
                    <Tab
                        className={cx('tab', location.pathname === '/about' ? 'action' : '')}
                        label="About"
                        component={Link}
                        to="/about"
                    />
                    <Tab
                        className={cx('tab', location.pathname === '/news' ? 'action' : '')}
                        label="News"
                        component={Link}
                        to="/news"
                    />
                    <Tab
                        className={cx('tab', location.pathname === '/contact' ? 'action' : '')}
                        label="Contact"
                        component={Link}
                        to="/contact"
                    />
                </Tabs>
            </AppBar>
            <div className={cx('content')} style={style2}>
                <div className={cx('theme')}>
                    <span className={cx('light')} onClick={() => setTheme('light')}>
                        <FontAwesomeIcon icon={faSun} />
                    </span>
                    <span className={cx('dark')} onClick={() => setTheme('dark')}>
                        <FontAwesomeIcon icon={faMoon} />
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Layout;
