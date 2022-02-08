import { ReactElement, useState } from 'react';
import './customDropdown.scss';
import { ReactComponent as DownArrow } from '../../assets/icon/down-arrow.svg';
import useComponentVisible from '../../hooks/useComponentVisible';

interface ICustomDropdownProps {
  title: string;
  item: string[];
  setSelected: (newSelectedValue: string) => void;
}

const CustomDropdown = ({
  title,
  item,
  setSelected,
}: ICustomDropdownProps): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelectedLocal] = useState<string>('');
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div className="custom-dropdown" ref={ref}>
      <div
        className="custom-ropdown-btn"
        style={{ color: selected ? '#000' : '#777' }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span>{selected === '' ? title : selected}</span>
        <DownArrow className="down-arrow" />
      </div>
      {isActive && isComponentVisible && (
        <div className="custom-ropdown-content">
          {item.map((opinion, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(opinion);
                setSelectedLocal(opinion);
                setIsComponentVisible(false);
                // setIsActive(false);
              }}
              className="custom-ropdown-item"
            >
              {opinion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
