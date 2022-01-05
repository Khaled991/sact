import { ReactElement } from 'react';
import './customInput.scss';

const CustomInput = ({ ...props }): ReactElement => {
  return <input className="custome-input" {...props} required />;
};

export const Textarea = ({ ...props }): ReactElement => {
  return <textarea className="custome-input" {...props} required rows={5} />;
};

export default CustomInput;
