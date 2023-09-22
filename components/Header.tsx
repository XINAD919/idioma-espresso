import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  return (
    <div className='md:w-11/12 md:mx-auto md:py-3 header'>
      <div className='md:flex hidden justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='flex rounded-full h-fit w-fit'>
            <Link href='/' className=' flex items-center gap-2'>
              <Image
                src={"/idioma-espresso.png"}
                alt='logo idioma espresso'
                width={80}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className='link__group flex gap-4 capitalize'>
          <Link href={"#about-us"}>about us</Link>
          <Link href={"#producs-and-services"}>products and Services</Link>
          <Link href={"#locations"}>locations</Link>
          <Link href={"#videos"}>videos</Link>
        </div>
      </div>
      <HeaderMovile />
    </div>
  );
};
const HeaderMovile = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='md:hidden sm:flex mx-2 w-11/12 '>
      <div className='flex justify-between  items-center w-full min-w-fit relative'>
        <div className='flex rounded-full h-12 w-12'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/idioma-espresso.png'
              alt='logo idioma espresso'
              width={80}
              height={40}
            />
          </Link>
        </div>
        <div className='flex flex-row-reverse gap-4'>
          <Hamburger onClick={toggler} />
        </div>
      </div>
      <div className={`${toggleMenu ? "hidden" : ""} top-14 w-full absolute`}>
        <div className='flex flex-col items-center text-left'>
          <Link className="w-fit" href={"#about-us"}>about us</Link>
          <Link className="w-fit" href={"#producs-and-services"}>products and Services</Link>
          <Link className="w-fit" href={"#locations"}>locations</Link>
          <Link className="w-fit" href={"#videos"}>videos</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
