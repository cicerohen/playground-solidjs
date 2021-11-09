import classNames from 'classnames';

export const ListItem = ({ leading, trailing, children }) => {
  const classes = classNames({
    list__item: true,
    'list__item--plain': !leading && !trailing
  });

  return (
    <li className={classes}>
      {leading || trailing ? (
        <>
          {leading && <div className="list__item-leading">{leading}</div>}
          {trailing && <div className="list__item-trailing">{trailing}</div>}
        </>
      ) : (
        children
      )}
    </li>
  );
};
