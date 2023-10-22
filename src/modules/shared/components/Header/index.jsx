import Logo from "../../../../assets/welp.png";

function Header() {
  return (
    <div className="relative top-0 w-screen h-[120px] bg-white z-30 shadow flex items-center justify-center">
      <div className="mr-5 w-full">
        <div className="flex flex-row items-center justify-center">
          <img src={Logo} className="w-20 h-20 object-contain" />
          <h1 className="text-3xl font-bold text-orange-400 font-brand">
            Yelp API Demonstration
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
