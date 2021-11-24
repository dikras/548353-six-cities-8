import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { CityName, SortingType } from '../../const';

export const getCurrentCity = (state: State): CityName => state[NameSpace.app].currentCity;
export const getCurrentSortOption = (state: State): SortingType => state[NameSpace.app].currentSortingOption;
