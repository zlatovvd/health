import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import css from './App.module.css';
import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { PublicRoute, PrivateRoute } from './AuthRouts';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';

export const App = () => {

  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
