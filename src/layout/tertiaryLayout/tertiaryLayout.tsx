import { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import Typography, {
  TypographyType,
} from '../../components/typography/typography';
import './tertiaryLayout.scss';

interface ITertiaryLayoutProps {
  title: string;
  titleHeadingTertiary: string;
  description: string;
  imgPath: string;
  imgPath1: string;
  imgPath2: string;
}

const TertiaryLayout = ({
  title,
  titleHeadingTertiary,
  description,
  imgPath,
  imgPath1,
  imgPath2,
}: ITertiaryLayoutProps): ReactElement => {
  const textTokens = title.split('#');

  return (
    <main className="theerd-layout">
      <div className="u-center-text">
        {textTokens.map((word: string, i) => {
          const isOdd = i % 2;
          return (
            <Typography
              type={TypographyType.secondary}
              color={isOdd ? '#f1923d' : undefined}
              key={i}
            >
              {word + ' '}
            </Typography>
          );
        })}
      </div>
      <section className="section-about">
        <Row>
          <Col md={6} className="section-about__description">
            <h3 className="heading-tertiary">{titleHeadingTertiary}</h3>
            <Typography type={TypographyType.tertiary}>
              {description}
            </Typography>
          </Col>
          <Col md={6} className="section-about__scaleabl-three-images">
            <div className="composition">
              <img
                src={imgPath}
                alt="tgeerd_lyout_image"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={imgPath1}
                alt="tgeerd_lyout_image"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={imgPath2}
                alt="tgeerd_lyout_image"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default TertiaryLayout;
