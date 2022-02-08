import { ReactElement, useEffect, useState } from 'react';
import './invoiceLayout.scss';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import Logo from '../../assets/img/logo.webp';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { t } from 'i18next';
import axios from 'axios';
import ShowToast from '../../components/Toast/Toast';

interface IInvoiceLayoutProps {
  formData: FormData;
  setFormData: (key: string, value: string | Blob) => void;
}

const InvoiceLayout = ({
  formData,
  setFormData,
}: IInvoiceLayoutProps): ReactElement => {
  const [unitPrice, setUnitPrice] = useState<number>(0);
  const [invoiceId, setInvoiceId] = useState<string>('');
  // من الانجليزي الي العربي أو العكس هيبقي السعر 80ريال + 15% ضريبة
  // من اي لغات اخري هيبقي السعر 140ريال + 15% ضريبة
  const totalPrice = () => {
    return Number(formData.get('numberOfPage') ?? 0) * unitPrice;
  };
  const totalAndVatPrice = () => {
    return Number((totalPrice() * 1.15).toString().split('.')[0]) + 1;
  };

  const calculateVat = () => {
    return totalPrice() * 0.15;
  };

  const newDate = new Date().toLocaleDateString();

  const handleEmailAndPayment = async () => {
    setFormData('invoice_date', newDate);
    setFormData('page_price', String(unitPrice));
    setFormData('vat', String(calculateVat()));
    setFormData('total_price', String(totalAndVatPrice()));
    try {
      const {
        data: { checkoutId },
      } = await axios.post('/user_data', formData, {
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=<calculated when request is sent>',
        },
      });
      alert('Invoice sent successfully to your email press ok to continue');
      window.location.replace(
        `http://localhost:5000/checkout-redirect/${checkoutId}`
      );
    } catch (error) {
      ShowToast({
        type: 'error',
        msg: t('anErrorOccurredPleaseTryAgainLater'),
      });
    }
  };

  useEffect(() => {
    languagePrice();
    getNextId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const languagePrice = () => {
    if (
      (formData.get('selectedFromLanguage') === 'English' &&
        formData.get('selectedToLanguage') === 'Arabic') ||
      (formData.get('selectedFromLanguage') === 'Arabic' &&
        formData.get('selectedToLanguage') === 'English')
    ) {
      setUnitPrice(80);
    } else setUnitPrice(140);
  };

  const getNextId = async () => {
    const {
      data: { invoiceId },
    } = await axios.get('/next-invoice-id');

    setInvoiceId(invoiceId);
  };

  return (
    <div className="invoice-layout-and-pay-button">
      <div className="invoice-layout">
        <div className="invoice-layout__title">
          <Typography type={TypographyType.secondary}>
            {t('electronicInvoice')}
          </Typography>
          <div className="invoice-layout__border-bottom" />
        </div>
        <div className="invoice-layout__content">
          {/* header */}
          <div className="invoice-layout__header">
            <div className="header-text">
              <span>
                {t('taxNumber')} :
                <span className="header-text__description">300782075600</span>
              </span>
              <span>
                {t('date')} :
                <span className="header-text__description">{newDate}</span>
              </span>
              <span>
                {t('invoiceNumber')} :
                <span className="header-text__description"># {invoiceId}</span>
              </span>
            </div>
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          {/* body */}
          <table className="table">
            <tbody>
              <tr className="table__title">
                <td className="invoice-table-title">
                  {t('requiredTranslation')}
                </td>
                <td className="invoice-table-title">{t('page')}</td>
                <td className="invoice-table-title">
                  {t('pagePrice')} {t('sar')}
                </td>
                <td className="invoice-table-title">
                  {t('vat')} {t('sar')}
                </td>
                <td className="invoice-table-title">
                  {t('totalPrice')} {t('sar')}
                </td>
              </tr>
              <tr>
                <td>{`${formData.get('selectedFromLanguage')} ${t(
                  'to'
                )} ${formData.get('selectedToLanguage')}`}</td>
                <td>{formData.get('numberOfPage')}</td>
                <td>{unitPrice}</td>
                <td>{calculateVat()}</td>
                <td>{totalAndVatPrice()}</td>
              </tr>
            </tbody>
          </table>
          <div className="invoice-layout__notes">
            <span className="invoice-layout__notes-titel">{t('notes')} :</span>
            <span className="invoice-layout__notes-description">
              {formData.get('message')}
            </span>
          </div>
          {/* footer */}
          <div className="invoice-layout__footer">
            <span>{t('location')}</span>
          </div>
        </div>
      </div>
      <CustomButton onClick={handleEmailAndPayment} type={ButtonType.solid}>
        {t('sendTheInvoiceAndProceedToPay')}
      </CustomButton>
    </div>
  );
};

export default InvoiceLayout;
