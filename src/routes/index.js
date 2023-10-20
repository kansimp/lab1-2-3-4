import FilmDetail from '../components/FilmDetail';
import Films from '../components/Films';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Detail from '../components/pages/Detail';
import News from '../components/pages/News';

export const publicRoute = [
    { path: '/film/:filmId', component: FilmDetail },
    { path: '/', component: Films },
    { path: '/detail', component: Detail },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/contact', component: Contact },
];
