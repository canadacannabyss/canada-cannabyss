import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaSortDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../../assets/img/canada-cannabyss-logo.svg';
import { loginUser } from '../../../store/actions/user/user';
import {
  BarsCartDiv,
  Brand,
  BrandDiv,
  BrandSearchDiv,
  DrawerBtn,
  Li,
  LinkTo,
  MenuDiv,
  Nav,
  Navigation,
  TabButton,
  Ul,
  UserButton,
  UserDiv,
} from '../../../styles/Components/UI/Navbar/AdminNavbar';
import OutsideAlerter from '../../../utils/OutsideAlerter';
import AdminPages from './Tabs/Admin/AdminPages';
import Cart from './Tabs/Cart/Cart';
import Help from './Tabs/Help/Help';
import Login from './Tabs/Login/Login';
import Products from './Tabs/Products/Products';
import Register from './Tabs/Register/Register';
import SideDrawer from './Tabs/SideDrawer/SideDrawerAdmin';

let count = 0;

const AdminNavbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleAdminPages, setToggleAdminPages] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === 0) {
      // dispatch(loginUser());
      count++;
    }
  }, []);

  // Handle Toggle
  const handleToggleDrawer = () => {
    setToggleDrawer(!toggleDrawer);
    setToggleCart(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    const sideDrawer = window.document.querySelector('#drawer');
    const sideBackgroundDrawer = window.document.querySelector('#bg');
    if (!toggleDrawer) {
      sideDrawer.classList.remove('hideSideDrawer');
      sideBackgroundDrawer.classList.remove('hideBackgroundSideDrawer');
      sideDrawer.classList.add('showSideDrawer');
      sideBackgroundDrawer.classList.add('showBackgroundSideDrawer');
    } else {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
    }
  };

  const handleToggleHelp = () => {
    setToggleHelp(!toggleHelp);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleToggleProduct = () => {
    setToggleHelp(false);
    setToggleProduct(!toggleProduct);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleToggleAdminPages = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
    setToggleAdminPages(!toggleAdminPages);
  };

  const handleToggleCart = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleCart(!toggleCart);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleDrawer(false);
  };

  const handleToggleRegister = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(!toggleRegister);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleToggleLogin = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(!toggleLogin);
    setToggleCart(false);
    setToggleDrawer(false);
    handleCloseSideDrawer();
  };

  const handleToggleLogout = () => {
    handleCloseSideDrawer();
  };

  // Handle Close
  const handleCloseSideDrawer = () => {
    setToggleDrawer(!toggleDrawer);
    const sideDrawer = window.document.querySelector('#drawer');
    const sideBackgroundDrawer = window.document.querySelector('#bg');
    if (toggleDrawer) {
      sideDrawer.classList.remove('showSideDrawer');
      sideBackgroundDrawer.classList.remove('showBackgroundSideDrawer');
      sideDrawer.classList.add('hideSideDrawer');
      sideBackgroundDrawer.classList.add('hideBackgroundSideDrawer');
    }
  };

  const handleCloseRegister = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseLogin = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseProducts = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseAdminPages = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
    setToggleAdminPages(false);
  };

  const handleCloseHelp = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseCart = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  return (
    <>
      <SideDrawer
        CloseDrawer={handleCloseSideDrawer}
        openLogin={handleToggleLogin}
        handleToggleLogout={handleToggleLogout}
      />
      <Navigation>
        <Nav>
          <BrandSearchDiv>
            <BrandDiv>
              <Link href='/' as='/'>
                <Brand
                  src={Logo}
                  alt='Canada Cannabyss'
                  title='Canada Cannabyss'
                />
              </Link>
            </BrandDiv>
            <TabButton className='search'>
              <FaSearch />
            </TabButton>
          </BrandSearchDiv>
          <MenuDiv>
            <Ul>
              <Li>
                <Link href='/admin' as='/admin'>
                  <LinkTo>Dashboard</LinkTo>
                </Link>
              </Li>
              <Li>
                <TabButton onClick={handleToggleAdminPages}>
                  <FaSortDown />
                </TabButton>
              </Li>
            </Ul>
          </MenuDiv>
          <UserDiv>
            {!user.loading &&
              user.fetched &&
              !_.isEmpty(user.data) &&
              !user.error && (
                <UserButton>
                  <img src={user.data.profileImage.url} />
                </UserButton>
              )}
          </UserDiv>
          <BarsCartDiv>
            <TabButton onClick={handleToggleCart}>
              <FaShoppingCart />
            </TabButton>
            <DrawerBtn type='button' onClick={handleToggleDrawer}>
              <FaBars />
            </DrawerBtn>
          </BarsCartDiv>
        </Nav>
        {toggleHelp && (
          <OutsideAlerter handleClose={handleCloseHelp}>
            <Help />
          </OutsideAlerter>
        )}
        {toggleProduct && (
          <OutsideAlerter handleClose={handleCloseProducts}>
            <Products />
          </OutsideAlerter>
        )}
        {toggleAdminPages && (
          <OutsideAlerter handleClose={handleCloseAdminPages}>
            <AdminPages />
          </OutsideAlerter>
        )}
        {toggleCart && (
          <OutsideAlerter handleClose={handleCloseCart}>
            <Cart />
          </OutsideAlerter>
        )}
        {toggleRegister && (
          <Register handleCloseRegister={handleCloseRegister} />
        )}
        {toggleLogin && <Login handleCloseLogin={handleCloseLogin} />}
      </Navigation>
    </>
  );
};

export default AdminNavbar;
