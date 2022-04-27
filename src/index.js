import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Product from "./pages/ProductDisplay";
// import ShopingCart from "./pages/ShopingCart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Admin from "./pages/Admin";
import ProductAdmin from "./views/ProductAdmin/ProductAdmin";
import Dashboard from "./views/Dashboard/Dashboard";
import AboutAdmin from "./views/AboutAdmin/AboutAdmin";
import BlogAdmin from "./views/BlogAdmin/BlogAdmin";
import ContactAdmin from "./views/ContactAdmin/ContactAdmin";
import Profile from "./views/Profile/Profile";

ReactDOM.render(
  <div id="App">
    <Router>
      <div id="page-container">
        {/* <div id=""> */}
        <Switch>
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/register" component={Register} />
          <Route path="/productadmin" component={ProductAdmin} />

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/aboutadmin" component={AboutAdmin} />
          <Route path="/blogadmin" component={BlogAdmin} />
          <Route path="/contactadmin" component={ContactAdmin} />
          <Route path="/profile" component={Profile} />
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/product" component={Product} />
            {/* <Route path="/cart" component={ShopingCart} /> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
