import { ReactElement } from 'react';
import './getQuoteLayout.scss';
import CustomInput, {
  Textarea,
} from '../../components/customInput/customInput';
import { Row, Col } from 'react-bootstrap';
import CustomButton, { ButtonType } from '../../components/Button/button';
import Hyperpay from '../../assets/img/hyperpay.webp';
import CustomDropdown from '../../components/customDropdown/customDropdown';
import { t } from 'i18next';
import ShowToast from '../../components/Toast/Toast';

interface IGetQuoteLayoutProps {
  setNavToInvoice: (navToInvoice: boolean) => void;
  formData: FormData;
  setFormData: (key: string, value: string | Blob) => void;
}

const GetQuoteLayout = ({
  setNavToInvoice,
  formData,
  setFormData,
}: IGetQuoteLayoutProps): ReactElement => {
  const setselectedFromLanguage = (selectedFromLanguage: string) =>
    setFormData('selectedFromLanguage', selectedFromLanguage);
  const setselectedToLanguage = (selectedToLanguage: string) =>
    setFormData('selectedToLanguage', selectedToLanguage);
  const setSelectedRequest = (selectedRequest: string) =>
    setFormData('selectedRequest', selectedRequest);

  const onChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(name, value);
  };

  const languagesItem = [
    t('English'),
    t('Arabic'),
    t('Russian'),
    t('Italian'),
    t('Chinese'),
    t('Spanish'),
    t('French'),
    t('German'),
    t('Dutch'),
  ];

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.get('selectedFromLanguage') === null) {
      return ShowToast({
        type: 'error',
        msg: t('pleaseChooseTheLanguageFromWhichYouWillTranslate'),
      });
    } else if (formData.get('selectedToLanguage') === null) {
      return ShowToast({
        type: 'error',
        msg: t('pleaseChooseTheLanguageYouWillTranslateInto'),
      });
    } else if (
      formData.get('selectedFromLanguage') ===
      formData.get('selectedToLanguage')
    ) {
      return ShowToast({ type: 'error', msg: t('pleaseChangeSecondLanguage') });
    } else if (formData.get('selectedRequest') === null) {
      return ShowToast({ type: 'error', msg: t('pleaseChooseRequestStatus') });
    } else {
      setNavToInvoice(true);
    }
  };

  return (
    <div className="get-quote-layout">
      <form onSubmit={onSubmitForm} className="get-quote-layout__form">
        <span className="get-quote-layout__title">{t('getAFreeQuote')}</span>

        <Row className="p-0">
          <Col>
            <CustomInput
              placeholder={t('name')}
              type="name"
              name="name"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('phone')}
              type="tel"
              name="phone"
              maxLength={14}
              minLength={9}
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('email')}
              type="email"
              name="email"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('numberOfPage')}
              type="number"
              name="numberOfPage"
              maxLength="12"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDropdown
              title={t('languageFrom')}
              item={languagesItem}
              setSelected={setselectedFromLanguage}
            />
          </Col>
          <Col>
            <CustomDropdown
              title={t('to')}
              item={languagesItem}
              setSelected={setselectedToLanguage}
            />
          </Col>
        </Row>
        <CustomInput
          type="file"
          name="project_file"
          onChange={({ target: { files, name } }: any) => {
            if (files != null) setFormData(name, files[0]);
          }}
        />

        <CustomDropdown
          title={t('requestStatus')}
          item={[t('normal'), t('urgent')]}
          setSelected={setSelectedRequest}
        />
        <Textarea
          placeholder={t('notes')}
          name="message"
          onChange={onChangeField}
        />
        <div className="box-footer">
          <CustomButton type={ButtonType.solid}>{t('getAQuote')}</CustomButton>
          <div className="hyperpay-payment-icon">
            <img src={Hyperpay} alt="payment" width="100%" height="auto" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetQuoteLayout;
