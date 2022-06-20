import { StarIcon } from "@heroicons/react/solid";

type RatingBarsProps = {
  ratings: [number, number, number, number, number];
};

const RatingBars = ({ ratings }: RatingBarsProps) => {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3] + ratings[4];
  const result = [];

  for (let i = 0; i < 5; i++) {
    const qty = Math.round(100 * (ratings[i] / total));
    result.push(
      <div key={i} className="flex gap-2 items-center">
        <span className="font-Inter text-blue-500 font-bold">{i + 1}</span>
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <div className="relative grow w-full h-3 rounded-[4px] bg-blue-300">
          <div
            style={{ width: `${qty}%` }}
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
