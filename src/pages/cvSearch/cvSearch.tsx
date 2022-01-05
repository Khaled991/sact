import { t } from 'i18next';
import { ReactElement } from 'react';
import CustomButton, { ButtonType } from '../../components/Button/button';

const CvSearch = (): ReactElement => {
  return (
    <div>
      <input placeholder={t('SearchUsingCvCode')} name="" type="text" />
      <CustomButton type={ButtonType.solid}>BUILD YOUR CV</CustomButton>
    </div>
  );
};

export default CvSearch;
