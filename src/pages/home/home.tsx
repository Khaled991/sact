import { ReactElement } from 'react';
// import LeftArrwo from '../../assets/icon/left-arrow.svg';
import CustomButton, { ButtonType } from '../../components/Button/button';
import { Row, Container } from 'react-bootstrap';
import { t } from 'i18next';
import './home.scss';
import HomePagesLayout from '../../layout/homePagesLayout/homePagesLayout';
import ImagePart3 from '../../assets/img/image-part-3.svg';
import ImagePart4 from '../../assets/img/image-part-4.svg';
import ImagePart5 from '../../assets/img/image-part-5.svg';
import Layout from '../../layout/layout/layout';
import Card from './../../components/Card/Card';
import CustomeSwiper from '../../components/swiperSlide/swiperSlide';
import Accordion from './../../components/accordion/accordion';
import { NavLink } from 'react-router-dom';
import { faqsData, howDoWeWorkData, uniqueTranslationData } from './homeData';

const Home = (): ReactElement => {
  return (
    <Row>
      <HomePagesLayout
        primaryText={t('flyinghigh')}
        secondaryText={t('acrosscultures')}
        tertiaryText={t('homedescription')}
      >
        <CustomButton type={ButtonType.solid}>
          <NavLink
            to="/getAFreeQoute"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            {t('getAFreeQuote')}
          </NavLink>
        </CustomButton>
        {/* <CustomButton type={ButtonType.textButton}>
          {t('getAProQuote')}
          <img src={LeftArrwo} alt="LeftArrwo" className="left-arrow" />
        </CustomButton> */}
      </HomePagesLayout>
      {/* ---------------------------------home page 2-------------------------------------------- */}
      {/* ---------------------------------home page 3-------------------------------------------- */}

      <Layout
        primaryTitleDark="Unique "
        primaryTitleOrange="Translation"
        primaryTitleDark2=" Services in "
        primaryTitleOrange2=" Saudi Arabia"
        secondaryTitle={t('uniqueTranslationDescription')}
        imgPath={ImagePart3}
      >
        {uniqueTranslationData.map(({ symbol, title }) => (
          <Card symbol={symbol} title={title} key={symbol} />
        ))}
      </Layout>
      {/* ---------------------------------home page 4-------------------------------------------- */}
      <Layout
        primaryTitleOrange="How "
        primaryTitleDark2=" do we "
        primaryTitleOrange2=" work?"
        secondaryTitle={t('howDoWeWorkDataDescription')}
        imgPath={ImagePart4}
      >
        {howDoWeWorkData.map(({ symbol, title, description }) => (
          <Card
            symbol={symbol}
            title={title}
            description={description}
            key={symbol}
          />
        ))}
      </Layout>
      {/* ---------------------------------home page 5-------------------------------------------- */}

      <Layout
        primaryTitleDark="FAQ"
        primaryTitleOrange=" & "
        primaryTitleDark2="Customer"
        primaryTitleOrange2=" Reviews"
        secondaryTitle={t('faqsDataDescription')}
        imgPath={ImagePart5}
      >
        <Container>
          <div className="faq-and-customer-reviews">
            <div>
              {faqsData.map(({ title, description }, i) => (
                <Accordion
                  key={i}
                  title={t(title)}
                  description={t(description)}
                />
              ))}
            </div>
            <CustomeSwiper />
          </div>
        </Container>
      </Layout>
    </Row>
  );
};

export default Home;
