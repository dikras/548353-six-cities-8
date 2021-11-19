import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isMainScreen: boolean;
}

function Logo(isMainScreen: LogoProps): JSX.Element {
  return (
    <Link className={`${isMainScreen ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}`} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
