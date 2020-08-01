import _ from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaSortDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../../assets/img/canada-cannabyss-logo.svg';
import { fetchLoginUser } from '../../../store/actions/user/user';
import { updateOrderValue } from '../../../store/actions/order/order';
import { addOneToCount } from '../../../store/actions/loginRequestCount/loginRequestCount';
import { openLoginTab } from '../../../store/actions/navbar';
import {
  BarsCartDiv,
  BrandFlexMobile,
  BrandFlex,
  Brand,
  BrandDiv,
  BrandName,
  BrandSearchDiv,
  DrawerBtn,
  Li,
  LinkTo,
  LiUser,
  MenuDiv,
  Nav,
  Navigation,
  TopGroup,
  TopGroupWapper,
  BottomGroup,
  BottomGroupWrapper,
  UserButtonNameLoading,
  SearchBarFlex,
  SearchBar,
  UserWrapper,
  CartDiv,
  CartItemsAmount,
  TabButton,
  TabButtonUser,
  UserButtonName,
  Ul,
  UserButton,
  SignInButton,
  LoadingUserButton,
  UserDiv,
  UserDivFlex,
} from '../../../styles/Components/UI/Navbar/Navbar';
import OutsideAlerter from '../../../utils/OutsideAlerter';
import Bundles from './Tabs/Bundles/Bundles';
import Cart from './Tabs/Cart/Cart';
import Help from './Tabs/Help/Help';
import Login from './Tabs/Login/Login';
import Products from './Tabs/Products/Products';
import Register from './Tabs/Register/Register';
import SideDrawer from './Tabs/SideDrawer/SideDrawer';
import UserMenu from './Tabs/UserMenu/UserMenu';

