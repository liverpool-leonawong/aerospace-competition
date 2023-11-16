import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { EffectCards, Pagination, Autoplay, Navigation } from 'swiper/modules';

const Gallery = () => {

  return (
    <>
      <div id="gallery" className="items-center">
        <div class="container mx-auto text-center mb-5">
          <div class="flex items-center justify-center mt-16 mb-12 px-16"><img src="/assets/title_gallery.svg" width="420px" alt="相集"></img></div>
        </div>
        <div class="container mx-auto text-center px-20">
          <Swiper
            effect={'cards'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCards, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* <SwiperSlide>
              <img src="/assets/gallery/trail_class_1.jpg" alt="Trial Class" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/trail_class_2.jpg" alt="Trial Class" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/trail_class_3.jpg" alt="Trial Class" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/trail_class_4.jpg" alt="Trial Class" />
            </SwiperSlide> */}
            <SwiperSlide>
              <img src="/assets/gallery/venue_1.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_2.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_3.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_4.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_5.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_6.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_7.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_8.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_9.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_11.jpg" alt="Venue" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/gallery/venue_10.jpg" alt="Venue" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Gallery;