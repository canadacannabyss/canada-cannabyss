import { all, takeLatest } from 'redux-saga/effects';
import CreateBilling from './billing/createBilling';
import CreateBillingCheckout from './billing/createBillingCheckout';
import DeleteBilling from './billing/deleteBilling';
import GetBilling from './billing/getBilling';
import GetBillingAddresses from './billing/getBillingAddresses';
import SetBillingAddress from './billing/setBillingAddress';
import UpdateBilling from './billing/updateBilling';
import GetBundleApi from './bundle/getBundle';
import PostCommentBundle from './bundle/postComment';
import GetBundlesApi from './bundles/getBundles';
import UpdateHowManyViewedBundleApi from './bundles/updateHowManyViewed';
import AddItemToCart from './cart/addItemToCart';
import GetCart from './cart/getCart';
import RemoveItemFromCart from './cart/removeItemFromCart';
import GetMainBundlesApi from './home/getMainBundles';
import MainCategoriesApi from './home/getMainCategories';
import GetProductsCategoriesApi from './products/getProductsCategories';
import GetMainProductsApi from './home/getMainProducts';
import GetMainNewestProductsApi from './home/getNewestProducts';
import GetOrder from './order/getOrder';
import UpdateSubtotalOrder from './order/updateSubtotalOrder';
import GetCommentsProduct from './product/getCommentsProduct';
import GetProductApi from './product/getProduct';
import PostComment from './product/postComment';
import UpdateHowManyViewedProductApi from './product/updateHowManyViewed';
import GetProductsApi from './products/getProducts';

import CreateShipping from './shipping/createShipping';
import CreateShippingCheckout from './shipping/createShippingCheckout';
import DeleteShipping from './shipping/deleteShipping';
import GetShipping from './shipping/getShipping';
import GetShippingAddresses from './shipping/getShippingAddresses';
import SetShippingAddress from './shipping/setShippingAddress';
import UpdateShipping from './shipping/updateShipping';
import ResetShipping from './shipping/resetShipping';

import LoginAdminUserApi from './user/loginAdminUser';
import LoginUserApi from './user/loginUser';
import FetchLoginUserApi from './user/fetchLoginUser';
import FetchLoginAdminUserApi from './user/fetchLoginAdminUser';
import FetchLoginResellerUserApi from './user/fetchLoginResellerUser';
import LoginUserProviderApi from './user/loginUserProvider';
import LogoutUserApi from './user/logoutUser';
import RefreshUserData from './user/refreshUserData';
import RegisterAdminUserApi from './user/registerAdminUser';

import GetBundlesCategoriesApi from './bundles/getBundlesCategories';
import CreatePaymentMethodETransfer from './paymentMethod/createPaymentMethodETransfer';
import SetPaymentMethodETransfer from './paymentMethod/setPaymentMethodETransfer';
import GetPaymentMethodETransfer from './paymentMethod/getPaymentMethodETransfer';
import UpdatePaymentMethodOrder from './order/updatePaymentMethod';
import UpdateCompletedOrder from './order/updateCompletedOrder';
import UpdateCompletedCart from './cart/updateCompletedCart';
import UpdateShippingOrder from './order/updateShippingOrder';
import UpdateBillingOrder from './order/updateBillingOrder';
import RemoveOrder from './order/removeOrder';
import RemoveCart from './cart/removeCart';
import GetUserOrders from './orders/getUserOrders';
import AddOneToCount from './loginRequestCount/addOneToCount';
import setLoginRequestToZero from './loginRequestCount/setLoginRequestToZero';
import GetAllOrders from './orders/getAllOrders';
import UpdateShippingStatus from './orders/updateShippingStatus';
import UpdatePaymentStatus from './orders/updatePaymentStatus';
import GetProductsCategory from './products/getProductsCategory';
import GetBundlesCategory from './bundles/getBundlesCategory';
import GetBanners from './home/getBanners';
import GetPromotion from './promotion/getPromotion';
import GetRecommendedProducts from './thankYou/getRecommendedProducts';
import UpdateShippingHandlingOrder from './order/updateShippingHandlingOrder';
import ResetShippingHandlingOrder from './order/resetShippingHandlingOrder';
import ResetBilling from './billing/resetBilling';
import UpdateTotalBeforeTaxOrder from './order/updateTotalBeforeTaxOrder';
import UpdateGstHstTaxOrder from './order/updateGstHstTaxOrder';
import UpdatePstRstTaxOrder from './order/updatePstRstTaxOrder';
import UpdateTotalOrder from './order/updateTotalOrder';
import UpdateOrderValues from './order/updateOrderValues';
import TakeAmountOfItemsPurchase from './cart/takeAmountOfItemsPurchased';
import ApplyCouponOrder from './order/applyCouponOrder';
import GetSearchItem from './search/getSearchItem';
import GetResellerProducts from './product/getResellerProducts';

