import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils";

function StarRating({ rating }) {
  return (
    <div className="flex items-center space-x-px flex-row">
      {[0, 1, 2, 3, 4].map((star) => (
        <StarIcon
          key={Math.random()}
          className={classNames(
            rating > star ? "text-yellow-400" : "text-gray-200",
            "h-5 w-5 flex-shrink-0"
          )}
          aria-hidden="true"
        />
      ))}
      <p className="text-slate-600 text-sm mt-1 pl-2">
        {`${Number(rating, 2).toFixed(2)}`}
      </p>
    </div>
  );
}

export default StarRating;
