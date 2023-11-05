import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './App.css';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';

import Header from './components/Header.js';
import LogoOne from './assets/images/icon-house_small.png';
import LogoTwo from './assets/images/Project Icon.png';
import Footer from './components/Footer.js';
import Info from './components/Info.js';

function App() {
  const [currentSection, setCurrentSection] = useState('section1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: [0.1, 0.9] }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id='section1'>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          grabCursor={true}
          modules={[Navigation]}
          className='mySwiper'>
          <SwiperSlide>
            <Header
              text={'Берон'}
              logo={LogoOne}
            />
            <div className='slide slideOne'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Header
              text={'Халвар'}
              logo={LogoTwo}
            />
            <div className='slide slideTwo'></div>
          </SwiperSlide>
          <nav className='header__nav'>
            <button className='swiper-button-prev swiper-button'></button>
            <button className='swiper-button-next swiper-button'></button>
          </nav>
        </Swiper>
        <Info />
      </section>
      <Footer currentSection={currentSection} />
      <section
        id='section2'
        className='emptySection'></section>
      <section
        id='section3'
        className='emptySection'></section>
    </>
  );
}

export default App;
