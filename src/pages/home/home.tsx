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
import Card from './../../components/Card/Card';
import CustomeSwiper from '../../components/swiperSlide/swiperSlide';
import Accordion from './../../components/accordion/accordion';
import { NavLink } from 'react-router-dom';
import { faqsData, howDoWeWorkData, uniqueTranslationData } from './homeData';
import TertiaryLayout from '../../layout/tertiaryLayout/tertiaryLayout';
import Layout from './../../layout/layout/layout';

const Home = (): ReactElement => {
  return (
    <Row>
      <HomePagesLayout
        primaryText={t('flyinghigh')}
        secondaryText={t('acrosscultures')}
        tertiaryText={t('homedescription')}
      >
        <NavLink
          to="/get-a-free-quote"
          style={{ textDecoration: 'none', color: '#fff' }}
        >
          <CustomButton type={ButtonType.solid}>
            {t('getAFreeQuote')}
          </CustomButton>
        </NavLink>
      </HomePagesLayout>
      {/* ---------------------------------home page 2-------------------------------------------- */}
      <TertiaryLayout
        title="Exiting #tours# for #adventurous#"
        titleHeadingTertiary="Hello World this is the start"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates amet suscipit, veritatis, corrupti quidem adipisci
                      fugiat consequuntur maxime eius soluta repellendus, dolorum ipsum
                      incidunt tempore odit voluptatum dolorem! Debitis, consectetur!"
        imgPath="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/press/news/2021/huawei-next-image-awards-2021/img01.jpg"
        imgPath1="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/press/news/2021/huawei-next-image-awards-2021/img01.jpg"
        imgPath2="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/press/news/2021/huawei-next-image-awards-2021/img01.jpg"
      />
      {/* ---------------------------------home page 3-------------------------------------------- */}

      <Layout
        title={t('uniqueTranslationTitle')}
        secondaryTitle={t('uniqueTranslationDescription')}
        imgPath={ImagePart3}
      >
        {uniqueTranslationData.map(({ symbol, title }) => (
          <Card symbol={symbol} title={title} key={symbol} />
        ))}
      </Layout>
      {/* ---------------------------------home page 4-------------------------------------------- */}
      <Layout
        title={t('howDoWeWorkDataTitle')}
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
        title={t('faqsDataTitle')}
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
