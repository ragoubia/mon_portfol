import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxArrowTopRight,  // Use appropriate icons
    title: "Développement",
    description: "Conception et développement de sites web, applications web et mobiles avec les dernières technologies.",
  },
  {
    Icon: RxArrowTopRight,  // Use appropriate icons
    title: "Photographie",
    description: "Photographie d'événements spéciaux, de portraits, et de paysages avec une attention particulière aux détails et à la composition.",
  },
];

const ServiceSlider = () => {
  return (
      <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          freeMode
          className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                  className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
              >
                {/* icon */}
                <div className="text-4xl text-accent mb-4">
                  <item.Icon aria-hidden />
                </div>

                {/* title & description */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>

                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight
                      className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                      aria-hidden
                  />
                </div>
              </motion.div>
            </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default ServiceSlider;
