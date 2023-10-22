import BusinessCard from "../../shared/components/BusinessCard";

const BusinessList = ({ businesses, offset, setHoveredBusiness }) => (
  <div className="gap-5 p-5 grid grid-cols-1 md:grid-cols-2">
    {businesses.map((business, index) => (
      <BusinessCard
        key={business.id}
        business={business}
        numbering={offset + index + 1}
        onHover={setHoveredBusiness}
      />
    ))}
  </div>
);

export default BusinessList;
