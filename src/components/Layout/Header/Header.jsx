import s from './Header.module.scss';
import logo from '../../../assets/logo.svg'
import cartIcon from '../../../assets/cart-icon.svg'

import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerWrapper}>
          <Link to="/" className={s.logo}>
            <img src={logo} alt="logo"/>
          </Link>
          <Link to={'/categories'} className={s.catalogBtn}>
            Catalog
          </Link>
          <Link to={'/'} className={s.menuItem}>
            Main Page
          </Link>
          <Link to={'/all'} className={s.menuItem}>
            All products
          </Link>
          <Link to={'/sale'} className={s.menuItem}>
            All sales
          </Link>
          <Link to={'/cart'}><img src={cartIcon} alt="cart icon"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
