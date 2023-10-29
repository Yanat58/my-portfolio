import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#745af3]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#745af3]">Tetiana Karlova</span>
          </h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            // className="mb-6 text-[36px] lg:text-[45px] font-secondary font-medium  leading-[1]"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            <span className="text-white mr-4">I </span>
            <TypeAnimation
              sequence={[
                "develop 3D visuals",
                2000,
                "user interfaces",
                2000,
                "web applications",
                2000,
              ]}
              speed={50}
              className="green-violet-text-gradient"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
