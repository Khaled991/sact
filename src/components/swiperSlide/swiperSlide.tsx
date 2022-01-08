import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperSlide.scss';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { t } from 'i18next';
import { reviewsData } from '../../data/reviewsData';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const CustomeSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {reviewsData.map(({ title, adjective, description }, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-slide-content">
              <span className="swiper-slide-content__title">{t(title)}</span>
              <p className="swiper-slide-content__description">
                {t(adjective)}
              </p>
              <p className="swiper-slide-content__description">
                {t(description)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomeSwiper;
