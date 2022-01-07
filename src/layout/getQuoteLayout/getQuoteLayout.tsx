import { ReactElement } from 'react';
import './getQuoteLayout.scss';
import CustomInput, {
  Textarea,
} from '../../components/customInput/customInput';
import { Row, Col } from 'react-bootstrap';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { ReactComponent as Visa } from '../../assets/icon/visa.svg';
import CustomDropdown from '../../components/customDropdown/customDropdown';
import { t } from 'i18next';
import { IUserData } from './../../pages/getFreeQoute/getFreeQoute';

interface IGetQuoteLayoutProps {
  setUserData: (userData: IUserData) => void;
  setNavToInvoice: (navToInvoice: boolean) => void;
  userData: IUserData;
}

const GetQuoteLayout = ({
  setUserData,
  setNavToInvoice,
  userData,
}: IGetQuoteLayoutProps): ReactElement => {
  const setSelectedFirstLng = (selectedFirstLng: string) =>
    setUserData({ ...userData, selectedFirstLng });
  const setSelectedSecondLng = (selectedSecondLng: string) =>
    setUserData({ ...userData, selectedSecondLng });
  const setSelectedRequest = (selectedRequest: string) =>
    setUserData({ ...userData, selectedRequest });

  const onChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [name]: value });
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
    if (userData?.selectedFirstLng === '')
      return alert('Choose the language from which you will translate');
    if (userData?.selectedSecondLng === '')
      return alert('Choose the language you will translate into');
    if (userData?.selectedRequest === '') return alert('Choose request status');
    if (userData?.selectedFirstLng === userData?.selectedSecondLng)
      return alert('Please change second language');

    setNavToInvoice(true);
  };

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

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
              setSelected={setSelectedFirstLng}
            />
          </Col>
          <Col>
            <CustomDropdown
              title={t('to')}
              item={languagesItem}
              setSelected={setSelectedSecondLng}
            />
          </Col>
        </Row>
        <CustomInput type="file" name="project_file" onChange={onChangeField} />
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
          <CustomButton type={ButtonType.solid}>{t('getAQoute')}</CustomButton>
          <div className="visa-and-text">
            <span className="visa-and-text__text">{t('payUsing')}</span>
            <Visa className="visa-and-text__icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetQuoteLayout;

// من الانجليزي الي العربي هيبقي السعر 80ريال + 15% ضريبة
// من اي لغات اخري هيبقي السعر 140ريال + 15% ضريبة
