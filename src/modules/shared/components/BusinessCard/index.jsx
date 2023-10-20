// Add PropsType for businesscard

import { PhoneIcon } from "@heroicons/react/20/solid";
import StarRating from "./StarRating";
import CategoryBadge from "./CategoryBadge";

function BusinessCard({ business }) {
  const onCall = (phone) => {
    if (window !== undefined) {
      window.open(`tel:${phone}`);
    }
  };

  return (
    <div className="flex flex-col w-fit max-w-[350px] space-y-3 border rounded-xl shadow-sm">
      <img
        alt={business.name}
        src={business.image_url}
        className="w-full h-[250px] md:w-[350px] rounded-t-xl object-cover"
      />
      <div className="flex flex-row px-3 space-x-3">
        <div className="space-y-2 pb-3 flex-1">
          <p className="font-bold">{business.name}</p>
          <StarRating rating={business.rating} />
          <div className="flex flex-row flex-wrap gap-2">
            {business.categories.map((category) => (
              <CategoryBadge category={category} key={category.alias} />
            ))}
            <p className="text-slate-500">{business.price}</p>
          </div>
          <p className="text-sm">
            {business.location.display_address.join(", ")}
          </p>
        </div>
        <button
          onClick={() => onCall(business.phone)}
          className="p-2 h-12 w-12 flex justify-center items-center border border-black rounded-lg shrink-0 grow-0"
        >
          <PhoneIcon className="text-black w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default BusinessCard;
