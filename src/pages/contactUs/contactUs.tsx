import { ReactElement, useState } from 'react';
import { t } from 'i18next';
import CustomInput from '../../components/customInput/customInput';
import LayoutForm from '../../layout/layoutForm/layoutForm';
import './contactUs.scss';
import { Textarea } from './../../components/customInput/customInput';
import CustomButton, { ButtonType } from '../../components/Button/button';

export interface IContactUs {
  name?: string;
  email?: string;
  message?: string;
}

const ContactUs = (): ReactElement => {
  const [complaint, setComplaint] = useState<IContactUs>({});

  const onChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setComplaint({ ...complaint, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us">
      <LayoutForm onSubmitForm={onSubmitForm} title={t('contactUs')}>
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
          placeholder={t('message')}
          type="text"
          name="message"
          onChange={onChangeField}
        />
        <CustomButton type={ButtonType.solid}>{t('send')}</CustomButton>
      </LayoutForm>
    </div>
  );
};

export default ContactUs;
