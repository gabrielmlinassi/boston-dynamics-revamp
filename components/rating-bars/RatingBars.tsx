import { StarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

type RatingBarsProps = {
  ratings: [number, number, number, number, number];
};

const RatingBars = ({ ratings }: RatingBarsProps) => {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3] + ratings[4];
  const result = [];

  for (let i = 0; i < 5; i++) {
    const qty = Math.round(100 * (ratings[i] / total));
    result.push(
      <div key={i} className="flex items-center gap-2">
        <span className="font-Inter font-bold text-blue-500">{i + 1}</span>
        <StarIcon className="text-yellow-400 h-5 w-5" />
        <div className="relative h-3 w-full grow rounded-[4px] bg-blue-300">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${qty}%` }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 bottom-0 rounded-[4px] bg-blue-500"
          />
        </div>
        <span className="w-12 font-Inter text-blue-500">{qty}%</span>
      </div>
    );
  }

  return <div>{result.reverse()}</div>;
};

export default RatingBars;
