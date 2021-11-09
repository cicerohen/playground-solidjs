import { Header } from '../Header';
import { Title } from '../Title';

export const View = ({ title, children }) => {
  return (
    <div className="view">
      <Header />
      <main className="view__main">
        <Title>{title}</Title>
        {children}
      </main>
      <div className="view__footer-container">footer</div>
    </div>
  );
};
