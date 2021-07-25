import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink exact to={routes.home} activeClassName="active-link">
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.movies} activeClassName="active-link">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default AppBar;
