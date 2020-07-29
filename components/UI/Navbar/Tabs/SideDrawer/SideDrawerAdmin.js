import Link from 'next/link';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Backgrond,
  LinkTo,
  Login,
  Logout,
  Nav,
  Ul,
  UserPicture,
  UserP,
  UserDiv,
  Loading,
} from '../../../../../styles/Components/UI/Navbar/Tabs/SideDrawer/SideDrawer';
import { logoutUser } from '../../../../../store/actions/user/user';

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user,
  };
};

const SideDrawer = (props) => {
  const { user } = props;
  const dispatch = useDispatch();

  const closeDrawer = () => {
    const { CloseDrawer } = props;
    const close = CloseDrawer;
    close();
  };

  const handleOpenLogin = () => {
    const { openLogin } = props;
    const open = openLogin;
    open();
  };

  const handleToggleLogout = () => {
    const { handleToggleLogout } = props;
    const logout = handleToggleLogout;
    logout();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Backgrond id='bg' onClick={closeDrawer} />
      <Nav id='drawer'>
        <section className='ac-container'>
          {user.fetched && !_.isEmpty(user.data) && !user.error ? (
            <div>
              <input id='ac-2' name='accordion-1' type='radio' />
              <label htmlFor='ac-2' className='labelProfile'>
                <UserDiv>
                  <UserPicture>
                    <img src={user.data.profileImage.url} />
                  </UserPicture>
                  <UserP>{user.data.name}</UserP>
                </UserDiv>
              </label>
              <article className='ac-large'>
                <Ul>
                  <li>
                    <Link href='/account/orders' as='/account/orders'>
                      <a>Orders</a>
                    </Link>
                  </li>
                </Ul>
              </article>
            </div>
          ) : (
            <div>
              <Login onClick={handleOpenLogin}>Login</Login>
            </div>
          )}
          <div>
            <Link href='/admin' as='/admin'>
              <LinkTo>Dashboard</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/products' as='/admin/products'>
              <LinkTo>Products</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/bundles' as='/admin/bundles'>
              <LinkTo>Bundles</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/promotions' as='/admin/promotions'>
              <LinkTo>Promotions</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/coupons' as='/admin/coupons'>
              <LinkTo>Coupons</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/analytics' as='/admin/analytics'>
              <LinkTo>Analytics</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/categories' as='/admin/categories'>
              <LinkTo>Categories</LinkTo>
            </Link>
          </div>
          <div>
            <Link href='/admin/orders' as='/admin/orders'>
              <LinkTo>Orders</LinkTo>
            </Link>
          </div>
          {user.fetched && !_.isEmpty(user.data) && !user.error && (
            <div>
              <Logout
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </Logout>
            </div>
          )}
        </section>
      </Nav>
    </>
  );
};

export default connect(mapStateToProps)(SideDrawer);
