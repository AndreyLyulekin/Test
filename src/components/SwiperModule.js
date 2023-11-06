import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Header, LogoOne, LogoTwo } from './index.js';

const SwiperModule = () => {
  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
      grabCursor={true}
      modules={[Navigation]}>
      <SwiperSlide>
        <Header
          text={'Халвар'}
          logo={LogoTwo}
        />
        <div className='swiper__slide slideTwo'></div>
      </SwiperSlide>
      <SwiperSlide>
        <Header
          text={'Берон'}
          logo={LogoOne}
        />
        <div className='swiper__slide slideOne'></div>
      </SwiperSlide>
      <nav className='header__nav'>
        <button className='swiper-button-prev swiper__button'></button>
        <button className='swiper-button-next swiper__button'></button>
      </nav>
    </Swiper>
  );
};
export default SwiperModule;
