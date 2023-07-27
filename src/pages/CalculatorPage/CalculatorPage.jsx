import css from './CalculatorPage.module.css'

import RightSideBar from 'components/RightSideBar/RightSideBar';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorCalorieForm';
//import Container from 'components/Container/Container';


const CalculatorPage = () => {
  return (
    <div className={css.calculatorPage}>
        <CalculatorCalorieForm />
        <RightSideBar />
    </div>
  );
};

export default CalculatorPage;
