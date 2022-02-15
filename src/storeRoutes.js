import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import LeafletMaps from "containers/LeafletMaps";
import Products from "containers/Pages/Products";
// import ProductCard from "containers/ProductCard";
import "./styles.css";
import AlcoholPage from "pages/alcohol"
import Search from "containers/Search";
import HomePage from "pages/grocery";
import HelpPage from "pages/help";
import MakeupPage from "pages/makeup";
import WomenClothsPage from "pages/clothing";
import BagsPage from "pages/bags";
import BooksPage from "pages/book";
import FurniturePage from "pages/furniture";
import MedicinePage from "pages/medicine";
import CheckoutPage from "pages/checkout";
import AlternativeCheckoutPage from "pages/checkout-alternative";
import RequestMedicinePage from "pages/request-medicine";
import ProfilePage from "pages/profile";
import OrderPage from "pages/order";
import OrderReceived from "pages/order-received";
import GiftCardPage from "pages/offer";

function StoreRoutes(deviceType) {
  const { path } = useRouteMatch();
  return (
    <div className="">
      <Switch>
        <Route exact path={`${path}`}>
          <AlcoholPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/grocery`}>
          <HomePage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/search`}>
          <Search deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/makeup`}>
          <MakeupPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/clothing`}>
          <WomenClothsPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/bags`}>
          <BagsPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/book`}>
          <BooksPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/furniture`}>
          <FurniturePage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/medicine`}>
          <MedicinePage deviceType={deviceType} />
        </Route>
        
        <Route exact path={`${path}/checkout`}>
          <CheckoutPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/checkout-alternative`}>
          <AlternativeCheckoutPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/request-medicine`}>
          <RequestMedicinePage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/profile`}>
          <ProfilePage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/order`}>
          <OrderPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/order-received`}>
          <OrderReceived deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/offer`}>
          <GiftCardPage deviceType={deviceType} />
        </Route>
        <Route exact path={`${path}/help`}>
          <HelpPage deviceType={deviceType} />
        </Route>
      </Switch>
    </div>
  );
}

export default StoreRoutes;
