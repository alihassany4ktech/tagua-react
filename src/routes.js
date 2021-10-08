import { Navigate, useRoutes } from 'react-router-dom';
import Login from './Componenets/Frontend/Auth/Login';
import About from './Componenets/Frontend/AboutUs/About';
import Register from './Componenets/Frontend/Auth/Register';
import ContactUs from './Componenets/Frontend/ContactUs/ContactUs';
import Faq from './Componenets/Frontend/FAQ/Faq';
import Home from './Componenets/Frontend/Home/Home';
import AllProduct from './Componenets/Frontend/Pages/AllProduct/AllProduct';
import Cart from './Componenets/Frontend/Pages/Cart/Cart';
import Checkout from './Componenets/Frontend/Pages/Checkout/Checkout';
import HomePage from './Componenets/Frontend/Pages/HomePage/HomePage';
import ProductDetailPage from './Componenets/Frontend/Pages/ProductDetailPage/ProductDetailPage';
import PrivacyPolicy from './Componenets/Frontend/PrivacyPolicy/PrivacyPolicy';
import TermAndCondition from './Componenets/Frontend/TermAndCondition/TermAndCondition';
import TrackOrder from './Componenets/Frontend/TrackOrder/TrackOrder';
import Dashboard from './Componenets/Account/dashboard/Dashboard';
import Order from './Componenets/Account/orders/Order';
import OrderView from './Componenets/Account/orders/OrderView';
import Pay from './Componenets/Account/orders/Pay';
import Download from './Componenets/Account/download/Download';
import Address from './Componenets/Account/Addresses/Address';
import PaymentMethod from './Componenets/Account/paymentMethod/PaymentMethod';
import AddPaymentMethod from './Componenets/Account/paymentMethod/AddPaymenyMethod';
import AccountDetail from './Componenets/Account/accountDetail/AccountDetail';
import WishList from './Componenets/Account/wishList/WishList';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Home />
      ),
      children: [
        { path: '', element: <Navigate to="/home" replace /> },
        { path: 'home', element: <HomePage /> },
        { path: 'productdetail', element: <ProductDetailPage /> },
        { path: 'allproducts', element: <AllProduct /> },
        { path: 'sale', element: <AllProduct /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'track-order', element: <TrackOrder /> },
        { path: 'faq', element: <Faq /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact', element: <ContactUs /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'terms-condition', element: <TermAndCondition /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'account', element: <Dashboard /> },
        { path: 'orders', element: <Order /> },
        { path: 'product-view', element: <OrderView /> },
        { path: 'pay', element: <Pay /> },
        { path: 'download', element: <Download /> },
        { path: 'addresses', element: <Address /> },
        { path: 'payment-method', element: <PaymentMethod /> },
        { path: 'add-payment-method', element: <AddPaymentMethod /> },
        { path: 'account-details', element: <AccountDetail /> },
        { path: 'wish-list', element: <WishList /> }, 
      ]  
    },
  ]);
}
