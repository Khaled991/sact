import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperSlide.scss';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const CustomeSwiper = () => {
  const commentsData = [
    {
      title: 'Ahmed Waleed',
      description: ` They deliver on time, great service. If there is evaluation morethan 10 stars, it will for them. I sent the files via whats appand receive it next day. I advise everyone need translation, go toSaleh alomar translation. Thanks for your services`,
    },
    {
      title: 'Ahmed Waleed',
      description: ` They deliver on time, great service. If there is evaluation morethan 10 stars, it will for them. I sent the files via whats appand receive it next day. I advise everyone need translation, go toSaleh alomar translation. Thanks for your services`,
    },
  ];
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
        {commentsData.map(({ title, description }, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-slide-content">
              <span className="swiper-slide-content__title">{title}</span>
              <p className="swiper-slide-content__description">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomeSwiper;
