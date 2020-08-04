import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../../store/actions/user/user';
import { closeLoginTab } from '../../../../../store/actions/navbar';
import {
  LinkTo,
  MenuOpitionLi,
  MenuOpitionUl,
  Profile,
  ProfileDiv,
  Wrapper,
} from '../../../../../styles/Components/UI/Navbar/Tabs/UserMenu/UserMenu';

const UserMenu = (props) => {
  const { names, handleToggleUserMenu, isAdmin } = props;

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(closeLoginTab());
    dispatch(logoutUser());
  };

  return (
    <>
      <Wrapper>
        <MenuOpitionUl>
          {isAdmin && (
            <MenuOpitionLi>
              <Link href='/admin/index' as='/admin'>
                <LinkTo onClick={handleToggleUserMenu}>Admin</LinkTo>
              </Link>
            </MenuOpitionLi>
          )}
          <MenuOpitionLi>
            <Link href='/account' as='/account'>
              <LinkTo onClick={handleToggleUserMenu}>Account</LinkTo>
            </Link>
          </MenuOpitionLi>
          <MenuOpitionLi>
            <Link href='/account/orders' as='/account/orders'>
              <LinkTo onClick={handleToggleUserMenu}>Orders</LinkTo>
            </Link>
          </MenuOpitionLi>
          <MenuOpitionLi>
            <Link href='/' as='/'>
              <LinkTo onClick={handleLogout} className='last'>
                Sign out
              </LinkTo>
            </Link>
          </MenuOpitionLi>
        </MenuOpitionUl>
      </Wrapper>
    </>
  );
};

export default UserMenu;
