type MainScreenEmptyProps = {
  currentCity: string;
}

function MainScreenEmpty({currentCity}: MainScreenEmptyProps): JSX.Element {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
        </div>
      </section>
      <div
        className="cities__right-section"
        style={{
          backgroundImage: 'url(img/no-places@2x.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 100%',
          backgroundSize: 'auto 119%',
        }}
      >
      </div>
    </div>
  );
}

export default MainScreenEmpty;
