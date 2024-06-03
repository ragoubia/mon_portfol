import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h2 xl:mt-12"
                  style={{ fontFamily: "Brush Script MT, cursive", fontSize: "48px" }}
              >
                Mon travail <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-lg"
                  style={{ fontFamily: "Brush Script MT, cursive", fontSize: "24px" }}
              >
                Voici quelques-uns de mes projets récents. N'hésitez pas à explorer et à me contacter pour plus d'informations.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
  );
};

export default Work;