let count = 0;
let countRecalculateSubtotal = 0;

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleBundles, setToggleBundles] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const [localStorageChange, setLocalStorageChange] = useState(false);

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const loginRequestCout = useSelector((state) => state.loginRequestCout);
  const navbar = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_.isEmpty(order.data) && order.fetched && !order.error) {
      let subtotal = 0;
      if (
        cart.fetched &&
        !cart.error &&
        !_.isEmpty(order.data) &&
        order.fetched
      ) {
        if (!order.data.completed && !cart.data.completed) {
          cart.data.items.map((item) => {
            subtotal += parseFloat(item.prices.price) * item.quantity;
          });
          dispatch(updateOrderValue(order.data._id, subtotal));
        }
      }
    }
  }, [cart.data, order.data.subtotal, order.data.coupon]);

  useEffect(() => {
    if (count === 0) {
      dispatch(fetchLoginUser());
      count++;
      dispatch(addOneToCount());
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
    setToggleBundles(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleToggleProduct = () => {
    setToggleHelp(false);
    setToggleProduct(!toggleProduct);
    setToggleRegister(false);
    setToggleBundles(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleToggleBundles = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleBundles(!toggleBundles);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleToggleCart = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleCart(!toggleCart);
    setToggleBundles(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleDrawer(false);
  };

  const handleToggleRegister = () => {
    if (_.isEmpty(user.data)) {
      setToggleHelp(false);
      setToggleProduct(false);
      setToggleBundles(false);
      // setToggleRegister(!toggleRegister);
      dispatch(openLoginTab());
      setToggleLogin(false);
      setToggleCart(false);
      setToggleDrawer(false);
      handleCloseSideDrawer();
    }
  };

  const handleToggleLogin = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleBundles(false);
    setToggleRegister(false);
    setToggleLogin(!toggleLogin);
    setToggleCart(false);
    setToggleDrawer(false);
    handleCloseSideDrawer();
  };

  const handleToggleLogout = () => {
    handleCloseSideDrawer();
  };

  const handleToggleUserMenu = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleBundles(false);
    setToggleCart(false);
    setToggleDrawer(false);
    setToggleUserMenu(!toggleUserMenu);
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
    setToggleBundles(false);
    setToggleDrawer(false);
  };

  const handleCloseLogin = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleBundles(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseProducts = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleBundles(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseBundles = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleRegister(false);
    setToggleLogin(false);
    setToggleBundles(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  const handleCloseHelp = () => {
    setToggleHelp(false);
    setToggleProduct(false);
    setToggleBundles(false);
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
    setToggleBundles(false);
    setToggleCart(false);
    setToggleDrawer(false);
  };

  return (
    <>
      <SideDrawer
        CloseDrawer={handleCloseSideDrawer}
        openLogin={handleToggleRegister}
        handleToggleLogout={handleToggleLogout}
      />
      <Navigation>
        <TopGroup>
          <TopGroupWapper>
            <DrawerBtn type='button' onClick={handleToggleDrawer}>
              <FaBars />
            </DrawerBtn>
            <BrandFlex>
              <BrandDiv>
                <Link href='/' as='/'>
                  <Brand
                    src={Logo}
                    alt='Canada Cannabyss'
                    title='Canada Cannabyss'
                  />
                </Link>
              </BrandDiv>
              <BrandName>
                <p>
                  Canada <span>Cannabyss</span>
                </p>
              </BrandName>
            </BrandFlex>
            <BrandFlexMobile>
              <BrandDiv>
                <Link href='/' as='/'>
                  <Brand
                    src={Logo}
                    alt='Canada Cannabyss'
                    title='Canada Cannabyss'
                  />
                </Link>
              </BrandDiv>
              <BrandName>
                <p>
                  Canada <span>Cannabyss</span>
                </p>
              </BrandName>
            </BrandFlexMobile>
            <SearchBarFlex>
              <SearchBar>
                <input type='text' placeholder='Looking for something?' />
                <button>
                  <FaSearch />
                </button>
              </SearchBar>
            </SearchBarFlex>
            <UserWrapper>
              {!_.isEmpty(user.data) &&
                user.fetched &&
                !user.loading &&
                !user.error && (
                  <>
                    <TabButtonUser onClick={handleToggleCart}>
                      {cart.fetched && !_.isEmpty(cart.data) && (
                        <>
                          {cart.data.items.length > 0 && (
                            <CartItemsAmount>
                              <p>{cart.data.items.length}</p>
                            </CartItemsAmount>
                          )}
                        </>
                      )}
                      <FaShoppingCart />
                    </TabButtonUser>
                    <UserButtonName onClick={handleToggleUserMenu}>
                      <p>
                        Hello, <span>{user.data.names.firstName}</span>
                      </p>
                      <p className='account'>Account</p>
                    </UserButtonName>
                  </>
                )}
              {user.loading && (
                <UserDivFlex>
                  {/* <LoadingUserButton /> */}
                  <UserButtonNameLoading />

                  <TabButtonUser onClick={handleToggleCart}>
                    {cart.fetched && !_.isEmpty(cart.data) && (
                      <>
                        {cart.data.items.length > 0 && (
                          <CartItemsAmount>
                            <p>{cart.data.items.length}</p>
                          </CartItemsAmount>
                        )}
                      </>
                    )}
                    <FaShoppingCart />
                  </TabButtonUser>
                </UserDivFlex>
              )}
              {_.isEmpty(user.data) &&
                !user.loading &&
                !user.error &&
                !user.fetched && (
                  <>
                    <SignInButton onClick={handleToggleRegister}>
                      Sign In
                    </SignInButton>

                    <TabButton onClick={handleToggleCart}>
                      <FaShoppingCart />
                    </TabButton>
                  </>
                )}
              {_.isEmpty(user.data) &&
                !user.loading &&
                user.error &&
                !user.fetched && (
                  <>
                    <TabButton onClick={handleToggleCart}>
                      <FaShoppingCart />
                    </TabButton>
                    <SignInButton onClick={handleToggleRegister}>
                      Sign In
                    </SignInButton>
                  </>
                )}
            </UserWrapper>
          </TopGroupWapper>
        </TopGroup>
        <BottomGroup>
          <BottomGroupWrapper>
            <TabButton onClick={handleToggleProduct}>
              Products
              <FaSortDown />
            </TabButton>
            <TabButton onClick={handleToggleBundles}>
              Bundles
              <FaSortDown />
            </TabButton>
            <TabButton onClick={handleToggleHelp}>
              Help
              <FaSortDown />
            </TabButton>
          </BottomGroupWrapper>
        </BottomGroup>
        {toggleUserMenu && user.fetched && !_.isEmpty(user.data) && (
          <OutsideAlerter handleClose={handleToggleUserMenu}>
            <UserMenu
              names={user.data.names}
              handleToggleUserMenu={handleToggleUserMenu}
              isAdmin={user.data.isAdmin}
            />
          </OutsideAlerter>
        )}
        {toggleHelp && (
          <OutsideAlerter handleClose={handleCloseHelp}>
            <Help handleClose={handleCloseHelp} />
          </OutsideAlerter>
        )}
        {toggleProduct && (
          <OutsideAlerter handleClose={handleCloseProducts}>
            <Products handleClose={handleCloseProducts} />
          </OutsideAlerter>
        )}
        {toggleBundles && (
          <OutsideAlerter handleClose={handleCloseBundles}>
            <Bundles handleClose={handleCloseBundles} />
          </OutsideAlerter>
        )}
        {toggleCart && (
          <OutsideAlerter handleClose={handleCloseCart}>
            <Cart />
          </OutsideAlerter>
        )}
        {navbar.showLoginTab && _.isEmpty(user.data) && (
          <Register handleCloseRegister={handleCloseRegister} />
        )}
        {toggleLogin && <Login handleCloseLogin={handleCloseLogin} />}
      </Navigation>
    </>
  );
};

export default Navbar;