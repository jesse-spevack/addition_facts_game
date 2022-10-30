import { CheckIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const IconKey = ({ icon, click }) => {
  const iconClassName = "inline-flex items-center h-12 w-12 sm:h-16 sm:w-16";
  let className =
    "cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent text-white shadow-sm focus:outline-none focus:ring-0 active:ring-2 active:ring-offset-2 ";

  if (icon === "check") {
    icon = <CheckIcon className={iconClassName} area-hidden="true" />;
    className += "bg-emerald-600 active:bg-emerald-700 active:ring-emerald-500";
  } else {
    icon = <XMarkIcon className={iconClassName} area-hidden="true" />;
    className += "bg-pink-600 active:bg-pink-700 active:ring-pink-500";
  }

  return (
    <div>
      <button onClick={click} type="button" className={className}>
        {icon}
      </button>
    </div>
  );
};

export default IconKey;
