import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products;
export const selectFilter = state => state.filter;
export const selectEatenProducts = state => state.intake.eatenProduct;
export const selectDailyCalories = state => state.intake.dailyCalories;

export const selectState = state => state;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    return products.filter(item =>
      item.title.ua.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectDailyCalorieIntake = createSelector(
//   [selectDailyCalorie, selectProducts],
//   (dailyCalories, products) => {
//     const { height, age, cWeight, dWeight, typeblood } = dailyCalories;
//     const calories = calculate(height, age, cWeight, dWeight);
//     const notRecommended = notRecommendedProducts(typeblood, products);
//     return { calories, notRecommended };
//   }
// );

// const calculate = (height, age, cWeight, dWeight) => {
//   return (
//     10 * Number(cWeight) +
//     6.25 * Number(height) -
//     5 * Number(age) -
//     161 -
//     10 * (Number(cWeight) - Number(dWeight))
//   );
// };

// const notRecommendedProducts = (typeblood, products) => {
//   const notRecommended = [];
//   products.map(item => {
//     if (
//       item.groupBloodNotAllowed[typeblood] === true &&
//       !notRecommended.includes(item.categories[0])
//     ) {
//       notRecommended.push(item.categories[0]);
//     }
//   });

//   return notRecommended;
// };
