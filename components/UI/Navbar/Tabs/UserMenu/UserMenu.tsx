import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../../store/actions/user/user';
import { closeLoginForm } from '../../../../../store/actions/navbar/navbar';
import {
  LinkTo,
  MenuOpitionLi,
  MenuOpitionUl,
  Profile,
  ProfileDiv,
  Wrapper,
} from '../../../../../styles/Components/UI/Navbar/Tabs/UserMenu/UserMenu';

const UserMenu = (props) => {
  const { handleToggleUserMenu, user } = props;

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(closeLoginForm());
    dispatch(logoutUser());
  };

  return (
    <>
      <Wrapper>
        <MenuOpitionUl>
          {user.data.isAdmin && (
            <MenuOpitionLi>
              <Link href="/admin/index" as="/admin">
                <LinkTo onClick={handleToggleUserMenu}>Admin</LinkTo>
              </Link>
            </MenuOpitionLi>
          )}
          {user.data.isReseller && (
            <MenuOpitionLi>
              <Link href="/reseller/index" as="/reseller">
                <LinkTo onClick={handleToggleUserMenu}>Reseller</LinkTo>
              </Link>
            </MenuOpitionLi>
          )}
          <MenuOpitionLi>
            <Link href="/account" as="/account">
              <LinkTo onClick={handleToggleUserMenu}>Account</LinkTo>
            </Link>
          </MenuOpitionLi>
          <MenuOpitionLi>
            <Link href="/account/orders" as="/account/orders">
              <LinkTo onClick={handleToggleUserMenu}>Orders</LinkTo>
            </Link>
          </MenuOpitionLi>
          <MenuOpitionLi>
            <Link href="/" as="/">
              <LinkTo onClick={handleLogout} className="last">
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
