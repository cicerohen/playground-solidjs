import classNames from 'classnames';

export const Title = ({ level, children, palette }) => {
  const classes = classNames({
    title: true,
    [`title--${level}`]: level,
    [`title--${palette}`]: palette
  });

  return <h1 className={classes}>{children}</h1>;
};
