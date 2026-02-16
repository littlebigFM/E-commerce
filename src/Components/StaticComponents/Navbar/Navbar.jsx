import MobilleNavbar from "./Mobile/MobilleNavbar";
import DesktopNavbar from "./Desktop/DesktopNavbar";

const Navbar = () => {
  return (
    <div
      className="
    flex justify-between items-center
    p-4
    gap-2
    "
    >
      <div
        className="
      w-full 
      hidden 
      min-[620px]:flex
      min-[800px]:flex
      "
      >
        <DesktopNavbar />
      </div>

      <div
        className="
      w-full 
      min-[620px]:hidden
      min-[800px]:hidden
      "
      >
        <MobilleNavbar />
      </div>

      {/* ================================ */}
      {/* <AnimatedNavbar /> */}
    </div>
  );
};

export default Navbar;
