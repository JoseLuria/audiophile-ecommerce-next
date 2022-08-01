import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavList, NavCart, NavMenu } from "../";
import { useAutoHideNavbar } from "../../hooks";

export const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { showNavbar } = useAutoHideNavbar();

  const handleShowCart = () => {
    if (showMenu) {
      setShowMenu(false);
      document.body.classList.remove("no-scroll");
    }
    setTimeout(() => {
      setShowCart(!showCart);
      document.body.classList.toggle("no-scroll");
    }, 200);
  };

  const handleShowMenu = () => {
    if (showCart) {
      setShowCart(false);
      document.body.classList.remove("no-scroll");
    }
    setTimeout(() => {
      setShowMenu(!showMenu);
      document.body.classList.toggle("no-scroll");
    }, 200);
  };

  const handleRemoveCart = () => {
    showCart && setShowCart(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <motion.nav
        animate={{ top: showNavbar ? 0 : -96 }}
        className="w-full fixed left-0 border-b-[1px] border-b-white border-opacity-10 z-[2] h-[5.625rem] flex justify-center bg-black px-6 md:border-none md:px-10 lg:h-24"
      >
        <div className="h-full w-full flex relative justify-center items-center max-w-size md:border-b-[1px] md:border-b-white md:border-opacity-10 md:justify-start lg:justify-center">
          <button
            onClick={handleShowMenu}
            type="button"
            className="flex absolute left-0 md:static lg:hidden"
          >
            <Image
              width={16}
              height={15}
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="Menu Icon"
            />
          </button>

          <Link
            className="md:ml-[2.625rem] flex lg:absolute lg:left-0 lg:ml-0"
            href="/"
          >
            <Image
              width={143}
              height={25}
              src="/assets/shared/desktop/logo.svg"
              alt="Logo"
            />
          </Link>

          <NavList action={handleRemoveCart} type="navbar" />

          <button
            type="button"
            className="flex absolute right-0 md:static md:ml-auto lg:absolute"
            onClick={handleShowCart}
          >
            <Image
              width={23}
              height={20}
              src="/assets/shared/desktop/icon-cart.svg"
              alt="Cart Icon"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {showMenu && <NavMenu action={handleShowMenu} />}
      </AnimatePresence>

      <AnimatePresence>
        {showCart && <NavCart action={handleShowCart} />}
      </AnimatePresence>
    </>
  );
};
