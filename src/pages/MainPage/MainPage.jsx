import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import css from './MainPage.module.css';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <h1 className={css.title}>
        Calculate your daily calorie intake right now
      </h1>
      {/* <DailyCaloriesForm /> */}
      {/* <DailyCalorieIntake/> */}
      <DiaryAddProductForm/>
    </div>
  );
};

export default MainPage;
