import { t } from 'i18next';
import { ReactElement } from 'react';
import './blogCard.scss';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const partOfdescription = description.split(' ').splice(0, 30).join(' ');
  return (
    <motion.article
    // initial={{ scale: 0, opacity: 0 }}
    // animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
    // // transition={{  }}
    // whileHover={{
    //   y: -10,
    //   transition: { duration: 0.7 },
    // }}
    >
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
    </motion.article>
  );
};

export default BlogCard;
