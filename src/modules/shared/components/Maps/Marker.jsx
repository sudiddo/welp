const Marker = ({
  className,
  lat,
  lng,
  onHover,
  business,
  zIndex,
  text,
  ...otherProps
}) => {
  if (!lat || !lng) return null;

  const handleMouseOver = () => onHover(business);
  const handleMouseOut = () => onHover(null);

  return (
    <div
      className={className}
      // eslint-disable-next-line react/no-unknown-property
      lat={lat}
      // eslint-disable-next-line react/no-unknown-property
      lng={lng}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ cursor: "pointer", zIndex }}
      alt={business.name}
      {...otherProps}
    >
      <span>{text}</span>
    </div>
  );
};

export default Marker;
