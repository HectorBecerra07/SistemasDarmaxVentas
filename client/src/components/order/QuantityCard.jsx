const QuantityCard = ({
  name,
  imageUrl,
  quantity,
  featured = false,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border bg-white dark:bg-dark shadow-sm transition-all
        ${
          featured
            ? "border-primary dark:border-primary/70"
            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
        }`}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-t-xl"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        aria-label={name}
      />
      <div className="p-4 flex flex-col gap-4">
        <p className="text-dark dark:text-white text-base font-medium leading-normal">
          {name}
        </p>
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">remove</span>
          </button>
          <span className="text-lg font-bold text-dark dark:text-white">
            {quantity}
          </span>
          <button
            type="button"
            onClick={onIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityCard;
