import { ReactElement } from 'react';
import './blogCard.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { t } from 'i18next';

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
      <NavLink to={`${pathname}/${id}`} rel="bookmark">
        <header className="entry-header">
          <h1 className="entry-header__title">{t(title)}</h1>
          <div className="entry-meta">
            <span className="posted-on">
              <time className="entry-date published">{t(date)}</time>
            </span>
          </div>
          <div className="entry-thumbnail">
            <img src={imgPath} alt="ArticleImage" />
          </div>
        </header>
      </NavLink>

      <div className="entry-summary">
        <p>
          {t(partOfdescription)}
          <NavLink to={`${pathname}/${id}`} className="more-link">
            {t('readMore')}
          </NavLink>
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
