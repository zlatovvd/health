import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
//import css from './Layout.module.css';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
