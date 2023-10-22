function Pagination({ offset, totalPages, limit, onNext, onPrevious }) {
  return (
    totalPages !== 0 && (
      <div className="flex justify-between sticky top-0 h-14 items-center z-20 w-full font-medium bg-white px-5 py-2 shadow">
        <button
          onClick={onPrevious}
          disabled={offset === 0}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>
          Page {offset / limit + 1} of {totalPages}
        </span>
        <button
          onClick={onNext}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    )
  );
}

export default Pagination;
