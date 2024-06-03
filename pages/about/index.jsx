import { motion } from "framer-motion";
import { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiFramer, SiNextdotjs } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Compétences",
                icons: [
                    FaHtml5, // HTML
                    FaCss3, // CSS
                    FaJs, // JavaScript
                    FaReact, // React
                    FaWordpress, // WordPress
                    FaFigma, // Figma
                    SiAdobexd, // Adobe XD
                    SiAdobephotoshop, // Adobe Photoshop
                    SiFramer, // Framer
                    SiNextdotjs, // Next.js
                ],
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-center">
            <Circles />
            {/* avatar img */}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>

            <div className="container mx-auto h-full flex flex-col items-center">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-4xl"
                        style={{ fontFamily: "Brush Script MT, cursive" }}
                    >
                        Hanen Ragoubi
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="max-w-[500px] mx-auto mb-6 px-2 text-xl"
                        style={{ fontFamily: "Brush Script MT, cursive" }}
                    >
                        Étudiante à l'Institut Supérieur des Etudes Technologiques de Sousse, en cours de préparation de ma licence en TI : Multimédia et Développement Web Informatique.
                    </motion.p>
                    <motion.p
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        className="max-w-[500px] mx-auto mb-6 px-2 text-xl"
                        style={{ fontFamily: "Brush Script MT, cursive" }}
                    >
                        J'aime m'engager bénévolement dans des actions humanitaires locales pendant mon temps libre.
                    </motion.p>
                </div>

                {/* info */}
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
                >
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center">
                        {aboutData[index].info.map((item, itemI) => (
                            <div
                                key={itemI}
                                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60 text-xl"
                                style={{ fontFamily: "Brush Script MT, cursive" }}
                            >
                                {/* title */}
                                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                <div className="flex gap-x-4">
                                    {/* icons */}
                                    {item.icons?.map((Icon, iconI) => (
                                        <div key={iconI} className="text-2xl text-white">
                                            <Icon />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
