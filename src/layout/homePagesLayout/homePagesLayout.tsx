import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import './homePagesLayout.scss';
import SupportCompany from '../../components/supportCompany/supportCompany';
import HomePageImage from '../../components/homePageImage/homePageImage';

interface HomePagesLayoutProps {
  children: any;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
}
const HomePagesLayout = ({
  children,
  primaryText,
  secondaryText,
  tertiaryText,
}: HomePagesLayoutProps): ReactElement => {
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
        <HomePageImage />
      </Col>
      <SupportCompany />
    </>
  );
};

export default HomePagesLayout;
