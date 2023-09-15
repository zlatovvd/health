import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.data;
export const selectFilter = state => state.products.filter;
export const selectPersonInfo = state => state.intake.personInfo;

export const selectState = state => state;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    return products.filter(item =>
      item.title.ua.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFoundProduct = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    return products.find(
      option => option.title.ua.toLowerCase() === filter.toLowerCase()
    );
  }
);

export const selectCalculateDailyCalories = createSelector(
  [selectPersonInfo],
  personInfo => {
    if(personInfo) {
      const { height, age, cweight, dweight } = personInfo;

      return (
        10 * Number(cweight) +
        6.25 * Number(height) -
        5 * Number(age) -
        161 -
        10 * (Number(cweight) - Number(dweight))
      );
    }
    return 0;
    
  }
);

export const selectNotRecommendedProducts = createSelector(
  [selectProducts, selectPersonInfo],
  (products, personInfo) => {
    if (personInfo) {
      const notRecommended = [];
      const {typeblood} = personInfo;
      products.map(item => {
        if (
          item.groupBloodNotAllowed[typeblood] === true &&
          !notRecommended.includes(item.categories[0])
        ) {
          notRecommended.push(item.categories[0]);
        }
      });
  
      return notRecommended;
    }

    return [];
    
  }
);
