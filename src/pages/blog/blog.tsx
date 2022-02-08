import { t } from 'i18next';
import { ReactElement } from 'react';
import Logo from '../../assets/img/logo.webp';
import BlogCard from '../../layout/blogCard/blogCard';
import './blog.scss';
import { blogData, facebookUrl } from './blog.data';
import { Routes, Route } from 'react-router-dom';
import BlogArticle from '../blogArticle/blogArticle';

const Blog = (): ReactElement => {
  return (
    <div className="blog">
      <Routes>
        <Route
          path="/"
          element={
            <main id="main" className="site-main" role="main">
              {blogData.map(({ title, description, imgPath, date, id }) => (
                <BlogCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  imgPath={imgPath}
                  date={date}
                />
              ))}
            </main>
          }
        />
        <Route path={`:id`} element={<BlogArticle />} />
      </Routes>
      <div className="side-widget">
        <div className="side-widget__header">
          <h4 className="side-widget__title">{t('aboutus')}</h4>
          <img
            width="600"
            height="400"
            src={Logo}
            alt="logo"
            className="side-widget__img"
          />
          {t('salehAlOmarCertifiedTranslation')}
        </div>

        <h4 className="side-widget__title">{t('likeUsOnFacebook')}</h4>
        <iframe
          src={facebookUrl}
          width={340}
          height={400}
          style={{ border: 'none', overflow: 'hidden' }}
          frameBorder={0}
          title="facebook"
        />
      </div>
    </div>
  );
};

export default Blog;
