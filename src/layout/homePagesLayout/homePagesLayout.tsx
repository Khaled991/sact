import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import './homePagesLayout.scss';
import homePageImage from '../../assets/img/image-part-1.svg';
// import SupportCompany from '../../components/supportCompany/supportCompany';

interface HomePagesLayoutProps {
  children: any;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  // background: any;
}
const HomePagesLayout = ({
  children,
  primaryText,
  secondaryText,
  tertiaryText,
}: // background,
HomePagesLayoutProps): ReactElement => {
  return (
    <>
      <Col md={6}>
        <div className="home-page-content">
          <Typography type={TypographyType.primary} color="#f1923d">
            {primaryText}
          </Typography>
          <Typography type={TypographyType.primary}>{secondaryText}</Typography>
          <div className="home-page-content__description">
            <Typography type={TypographyType.tertiary}>
              {tertiaryText}
            </Typography>
          </div>
          <div className="home-page-content__buttons-descriptions">
            {children}
          </div>
        </div>
      </Col>
      <Col md={6}>
        <img
          src={homePageImage}
          alt="homePageImage"
          className="home-page__image"
        />
      </Col>
      {/* <SupportCompany /> */}
    </>
  );
};

export default HomePagesLayout;
