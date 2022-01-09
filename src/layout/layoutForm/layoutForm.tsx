import { ReactElement } from 'react';
import './layoutForm.scss';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LayoutForm = ({
  children,
  title,
  onSubmitForm,
}: ILayoutProps): ReactElement => {
  return (
    <div className="layout-form">
      <span className="layout-form__title">{title}</span>
      <form onSubmit={onSubmitForm}>{children}</form>
    </div>
  );
};

export default LayoutForm;
