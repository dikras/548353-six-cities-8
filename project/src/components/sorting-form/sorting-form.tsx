/* eslint-disable no-console */
/* eslint-disable no-debugger */
import { useState } from 'react';
import { SortingType } from '../../const';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { Actions } from '../../types/action';
import { changeSorting } from '../../store/action';

const mapStateToProps = ({APP}: State) => ({
  currentSortingOption: APP.currentSortingOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortingOptionClick(currentSortingOption: SortingType) {
    dispatch(changeSorting(currentSortingOption));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SortingForm(props: PropsFromRedux): JSX.Element {
  const { currentSortingOption, onSortingOptionClick } = props;
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
              onClick={() => onSortingOptionClick(sort)}
            >{sort}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export {SortingForm};
export default connector(SortingForm);
