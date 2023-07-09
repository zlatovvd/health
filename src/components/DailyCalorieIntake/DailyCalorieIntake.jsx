import { useSelector } from 'react-redux';
import css from './DailyCalorieIntake.module.css';
import { selectDailyCalories, selectProducts } from 'redux/products/selectors';

const DailyCalorieIntake = () => {
  const dailyCalories = useSelector(selectDailyCalories);
  const products = useSelector(selectProducts);
  const { height, age, cWeight, dWeight, typeblood } = dailyCalories;

  const calculate = (height, age, cWeight, dWeight) => {
    return (
      10 * Number(cWeight) +
      6.25 * Number(height) -
      5 * Number(age) -
      161 -
      10 * (Number(cWeight) - Number(dWeight))
    );
  };

  const notRecommendedProducts = (typeblood, products) => {
    const notRecommended = [];
    products.map(item => {
      if (
        item.groupBloodNotAllowed[typeblood] === true &&
        !notRecommended.includes(item.categories[0])
      ) {
        notRecommended.push(item.categories[0]);
      }
    });

    return notRecommended;
  };

  const calories = calculate(height, age, cWeight, dWeight);
  const notRecommended = notRecommendedProducts(typeblood, products)

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
            <li key={item} className={css.foodItem}>{item}</li>  
          ))}
        </ol>
        <button className={css.modalBtn}>Start losing weight</button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
