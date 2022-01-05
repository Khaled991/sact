import React, { ReactElement } from 'react';
import { ReactComponent as Blog } from '../../assets/icon/blog.svg';
import { ReactComponent as Contact } from '../../assets/icon/contact.svg';
import { ReactComponent as Language } from '../../assets/icon/language.svg';
import { t } from 'i18next';

interface IBannerProps {
  changeLanguage: () => void;
}

const Banner = ({ changeLanguage }: IBannerProps): ReactElement => {
  const bannerNavButton = [
    { title: t('blog'), Icon: Blog, onClick: () => {} },
    { title: t('contact'), Icon: Contact, onClick: () => {} },
    {
      title: localStorage.getItem('i18nextLng') === 'en' ? 'AR' : 'EN',
      Icon: Language,
      onClick: () => changeLanguage(),
      // onClick: () => {},
    },
  ];
  return (
    <div className="banner">
      <div className="banner__title">
        <span className="banner__text">{t('bannerTitle')}</span>
      </div>
      <nav className="banner__nav">
        {bannerNavButton.map(({ Icon, title, onClick }) => (
          <div className="banner__button" onClick={() => onClick()} key={title}>
            <Icon className="icon" />
            <span className="banner__nav-text">{title}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Banner;
