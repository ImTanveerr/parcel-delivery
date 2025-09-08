"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Partners & Integrations</h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        Trusted by top businesses, e-commerce stores, and logistics partners.
      </p>

      <div className="mt-10 max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000, // 2s per slide
            disableOnInteraction: false, // keep sliding even after user interacts
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide><img src="/partner1.png" alt="Partner 1" className="h-12 mx-auto" /></SwiperSlide>
          <SwiperSlide><img src="/partner2.png" alt="Partner 2" className="h-12 mx-auto" /></SwiperSlide>
          <SwiperSlide><img src="/partner3.png" alt="Partner 3" className="h-12 mx-auto" /></SwiperSlide>
          <SwiperSlide><img src="/partner4.png" alt="Partner 4" className="h-12 mx-auto" /></SwiperSlide>
          <SwiperSlide><img src="/partner5.webp" alt="Partner 5" className="h-12 mx-auto" /></SwiperSlide>
          <SwiperSlide><img src="/partner6.png" alt="Partner 6" className="h-12 mx-auto" /></SwiperSlide>
          <SwiperSlide><img src="/partner7.png" alt="Partner 7" className="h-12 mx-auto" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
