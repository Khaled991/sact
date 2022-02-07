import { t } from 'i18next';
import { ReactElement } from 'react';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import './secondaryLayout.scss';

interface SecondaryLayoutProps {
  primaryTitle: string;
  description: string;
}
const SecondaryLayout = ({
  primaryTitle,
  description,
}: SecondaryLayoutProps): ReactElement => {
  return (
    <div className="secondary-layout">
      <div className="secondary-layout__primary-title">
        <Typography type={TypographyType.secondary} color="#f1923d">
          {t(primaryTitle)}
        </Typography>
      </div>

      <Typography type={TypographyType.tertiary}>{t(description)}</Typography>
    </div>
  );
};

export default SecondaryLayout;
