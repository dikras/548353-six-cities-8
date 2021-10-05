import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--notfound">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <section>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>

  );
}

export default NotFoundScreen;
