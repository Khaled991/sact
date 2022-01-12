import { ReactElement, useState } from 'react';
import { t } from 'i18next';
import CustomInput from '../../components/customInput/customInput';
import LayoutForm from '../../layout/layoutForm/layoutForm';
import './contactUs.scss';
import { Textarea } from './../../components/customInput/customInput';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { Col, Row } from 'react-bootstrap';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';

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

  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28995.612509800998!2d46.671859!3d24.711373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x603253c7ed05a2d6!2z2LXYp9mE2K0g2KLZhCDYudmF2LEg2YTZhNiq2LHYrNmF2Kkg2KfZhNmF2LnYqtmF2K_YqQ!5e0!3m2!1sar!2seg!4v1641841434762!5m2!1sar!2seg';

  return (
    <div className="contact-us">
      <div className="message-and-official-working-time">
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
        <table className="official-working-table">
          <tbody>
            <tr>
              <th>{t('saturday')}</th>
              <td>11:00 AM - 05:00 PM</td>
            </tr>
            <th>{t('sunday')}</th>
            <td>08:30 AM - 09:00 PM</td>
            <tr>
              <th>{t('monday')}</th>
              <td>08:30 AM - 09:00 PM</td>
            </tr>
            <th>{t('tuesday')}</th>
            <td>08:30 AM - 09:00 PM</td>
            <tr>
              <th>{t('wednesday')}</th>
              <td>08:30 AM - 09:00 PM</td>
            </tr>
            <tr>
              <th>{t('thursday')}</th>
              <td>08:30 AM - 09:00 PM</td>
            </tr>
            <tr>
              <th>{t('firday')}</th>
              <td>{t('closed')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Row className="our-offices">
        <Typography type={TypographyType.secondary} color="#f1923d">
          {t('ourOffices')}
        </Typography>
        <Col md={6} className="offices-description">
          {t('alOlayaBranch')}
          <br />
          {t('salehAlOmarCertifiedTranslation')}
          <br />
          {t('address')}: {'location'},
          <br />
          {t('telephone')}: +966561114395
          <br />
          {t('Email')}: info@sact.co
        </Col>
        <Col md={6} className="offices-description">
          {t('makkahAlMukarramahBranch')}
          <br />
          {t('salehAlOmarCertifiedTranslation')}
          <br />
          {t('address')}: {t('secondLocation')}
          <br />
          {t('telephone')}: 0542015599
        </Col>
      </Row>
      <iframe src={mapUrl} className="google-map" loading="lazy" title="map" />
    </div>
  );
};

export default ContactUs;
