import { AiOutlineShopping } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="bg-white md:bg-primaryDark">
        <div className="container justify-between items-center py-3 hidden md:flex">
          <div className="flex gap-8 items-center">
            <h2 className="text-white text-[40px]">Logo</h2>
            <div className="relative">
              <input
                className="px-4 py-5 rounded-sm w-[300px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="text-white flex gap-6 text-[26px]">
            <CiUser />

            <div className="relative">
              <AiOutlineShopping />
              <div className="bg-red-600 w-[20px] h-[20px] grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]">
                0
              </div>
            </div>
            <RiMenu2Line />
          </div>
        </div>

        {/* visible in tabs or mobile */}

        <div className="container flex justify-between items-center text-[26px] py-4 md:hidden">
          <RiMenu2Line />
          <div>Logo</div>
          <div className="relative">
            <AiOutlineShopping />
            <div className="bg-red-600 w-[20px] h-[20px] text-white grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]">
              0
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary hidden md:block">
        <ul className="container flex gap-8 uppercase py-4 text-white ">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Blog</a>
          <a href="#">Pages</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
