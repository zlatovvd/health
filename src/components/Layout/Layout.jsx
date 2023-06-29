import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      {<AppBar />}
      <div className={css.container}>
        {<Outlet />}
      </div>
        
      
    </>
  );
};

export default Layout;
