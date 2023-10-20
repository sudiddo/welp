function CategoryBadge({ category }) {
  return (
    <div
      key={category.alias}
      className="bg-orange-200 px-2 py-1 rounded-full grow-0 shrink-0"
    >
      <p className="text-xs">{category.title}</p>
    </div>
  );
}

export default CategoryBadge;
