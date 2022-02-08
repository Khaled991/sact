import { t } from 'i18next';
import { ReactElement } from 'react';
import './card.scss';

interface ICardProps {
  symbol: string;
  title: string;
  description?: string;
}

const Card = ({ symbol, title, description }: ICardProps): ReactElement => {
  return (
    <div className="feature-box">
      <img
        src={symbol}
        alt="card-icon"
        className="feature-box__icon card-icon"
        width="600"
        height="400"
      />
      <h3 className="feature-box__card-title">{t(title)}</h3>
      {description && (
        <p className="feature-box__description">{t(description)}</p>
      )}
    </div>
  );
};

export default Card;
