import { ReactElement } from 'react';
import './footer.scss';
import SupportCompanys from '../../assets/img/company.png';
import { socilMediaData } from './footerData';
import { ReactComponent as Call } from '../../assets/icon/call.svg';
import { ReactComponent as Location } from '../../assets/icon/location.svg';
import { Row, Col } from 'react-bootstrap';
import { t } from 'i18next';

const Footer = (): ReactElement => {
  return (
    <div className="footer">
      <span className="footer__top">{t('ourVegenTo2030')}</span>

      <div className="footer__content">
        <Row>
          <Col xs={12} md={4} className="footer__cols">
            <div>
              <span className="footer__title">{t('callNowforServices')}</span>
              <a href="tel:+966561114395" className="footer__description">
                <Call className="footer__icon footer__icon--call" />
                +966561114395
              </a>
              <a
                href="https://goo.gl/maps/wWzAd72kDFs3H5oY9"
                target="_blank"
                rel="noreferrer"
                className="footer__description"
              >
                <Location className=" footer__icon  footer__icon--location" />
                {t('location')}
              </a>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer__cols">
            <div>
              <span className="footer__title">{t('services')}</span>
              <a href="/confidentiality" className="footer__description">
                {t('confidentiality')}
              </a>
              <a href="/cookiesPolicy" className="footer__description">
                {t('cookiesPolicy')}
              </a>
              <a href="sda" className="footer__description">
                {t('houseOfTransaltor')}
              </a>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer__cols">
            <div>
              <span className="footer__title">{t('customerSupport')}</span>
              <a href="/customer-feedback" className="footer__description">
                {t('customerFeedback')}
              </a>
              <a href="/contact-us" className="footer__description">
                {t('contactUs')}
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer__bottom">
        <Col xs={12} md={4} className="footer__bottom-cols">
          <h3 className="footer__rights-reserved">
            Saleh Alomar Certified Translation © 2021 All rights reserved
          </h3>
        </Col>
        <Col xs={12} md={4} className="footer__bottom-cols">
          <img
            src={SupportCompanys}
            alt="supportCompanys"
            className="footer__support-companys"
          />
        </Col>
        <Col xs={12} md={4} className="footer__bottom-cols">
          <div className="footer__socil-media-container">
            {socilMediaData.map(({ link, Icon }, i) => (
              <a target="_blank" rel="noreferrer" href={link} key={i}>
                <Icon />
              </a>
            ))}
          </div>
        </Col>
      </div>
    </div>
  );
};
export default Footer;
