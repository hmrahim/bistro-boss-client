import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Tesnimonial = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .then((error) => console.log(error));
  }, []);
  return (
    <section className="my-10 w-full md:w-4/5 mx-auto px-5 md:px-0">
      <SectionTitle subTitle="What Our Clients Say" title="TESTIMONIALS" />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mx-16 px-16 mt-10"
      >
        {data.map((data) => (
          <SwiperSlide>
            <div className="mx-16 px-16 flex flex-col gap-10 items-center ">
              <Rating style={{ maxWidth: 180 }} value={data.rating} readOnly />
              <p className="text-center">{data.details}</p>
              <h3 className="text-3xl text-[#CD9003] font-semibold">
                {data.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Tesnimonial;
