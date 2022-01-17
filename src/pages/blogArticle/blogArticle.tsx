import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import { blogData, IblogData } from '../blog/blog.data';
import './blogArticale.scss';
import { motion } from 'framer-motion';

const BlogArticle = (): ReactElement => {
  let params = useParams();
  const { id } = params;
  const { title, date, imgPath, description }: IblogData = blogData.find(
    ({ id: articleId }) => articleId.toString() === id
  ) as IblogData;

  return (
    <div className="blog-article">
      <div className="blog-article__content">
        <motion.span
          initial={{ y: -130 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className="blog-article__title"
        >
          {title}
        </motion.span>
        <span className="blog-article__date">{date}</span>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={imgPath}
        alt="article-img"
        className="blog-article__img"
      />
      <Typography type={TypographyType.tertiary}>{description}</Typography>
    </div>
  );
};

export default BlogArticle;
