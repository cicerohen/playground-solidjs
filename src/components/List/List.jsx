import classNames from 'classnames';

export const List = ({ isLoading, children }) => {
  const classes = classNames({
    'list-wrapper': true,
    'list--is-loading': isLoading
  });
  return (
    <div className={classes}>
      {isLoading && <div className="list__loader-wrapper">loading</div>}
      <ul className="list">{children}</ul>
    </div>
  );
};
