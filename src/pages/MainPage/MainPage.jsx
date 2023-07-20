import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import css from './MainPage.module.css';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { useToggle } from 'hooks/useToggle';
import { useSelector } from 'react-redux';
import { selectCalculateDailyCalories } from 'redux/products/selectors';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';

const MainPage = () => {

  const { isOpen, toggle } = useToggle();
  const calculateCalories = useSelector(selectCalculateDailyCalories);
  //if (calculateCalories>0) toggle();

  return (
    <div className={css.mainPage}>
      <DailyCaloriesForm />
      {calculateCalories && (
        <Modal close={toggle}>
          <DailyCalorieIntake />
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
