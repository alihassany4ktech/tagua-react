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
import AdminProfile from './Componenets/admin/AdminProfile';
import MainAdminDashboard from './Componenets/Dashboard/MainDashboard';
import AdmindashboardContent from './Componenets/Dashboard/Dashbord';
import User from './Componenets/Dashboard/users/User';
import ProductList from './Componenets/Dashboard/poducts/ProductList';
import CreateProduct from './Componenets/Dashboard/poducts/CreateProdct';
import OrderList from './Componenets/Dashboard/orderlist/OrderList';
import UserProfile from './Componenets/Dashboard/users/UserProfile';
import CreateUser from './Componenets/Dashboard/users/CreateUser';
import UserProfileEdit from './Componenets/Dashboard/users/UserPrfileEdit';
import EditProduct from './Componenets/Dashboard/poducts/EditProduct';
import CreateOrder from './Componenets/Dashboard/orderlist/CreateOrder';
import OrderDetail from './Componenets/Dashboard/orderlist/OrderDetail';
import EditOrder from './Componenets/Dashboard/orderlist/EditOrder';
import Category from './Componenets/Dashboard/category/Category';
import Gallery from './Componenets/Dashboard/gallery/Gallery';
import ImageDetail from './Componenets/Dashboard/gallery/ImageDetail';
import Blog from './Componenets/Dashboard/blog/Blog';
import Tage from './Componenets/Dashboard/tages/Tage';
import Setting from './Componenets/Dashboard/setting/Setting';
import CreateBlog from './Componenets/Dashboard/blog/CreateBlog';
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
    {
      path: '/dashboard',
      element: (
        <MainAdminDashboard />
      ),
      children: [  
        { path: '', element: <Navigate to="/dashboard/admindashboard" replace /> },
        { path: 'admindashboard', element: <AdmindashboardContent /> },
        { path: 'admin/profile', element: <AdminProfile /> }, 
        { path: 'users', element: <User /> }, 
        { path: 'create-user', element: <CreateUser /> }, 
        { path: 'user/profile', element: <UserProfile /> },  
        { path: 'user/profile/edit', element: <UserProfileEdit /> },   
        { path: 'product/list', element: <ProductList /> }, 
        { path: 'create-product', element: <CreateProduct /> }, 
        { path: 'product/edit', element: <EditProduct /> }, 
        { path: 'order/list', element: <OrderList /> }, 
        { path: 'create-order', element: <CreateOrder /> }, 
        { path: 'order/details', element: <OrderDetail /> }, 
        { path: 'order/edit', element: <EditOrder /> }, 
        { path: 'category', element: <Category /> }, 
        { path: 'gallery', element: <Gallery /> }, 
        { path: 'image-details', element: <ImageDetail /> }, 
        { path: 'blogs', element: <Blog /> }, 
        { path: 'create-blog', element: <CreateBlog /> }, 
        { path: 'tags', element: <Tage /> }, 
        { path: 'setting', element: <Setting /> },   
      ]
    }, 
                           
  ]);
}
