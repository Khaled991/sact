import { ReactElement } from 'react';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import './layout.scss';

interface LayoutProps {
  children?: any;
  imgPath: any;
  title: string;
  secondaryTitle: string;
}

const Layout = ({
  children,
  imgPath,
  title,
  secondaryTitle,
}: LayoutProps): ReactElement => {
  const textTokens = title.split('#');

  return (
    <div className="layout">
      <div className="layout__primary-title">
        {textTokens.map((word: string, i) => {
          const isOdd = i % 2;
          return (
            <Typography
              type={TypographyType.secondary}
              color={isOdd ? '#f1923d' : undefined}
              key={i}
            >
              {word + ' '}
            </Typography>
          );
        })}
      </div>
      <div className="layout__tertiary-text">
        <Typography type={TypographyType.tertiary}>{secondaryTitle}</Typography>
      </div>
      <img src={imgPath} alt="pageImage" className="layout__back-background" />
      <div className="layout__layout-content">{children}</div>
    </div>
  );
};

export default Layout;
