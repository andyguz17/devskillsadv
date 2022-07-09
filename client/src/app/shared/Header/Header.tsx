import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './Header.scss';

const Header = () => {
  const {
    auth: { name },
    isAuth,
    logout,
  } = useAuth();

  const handleClass = ({ isActive }: { isActive: boolean }) =>
    `link-item ${isActive && 'link-active'}`;

  return (
    <header>
      {isAuth ? (
        <>
          <NavLink className={handleClass} to={''} children={'Home'} />
          <NavLink className={handleClass} to={'users'} children={'Members'} />
          <span>{name}</span>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <NavLink className={handleClass} to={'login'} children={'Login'} />
      )}
    </header>
  );
};

export default Header;
