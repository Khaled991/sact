import { ReactElement } from 'react';
import './_button.scss';

export enum ButtonType {
  solid = 'solid-btn',
  textButton = 'text-button',
}

interface CustomButtonProps {
  children: any;
  type: ButtonType;
}

const CustomButton = ({
  children,
  type,
  ...props
}: CustomButtonProps): ReactElement => {
  return (
    <button className={`btn ${type}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
