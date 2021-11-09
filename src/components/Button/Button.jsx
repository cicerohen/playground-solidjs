import classNames from 'classnames';

export const Button = ({ children, size, palette, onClick }) => {
  const className = classNames({
    button: true,
    [`button--${size}`]: size,
    [`button--${palette}`]: palette
  });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
