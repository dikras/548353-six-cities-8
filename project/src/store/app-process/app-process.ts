import { createReducer } from '@reduxjs/toolkit';
import { AppProcess } from '../../types/state';
import { CityName, SortingType } from '../../const';
import { changeCity, changeSorting } from '../action';

const initialState: AppProcess = {
  currentCity: CityName.Paris,
  currentSortingOption: SortingType.Default,
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSortingOption = action.payload;
    });
});

export {appProcess};
