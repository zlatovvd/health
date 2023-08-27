import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
//import css from './Layout.module.css';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
