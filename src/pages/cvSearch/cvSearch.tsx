import { t } from 'i18next';
import './cvSearch.scss';
import { ReactElement } from 'react';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { ReactComponent as Search } from '../../assets/icon/search.svg';

const CvSearch = (): ReactElement => {
  return (
    <div className="cv-search">
      <div className="cv-search__header">
        <div className="cv-search__search-input-container">
          <input
            placeholder={t('searchUsingCvCode')}
            name=""
            type="text"
            className="cv-search__search-input"
          />
          <button className="cv-search__search-icon">
            <Search />
          </button>
        </div>
        <CustomButton type={ButtonType.solid}>{t('buildYourCv')}</CustomButton>
      </div>
    </div>
  );
};

export default CvSearch;
