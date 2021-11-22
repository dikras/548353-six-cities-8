import { AppProcess } from '../../types/state';
import { CityName, SortingType } from '../../const';
import { Actions, ActionType } from '../../types/action';

const initialState: AppProcess = {
  currentCity: CityName.Paris,
  currentSortingOption: SortingType.Default,
};

const appProcess = (state = initialState, action: Actions): AppProcess => {
  switch(action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.ChangeSorting:
      return {...state, currentSortingOption: action.payload};
    default:
      return state;
  }
};

export {appProcess};
