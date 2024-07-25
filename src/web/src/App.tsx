import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga4';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import { useAppDispatch, useAppSelector } from './store/store';
import MenuItems from './pages/Tables/Items';
import NewMenuItems from './pages/Menu/MenuItems';
import CustomerOrderTable from './pages/Orders/CustomerOrderTable';
import UserMassage from './pages/Massages/UserMassage';
import SetupKitchen from './pages/Kitchen/SetupKitchen';
import AddresBook from './pages/Tables/AddresBook';
import AccountSettings from './pages/Settings/AccountSettings';
import MemberShip from './pages/MemberShip/Membership';
import PlaceOrder from './pages/Orders/PlaceOrder';
import { useWindowSize } from './hooks/useWindowSize';
import { calculateWindowSize } from './utils/helpers';
import Login from './modules/login/Login';
import Register from './modules/register/Register';
import { setWindowSize } from './store/reducers/ui';
import RecoverPassword from './modules/recover-password/RecoverPassword';
import ForgotPassword from './modules/forgot-password/ForgotPassword';
import Main from './modules/main/Main';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile/Profile';
import Vehicles from './pages/Tables/Vehicles';
import MenuDetails from './components/forms/Menu/MenuDetails';
import Home from "./pages/website/home/Home";
import MainComp from "./components/website/mainComp/MainComp";
import AboutUs from "./pages/website/aboutus/AboutUs";
import ContactUs from "./pages/website/contactUs/ContactUs";
import MenuPage from "./pages/website/menuPage/MenuPage";
import Gallary from "./pages/website/gallary/Gallary";
import Projects from "./pages/website/projects/Projects";
import MeetChefs from "./pages/website/meetCheifs/MeetCheifs";
import Blogs from "./pages/website/blogs/Blogs";
import BlogsSinglePage from "./pages/website/blogsSinglePage/BlogsSinglePage";
import Shop from "./pages/website/shop/Shop";
import ShopSinglePage from "./pages/website/shopSinglePage/ShopSinglePage";
import ShopCart from "./pages/website/shopCart/ShopCart";
import CheckOut from "./pages/website/checkOut/CheckOut";
import Page404 from "./pages/website/page404/Page404";
import MemberShipType from './pages/MemberShip/Types';

const { VITE_NODE_ENV } = import.meta.env;

const App = () => {
    const windowSize = useWindowSize();
    const screenSize = useAppSelector((state) => state.ui.screenSize);
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        const size = calculateWindowSize(windowSize.width);
        if (screenSize !== size) {
            dispatch(setWindowSize(size));
        }
    }, [windowSize]);

    useEffect(() => {
        if (location && location.pathname && VITE_NODE_ENV === 'production') {
            ReactGA.send({
                hitType: 'pageview',
                page: location.pathname,
            });
        }
    }, [location]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<MainComp />}></Route>
                    <Route path="/about-us" element={<AboutUs />}></Route>
                    <Route path="/contact-us" element={<ContactUs />}></Route>
                    <Route path="/menu" element={<MenuPage />}></Route>
                    <Route path="/gallary" element={<Gallary />}></Route>
                    <Route path="/project" element={<Projects />}></Route>
                    <Route path="/meet-chefs" element={<MeetChefs />}></Route>
                    <Route path="/blog" element={<Blogs />}></Route>
                    <Route path="/blog-single" element={<BlogsSinglePage />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/shop-single" element={<ShopSinglePage />}></Route>
                    <Route path="/shop-cart" element={<ShopCart />}></Route>
                    <Route path="/checkout" element={<CheckOut />}></Route>
                    <Route path="/page-404" element={<Page404 />}></Route>
                </Route>
                <Route path="/login" element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/register" element={<PublicRoute />}>
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/forgot-password" element={<PublicRoute />}>
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>
                <Route path="/recover-password" element={<PublicRoute />}>
                    <Route path="/recover-password" element={<RecoverPassword />} />
                </Route>
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route path="/admin" element={<Main />}>
                        <Route index element={<Dashboard />} />
                        <Route path='menu'>
                            <Route path="items" element={<MenuItems />}></Route>
                            <Route path="item-details/:id" element={<MenuDetails />}></Route>
                            <Route path="new-item" element={<NewMenuItems />} />
                        </Route>
                        <Route path='membership'>
                            <Route path="types" element={<MemberShipType />}></Route>
                            <Route path="payment" element={<MemberShip />}></Route>
                        </Route>
                        <Route path="orders" element={<CustomerOrderTable />} />
                        <Route path="massages" element={<UserMassage />} />
                        <Route path="sales" element={<h1>My sales</h1>} />
                        <Route path="kitchen/settings" element={<SetupKitchen />} />
                        <Route path="vehicles" element={<Vehicles />} />
                        <Route path="address" element={<AddresBook />} />
                        <Route path="account/setting" element={<AccountSettings />} />
                        <Route path="purchase" element={<PlaceOrder />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer
                autoClose={3000}
                draggable={false}
                position="top-right"
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnHover
            />
        </>
    );
};

export default App;