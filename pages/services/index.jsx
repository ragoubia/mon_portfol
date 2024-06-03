import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    title: "services",
    info: [
      {
        title: "Développement",
        description: "Conception et développement de sites web, applications web et mobiles avec les dernières technologies.",
      },
      {
        title: "Photographie",
        description: "Photographie d'événements spéciaux, de portraits, et de paysages avec une attention particulière aux détails et à la composition.",
      },
    ],
  },
];

const Services = () => {
  return (
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8 justify-center">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 text-4xl"
                  style={{ fontFamily: "Brush Script MT, cursive" }}
              >
                Mes services <span className="text-accent">.</span>
              </motion.h2>
              {serviceData[0].info.map((item, itemI) => (
                  <motion.p
                      key={itemI}
                      variants={fadeIn("up", 0.4 + itemI * 0.2)}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-xl"
                      style={{ fontFamily: "Brush Script MT, cursive" }}
                  >
                    {item.description}
                  </motion.p>
              ))}
            </div>

            {/* slider */}
            <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
  );
};

export default Services;
