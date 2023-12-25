import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/Theme";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Contact from "./pages/Contact";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="ourstore" element={<OurStore />} />
              <Route path="singleproduct" element={<SingleProduct />} />
              <Route path="contact" element={<Contact />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="forgotpassword" element={<ForgotPassword />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
          {/* 
          <Routes>
            <Route path="checkout" element={<Checkout />} />
          </Routes> */}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
