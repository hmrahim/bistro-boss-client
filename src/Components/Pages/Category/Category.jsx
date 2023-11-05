import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle";

const Category = () => {
  return (
    <section className="w-full md:w-4/5 mx-auto px-5 md:px-0">
        <SectionTitle title="ORDER ONLINE" subTitle="From 11:00am to 10:00pm"></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={true}
        className="mySwiper mx-auto mb-32 mt-16"
      >
        <SwiperSlide>
          <img src={img1} className="w-full" alt="" />
          <h1 className="text-4xl  text-center font-semibold text-white -mt-16">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full" alt="" />
          <h1 className="text-4xl  text-center font-semibold text-white -mt-16">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full" alt="" />
          <h1 className="text-4xl  text-center font-semibold text-white -mt-16">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full" alt="" />
          <h1 className="text-4xl  text-center font-semibold text-white -mt-16">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full" alt="" />
          <h1 className="text-4xl  text-center font-semibold text-white -mt-14">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
