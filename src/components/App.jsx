import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import css from './App.module.css';
import { PublicRoute, PrivateRoute } from './AuthRouts';
import NotFound from 'pages/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { authRefresh } from 'redux/auth/authThunk';
import { useAuth } from 'hooks/useAuth';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);


export const App = () => {

  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(authRefresh());
  }, []);

  return isRefreshing ? (<b>Refreshing user...</b>) : (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/diary" element={<DiaryPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};
