import { ReactElement } from 'react';
import './typography.scss';

export enum TypographyType {
  primary = 'primary-typography',
  secondary = 'secondary-typography',
  tertiary = 'tertiary-typography',
}

interface TypographyProps {
  children: string;
  type: TypographyType;
  color?: string;
}

const Typography = ({
  children,
  type,
  color,
}: TypographyProps): ReactElement => (
  <span className={`typography ${type}`} style={{ color }}>
    {children}
  </span>
);

export default Typography;
