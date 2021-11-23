/* eslint-disable no-console */
import { useState } from 'react';
import { SortingType } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import { changeSorting } from '../../store/action';
import { getCurrentSortOption } from '../../store/app-process/selectors';

function SortingForm(): JSX.Element {
  const currentSortingOption = useSelector(getCurrentSortOption);
  const dispatch = useDispatch();
  const [isClicked, setClicked] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setClicked(!isClicked)}>
        {currentSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isClicked ? 'places__options--opened' : ''}`}>
        {Object.values(SortingType).map((sort, id) => {
          const keyValue = `${sort}-${id}`;
          return (
            <li className={`places__option ${currentSortingOption === sort ? 'places__option--active' : ''}`} tabIndex={0}
              key={keyValue}
              onClick={() => dispatch(changeSorting(sort))}
            >{sort}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default SortingForm;
