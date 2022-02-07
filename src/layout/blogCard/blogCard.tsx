import { t } from 'i18next';
import { ReactElement, useEffect, useState } from 'react';
import './blogCard.scss';
import { Link, useLocation } from 'react-router-dom';

interface IBlogCard {
  id: number;
  title: string;
  imgPath: string;
  description: string;
  date: string;
}

const BlogCard = ({
  id,
  title,
  imgPath,
  description,
  date,
}: IBlogCard): ReactElement => {
  const location = useLocation();
  const pathname = location.pathname;

  const partOfdescription = t(description).split(' ').splice(0, 30).join(' ');

  return (
    <article>
      <Link to={`${pathname}/${id}`} rel="bookmark">
        <header className="entry-header">
          <h1 className="entry-header__title">{t(title)}</h1>
          <div className="entry-meta">
            <span className="posted-on">
              <time className="entry-date published">{t(date)}</time>
            </span>
          </div>
          <div className="entry-thumbnail">
            <img src={imgPath} alt="" />
          </div>
        </header>
      </Link>

      <div className="entry-summary">
        <p>
          {t(partOfdescription)}
          <Link to={`${pathname}/${id}`} className="more-link">
            {t('readMore')}
          </Link>
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