import GetCategories from './categories/getCategories';

export default function* root() {
  yield all([
    takeLatest('REQUEST_GET_PRODUCT', GetProductApi),
    takeLatest('REQUEST_GET_RESELLER_PRODUCTS', GetResellerProducts),
    takeLatest('REQUEST_GET_PRODUCTS', GetProductsApi),
    takeLatest('REQUEST_GET_PRODUCTS_CATEGORIES', GetProductsCategoriesApi),
    takeLatest('REQUEST_GET_BUNDLES', GetBundlesApi),
    takeLatest('REQUEST_GET_BUNDLES_CATEGORIES', GetBundlesCategoriesApi),
    takeLatest('REQUEST_GET_BUNDLE', GetBundleApi),
    takeLatest('REQUEST_REGISTER_ADMIN_USER', RegisterAdminUserApi),
    takeLatest('REQUEST_LOGIN_ADMIN_USER', LoginAdminUserApi),
    takeLatest('REQUEST_LOGIN_USER', LoginUserApi),
    takeLatest('REQUEST_FETCH_LOGIN_USER', FetchLoginUserApi),
    takeLatest('REQUEST_FETCH_LOGIN_ADMIN_USER', FetchLoginAdminUserApi),
    takeLatest('REQUEST_FETCH_LOGIN_RESELLER_USER', FetchLoginResellerUserApi),
    takeLatest('REQUEST_LOGIN_USER_PROVIDER', LoginUserProviderApi),
    takeLatest('REQUEST_LOGOUT_USER', LogoutUserApi),
    takeLatest('REQUEST_REFRESH_USER_DATA', RefreshUserData),
    takeLatest('REQUEST_GET_MAIN_PRODUCTS', GetMainProductsApi),
    takeLatest('REQUEST_GET_MAIN_BUNDLES', GetMainBundlesApi),
    takeLatest('REQUEST_MAIN_NEWEST_PRODUCTS', GetMainNewestProductsApi),
    takeLatest('REQUEST_MAIN_CATEGORIES', MainCategoriesApi),
    takeLatest('REQUEST_POST_COMMENT', PostComment),
    takeLatest('REQUEST_POST_COMMENT_BUNDLE', PostCommentBundle),
    takeLatest('REQUEST_GET_ALL_COMMENTS_PRODUCT', GetCommentsProduct),
    takeLatest(
      'REQUEST_UPDATE_HOW_MANY_VIEWED_BUNDLE',
      UpdateHowManyViewedBundleApi
    ),
    takeLatest(
      'REQUEST_UPDATE_HOW_MANY_VIEWED_PRODUCT',
      UpdateHowManyViewedProductApi
    ),
    takeLatest('REQUEST_GET_CART', GetCart),
    takeLatest('REQUEST_ADD_ITEM_TO_CART', AddItemToCart),
    takeLatest('REQUEST_REMOVE_ITEM_FROM_CART', RemoveItemFromCart),
    takeLatest('REQUEST_GET_ORDER', GetOrder),
    takeLatest('REQUEST_UPDATE_SUBTOTAL_ORDER', UpdateSubtotalOrder),
    takeLatest('REQUEST_GET_BILLING', GetBilling),
    takeLatest('REQUEST_GET_SHIPPING', GetShipping),
    takeLatest('REQUEST_GET_BILLING_ADDRESSES', GetBillingAddresses),
    takeLatest('REQUEST_GET_SHIPPING_ADDRESSES', GetShippingAddresses),
    takeLatest('REQUEST_CREATE_BILLING', CreateBilling),
    takeLatest('REQUEST_CREATE_BILLING_CHECKOUT', CreateBillingCheckout),
    takeLatest('REQUEST_CREATE_SHIPPING', CreateShipping),
    takeLatest('REQUEST_CREATE_SHIPPING_CHECKOUT', CreateShippingCheckout),
    takeLatest('REQUEST_UPDATE_BILLING', UpdateBilling),
    takeLatest('REQUEST_UPDATE_SHIPPING', UpdateShipping),
    takeLatest('REQUEST_SET_BILLING_ADDRESS', SetBillingAddress),
    takeLatest('REQUEST_SET_SHIPPING_ADDRESS', SetShippingAddress),
    takeLatest('REQUEST_DELETE_BILLING', DeleteBilling),
    takeLatest('REQUEST_DELETE_SHIPPING', DeleteShipping),
    takeLatest(
      'REQUEST_CREATE_E_TRANSFER_AS_PAYMENT_METHOD',
      CreatePaymentMethodETransfer
    ),
    takeLatest(
      'REQUEST_SET_E_TRANSFER_AS_PAYMENT_METHOD',
      SetPaymentMethodETransfer
    ),
    takeLatest(
      'REQUEST_GET_E_TRANSFER_AS_PAYMENT_METHOD',
      GetPaymentMethodETransfer
    ),
    takeLatest('REQUEST_UPDATE_PAYMENT_METHOD_ORDER', UpdatePaymentMethodOrder),
    takeLatest('REQUEST_UPDATE_COMPLETED_ORDER', UpdateCompletedOrder),
    takeLatest('REQUEST_UPDATE_COMPLETED_CART', UpdateCompletedCart),
    takeLatest('REQUEST_UPDATE_BILLING_ORDER', UpdateBillingOrder),
    takeLatest('REQUEST_UPDATE_SHIPPING_ORDER', UpdateShippingOrder),
    takeLatest('REQUEST_REMOVE_ORDER', RemoveOrder),
    takeLatest('REQUEST_RESET_CART', RemoveCart),
    takeLatest('REQUEST_GET_USER_ORDERS', GetUserOrders),
    takeLatest('REQUEST_ADD_ONE_TO_COUNT', AddOneToCount),
    takeLatest('REQUEST_SET_LOGIN_REQUEST_TO_ZERO', setLoginRequestToZero),
    takeLatest('REQUEST_GET_ALL_ORDERS', GetAllOrders),
    takeLatest('REQUEST_UPDATE_SHIPPING_STATUS', UpdateShippingStatus),
    takeLatest('REQUEST_UPDATE_PAYMENT_STATUS', UpdatePaymentStatus),
    takeLatest('REQUEST_GET_PRODUCTS_CATEGORY', GetProductsCategory),
    takeLatest('REQUEST_GET_BUNDLES_CATEGORY', GetBundlesCategory),
    takeLatest('REQUEST_GET_BANNERS', GetBanners),
    takeLatest('REQUEST_GET_PROMOTION', GetPromotion),
    takeLatest('REQUEST_GET_RECOMMENDED_PRODUCTS', GetRecommendedProducts),
    takeLatest(
      'REQUEST_UPDATE_SHIPPING_HANDLING_ORDER',
      UpdateShippingHandlingOrder
    ),
    takeLatest(
      'REQUEST_RESET_SHIPPING_HANDLING_ORDER',
      ResetShippingHandlingOrder
    ),
    takeLatest('REQUEST_RESET_BILLING', ResetBilling),
    takeLatest('REQUEST_RESET_SHIPPING', ResetShipping),
    takeLatest(
      'REQUEST_UPDATE_TOTAL_BEFORE_TAX_ORDER',
      UpdateTotalBeforeTaxOrder
    ),
    takeLatest('REQUEST_UPDATE_GST_HST_TAX_ORDER', UpdateGstHstTaxOrder),
    takeLatest('REQUEST_UPDATE_PST_RST_TAX_ORDER', UpdatePstRstTaxOrder),
    takeLatest('REQUEST_UPDATE_TOTAL_ORDER', UpdateTotalOrder),
    takeLatest('REQUEST_UPDATE_ORDER_VALUES', UpdateOrderValues),
    takeLatest(
      'REQUEST_TAKE_AMOUNT_OF_ITEMS_PURCHASED',
      TakeAmountOfItemsPurchase
    ),
    takeLatest('REQUEST_APPLY_COUPON_ORDER', ApplyCouponOrder),
    takeLatest('REQUEST_SEARCH_ITEM', GetSearchItem),
    takeLatest('REQUEST_GET_CATEGORIES', GetCategories),
  ]);
}
