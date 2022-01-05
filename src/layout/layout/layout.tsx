import { ReactElement } from 'react';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import './layout.scss';

interface LayoutProps {
  children?: any;
  imgPath: any;
  primaryTitleDark?: string;
  primaryTitleOrange?: string;
  primaryTitleDark2?: string;
  primaryTitleOrange2?: string;
  secondaryTitle: string;
}

const Layout = ({
  children,
  imgPath,
  primaryTitleDark,
  primaryTitleOrange,
  primaryTitleDark2,
  primaryTitleOrange2,
  secondaryTitle,
}: LayoutProps): ReactElement => {
  return (
    <div className="layout">
      <div className="layout__primary-title">
        {primaryTitleDark && (
          <Typography type={TypographyType.secondary}>
            {primaryTitleDark}
          </Typography>
        )}
        {primaryTitleOrange && (
          <Typography type={TypographyType.secondary} color="#f1923d">
            {primaryTitleOrange}
          </Typography>
        )}
        {primaryTitleDark2 && (
          <Typography type={TypographyType.secondary}>
            {primaryTitleDark2}
          </Typography>
        )}
        {primaryTitleOrange2 && (
          <Typography type={TypographyType.secondary} color="#f1923d">
            {primaryTitleOrange2}
          </Typography>
        )}
      </div>
      <div className="layout__tertiary-text">
        <Typography type={TypographyType.tertiary} color="#777777">
          {secondaryTitle}
        </Typography>
      </div>
      <img src={imgPath} alt="pageImage" className="layout__back-background" />
      <div className="layout__layout-content">{children}</div>
    </div>
  );
};

export default Layout;
