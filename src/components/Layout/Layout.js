import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import Logo from '../Logo/Logo';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import { useOpen } from './useOpen';

const Layout = (props) => {
  const { open, touched, togglerNavHandler, closeNavHandler } = useOpen();

  return (
    <>
      <NavigationItems openNav={open} touched={touched} closeNavHandler={closeNavHandler} />
      <HamburgerButton togglerNavHandler={togglerNavHandler} open={open} />
      <Logo closeNavHandler={closeNavHandler} />
      <Backdrop closeNavHandler={closeNavHandler} open={open} />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;