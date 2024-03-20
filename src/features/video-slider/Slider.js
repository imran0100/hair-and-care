// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


// function Slider() {
//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'overflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src='./admprslide1.jpg' alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src='./admprslide2.jpg' alt="slide_image" />
//         </SwiperSlide>
       
//         <SwiperSlide>
//           <img src='./slide2.jpg' alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src='./slide3.jpg' alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src='./slide4.jpg' alt="slide_image" />
//         </SwiperSlide>
//       </Swiper>
        

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//     </div>
//   );
// }

// export default Slider;


// import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Zoom } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
export default function Slider() {
    return (
        <div className="container">
          <h1 className="heading">Flower Gallery</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 5,
              stretch: 7,
              depth: 34,
              modifier: 6,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
            <img src='./admprslide1.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src='./admprslide2.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src='./slide2.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src='./slide3.jpg' alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
            <img src='./slide4.jpg' alt="slide_image" />
            </SwiperSlide>
           
    
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      );
};