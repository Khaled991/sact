import { ReactElement, useEffect, useState } from 'react';
import './invoiceLayout.scss';
import { IUserData } from './../../pages/getFreeQoute/getFreeQoute';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import Logo from '../../assets/img/logo.png';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { t } from 'i18next';

interface IInvoiceLayoutProps {
  userData: IUserData;
}

const InvoiceLayout = ({ userData }: IInvoiceLayoutProps): ReactElement => {
  const [unitPrice, setUnitPrice] = useState<number>(0);

  const totalPrice = () => {
    return Number(userData?.numberOfPage ?? 0) * unitPrice;
  };
  const totalAndVatPrice = () => {
    return Number((totalPrice() * 1.15).toString().split('.')[0]) + 1;
  };

  const vat = () => {
    return totalPrice() * 0.15;
  };

  const languagePrice = () => {
    if (
      (userData?.selectedFirstLng === 'English' &&
        userData?.selectedSecondLng === 'Arabic') ||
      (userData?.selectedFirstLng === 'Arabic' &&
        userData?.selectedSecondLng === 'English')
    ) {
      setUnitPrice(80);
    } else setUnitPrice(140);
  };

  useEffect(() => {
    languagePrice();
    console.log(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

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
                <span className="header-text__description">
                  {new Date().toLocaleDateString()}
                </span>
              </span>
              <span>
                {t('invoiceNumber')} :
                <span className="header-text__description"># 000010</span>
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
                <td>{`${userData?.selectedFirstLng} ${t('to')} ${
                  userData?.selectedSecondLng
                }`}</td>
                <td>{userData?.numberOfPage}</td>
                <td>{unitPrice}</td>
                <td>{vat()}</td>
                <td>{totalAndVatPrice()}</td>
              </tr>
            </tbody>
          </table>
          <div className="invoice-layout__notes">
            <span className="invoice-layout__notes-titel">{t('notes')} :</span>
            <span className="invoice-layout__notes-description">
              {userData?.message}
            </span>
          </div>
          {/* footer */}
          <div className="invoice-layout__footer">
            <span>{t('location')}</span>
          </div>
        </div>
      </div>
      <CustomButton type={ButtonType.solid}>
        {t('sendTheInvoiceAndProceedToPay')}
      </CustomButton>
    </div>
  );
};

export default InvoiceLayout;
