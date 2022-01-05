import { ReactElement, useState } from 'react';
import './accordion.scss';
import { ReactComponent as DownArrow } from '../../assets/icon/down-arrow.svg';

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion = ({ title, description }: AccordionProps): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="accordion">
      <div
        className={`accordion__contentBx ${isActive ? 'active' : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="accordion__label">
          <DownArrow className="accordion__icon" />
          {title}
        </div>
        <div className="accordion__content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
