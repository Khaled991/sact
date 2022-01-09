import { ReactElement, useState } from 'react';
import { t } from 'i18next';
import CustomInput from '../../components/customInput/customInput';
import LayoutForm from '../../layout/layoutForm/layoutForm';
import './customerFeedback.scss';
import { Textarea } from './../../components/customInput/customInput';
import CustomButton, { ButtonType } from '../../components/Button/button';

export interface ICustomerFeedback {
  name?: string;
  email?: string;
  yourEnquiry?: string;
}

const CustomerFeedback = (): ReactElement => {
  const [feedback, setFeedback] = useState<ICustomerFeedback>({});

  const onChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback({ ...feedback, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="customer-feedback">
      <LayoutForm onSubmitForm={onSubmitForm} title={t('customerFeedback')}>
        <CustomInput
          placeholder={t('name')}
          type="name"
          name="name"
          onChange={onChangeField}
        />
        <CustomInput
          placeholder={t('email')}
          type="email"
          name="email"
          onChange={onChangeField}
        />

        <Textarea
          placeholder={t('yourEnquiry')}
          type="text"
          name="yourEnquiry"
          onChange={onChangeField}
        />
        <div className="stritched-botton">
          <CustomButton type={ButtonType.solid}>{t('send')}</CustomButton>
        </div>
      </LayoutForm>
    </div>
  );
};

export default CustomerFeedback;
