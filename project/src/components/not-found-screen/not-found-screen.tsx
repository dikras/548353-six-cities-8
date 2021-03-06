import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--notfound">
      <section>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </section>
    </div>

  );
}

export default NotFoundScreen;
