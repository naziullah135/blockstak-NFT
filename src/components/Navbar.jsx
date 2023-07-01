import searchIcon from '../assets/images/search-normal-1 1.png';
import logo from '../assets/images/NFters.png';
const Navbar = () => {
  return (
    <nav className="bg-white border-b-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-6">
        <div className="flex gap-12">
          <img src={logo} alt="" />
          <p className="font-dm-sans font-semibold">Marketplace</p>
          <p className="font-dm-sans font-semibold">Resource</p>
          <p className="font-dm-sans font-semibold">About</p>
        </div>
        <div className="flex gap-6">
          <form className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
                <img src={searchIcon} alt="" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border text-gray-900 text-sm rounded-full block w-64 pl-6 p-3 dark:placeholder-gray-400 dark:text-black"
                placeholder="Search"
                required
              />
            </div>
          </form>

          <button className="bg-[#3D00B7] text-white text-sm font-semibold rounded-full px-8 py-3">
            Upload
          </button>
          <button className="outline outline-[#3D00B7]  hover:dark:bg-gray-100 text-[#3D00B7] text-sm font-semibold outline-2 rounded-full px-6 py-2">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
