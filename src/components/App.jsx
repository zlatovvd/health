import { Route, Routes } from "react-router-dom";
import CalculateForm from "./Calculate/CalculateForm";
import Layout from "./Layout/Layout";
import css from './App.module.css';

export const App = () => {
  return (
    <div class={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CalculateForm />} />
        </Route>
      </Routes>
      {/* {<CalculateForm />} */}
      
    </div>
  );
};
