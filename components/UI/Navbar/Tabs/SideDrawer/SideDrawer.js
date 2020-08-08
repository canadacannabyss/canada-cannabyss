import Link from 'next/link';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
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
  const { productsCategories, bundlesCategories, user } = state;

  return {
    productsCategories,
    bundlesCategories,
    user,
  };
};

const SideDrawer = (props) => {
  const { productsCategories, bundlesCategories, user } = props;
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
                  <UserP>{`${user.data.names.firstName} ${user.data.names.lastName}`}</UserP>
                </UserDiv>
              </label>
              <article className='ac-large'>
                <Ul>
                  {user.data.isAdmin && (
                    <li>
                      <Link href='/admin' as='/admin'>
                        <a>Admin</a>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link href='/account' as='/account'>
                      <a>Account</a>
                    </Link>
                  </li>
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
            <Link href='/' as='/'>
              <LinkTo>Home</LinkTo>
            </Link>
          </div>
          <div>
            <input id='ac-3' name='accordion-1' type='radio' />
            <label htmlFor='ac-3'>Products</label>
            <article className='ac-medium'>
              <Ul>
                <li>
                  <Link href='/products' as='/products'>
                    <a>All Products</a>
                  </Link>
                </li>
                {productsCategories.loading ? (
                  <Loading>
                    <FaSpinner />
                  </Loading>
                ) : (
                  <>
                    {productsCategories.fetched &&
                      !_.isEmpty(productsCategories.data) &&
                      !productsCategories.error && (
                        <>
                          {productsCategories.data.map((category) => (
                            <li key={category._id}>
                              <Link
                                href='/products/category/[slug]'
                                as={`/products/category/${category.slug}`}
                              >
                                <a>{category.categoryName}</a>
                              </Link>
                            </li>
                          ))}
                        </>
                      )}
                  </>
                )}
              </Ul>
            </article>
          </div>
          <div>
            <input id='ac-4' name='accordion-1' type='radio' />
            <label htmlFor='ac-4'>Bundles</label>
            <article className='ac-medium'>
              <Ul>
                <li>
                  <Link href='/bundles' as='/bundles'>
                    <a>All Bundles</a>
                  </Link>
                </li>
                {bundlesCategories.loading ? (
                  <Loading>
                    <FaSpinner />
                  </Loading>
                ) : (
                  <>
                    {bundlesCategories.fetched &&
                      !_.isEmpty(bundlesCategories.data) &&
                      !bundlesCategories.error && (
                        <>
                          {bundlesCategories.data.map((category) => (
                            <li key={category._id}>
                              <Link
                                href='/bundles/category/[slug]'
                                as={`/bundles/category/${category.slug}`}
                              >
                                <a>{category.categoryName}</a>
                              </Link>
                            </li>
                          ))}
                        </>
                      )}
                  </>
                )}
              </Ul>
            </article>
          </div>
          <div>
            <input id='ac-5' name='accordion-1' type='radio' />
            <label htmlFor='ac-5'>Help</label>
            <article className='ac-large'>
              <Ul>
                <li>
                  <Link href='/contact' as='/'>
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href='/about' as='/'>
                    <a>About Us</a>
                  </Link>
                </li>
              </Ul>
            </article>
          </div>
          {user.fetched && !_.isEmpty(user.data) && !user.error && (
            <>
              {user.data.isAdmin && (
                <div>
                  <Link href='/admin' as='/admin'>
                    <LinkTo>Admin</LinkTo>
                  </Link>
                </div>
              )}
            </>
          )}
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
