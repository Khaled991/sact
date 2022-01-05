import { ReactElement } from 'react';
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
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

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
                <span className="header-text__description">1/6/2022</span>
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
                <th>{t('requiredTranslation')}</th>
                <th>{t('page')}</th>
                <th>{t('pagePrice')}</th>
                <th>{t('totalPrice')}</th>
              </tr>
              <tr>
                <td>Russian to English</td>
                <td>2</td>
                <td>140</td>
                <td>280</td>
              </tr>
            </tbody>
          </table>
          <div className="table-and-notes">
            <div className="invoice-layout__notes">
              <span className="invoice-layout__notes-titel">
                {t('notes')} :
              </span>
              <span className="invoice-layout__notes-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo
              </span>
            </div>
            <table className="table-and-notes__cost-table">
              <tbody>
                <tr>
                  <th>{t('totalPrice')}</th>
                  <td>440 SAR</td>
                </tr>
                <tr>
                  <th>{t('vat')}</th>
                  <td>66 SAR</td>
                </tr>
                <tr>
                  <th>{t('deservedAmount')}</th>
                  <td>506 SAR</td>
                </tr>
              </tbody>
            </table>
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
