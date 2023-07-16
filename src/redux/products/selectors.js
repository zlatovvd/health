import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.data;
export const selectFilter = state => state.products.filter;
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

export const selectFoundProduct = createSelector(
  [selectProducts, selectFilter], (products, filter) => {
    return products.find(option => option.title.ua.toLowerCase() === filter.toLowerCase());
  }
)