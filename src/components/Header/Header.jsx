import { Title } from '../Title';
export const Header = () => {
  return (
    <header className="header">
      <div className="header__left-content">
        <Title level={5} palette="secondary">
          A simple SolidJS example
        </Title>
      </div>
      <div></div>
    </header>
  );
};
