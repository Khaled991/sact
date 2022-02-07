import { t } from 'i18next';
import './cvSearch.scss';
import { ReactElement, useState } from 'react';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { ReactComponent as Search } from '../../assets/icon/search.svg';
import CvCard from '../../layout/cvCard/cvCard';
import { NavLink } from 'react-router-dom';
import { cvData } from './cvData';

const CvSearch = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  return (
    <div className="cv-search">
      <div className="cv-search__header">
        <div className="cv-search__search-input-container">
          <input
            placeholder={t('searchUsingCvCode')}
            name="search"
            type="text"
            className="cv-search__search-input"
            onChange={handleSearch}
          />
          <div className="cv-search__search-icon">
            <Search />
          </div>
        </div>
        <CustomButton type={ButtonType.solid}>
          <NavLink
            to="/build-cv"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            {t('buildYourCv')}
          </NavLink>
        </CustomButton>
      </div>
      {cvData
        .filter(val =>
          val.codeReference.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map(({ codeReference, ...props }) => (
          <CvCard
            {...props}
            codeReference={codeReference}
            key={codeReference}
          />
        ))}
    </div>
  );
};

export default CvSearch;
