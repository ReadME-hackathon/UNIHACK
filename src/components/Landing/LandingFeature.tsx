import LandingFeatureProps from "./LandingFeatureProps";
import { motion } from "framer-motion";

const LandingFeature = ({ name, desc, img }: LandingFeatureProps) => {
  return (
    <div className="m-auto flex w-[700px] flex-row items-center gap-12">
      <div className="flex flex-col gap-6">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "anticipate", type: "tween" }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "anticipate", type: "tween" }}
          viewport={{ once: true }}
          className="w-fill h-24 font-medium"
        >
          {desc}
        </motion.p>
      </div>
      <img src={img} className="h-96 w-96 object-contain" />
    </div>
  );
};

export default LandingFeature;
