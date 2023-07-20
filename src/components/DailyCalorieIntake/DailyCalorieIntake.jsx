import { useSelector } from 'react-redux';
import css from './DailyCalorieIntake.module.css';
import {
  selectCalculateDailyCalories,
  selectNotRecommendedProducts,
} from 'redux/products/selectors';

const DailyCalorieIntake = () => {
  const calories = useSelector(selectCalculateDailyCalories);
  const notRecommended = useSelector(selectNotRecommendedProducts);

  return (
    <>
      <h1 className={css.title}>Your recommended daily calorie intake is</h1>
      <div className={css.container}>
        <p className={css.calories}>
          {Math.ceil(calories)}
          <span> ккал</span>
        </p>
        <h2 className={css.foodTitle}>Foods you should not eat</h2>
        <ol className={css.foodList}>
          {notRecommended.map(item => (
            <li key={item} className={css.foodItem}>
              {item}
            </li>
          ))}
        </ol>
        <button className={css.modalBtn}>Start losing weight</button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
