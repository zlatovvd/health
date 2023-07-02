import css from './DailyCalorieIntake.module.css';

const DailyCalorieIntake = () => {
  return (
    <>
      <h1 className={css.title}>Your recommended daily calorie intake is</h1>
      <div className={css.container}>
        <p className={css.calories}>
          2800<span> ккал</span>
        </p>
        <h2 className={css.foodTitle}>Foods you should not eat</h2>
        <ol className={css.foodList}>
          <li className={css.foodItem}>Flour products</li>
          <li className={css.foodItem}>Milk</li>
          <li className={css.foodItem}>Red meat</li>
          <li className={css.foodItem}>Smoked meats</li>
        </ol>
        <button className={css.modalBtn}>Start losing weight</button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
