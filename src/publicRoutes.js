import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import LeafletMaps from "./containers/LeafletMaps";
import Products from "./containers/Pages/Products";
import "./styles.css";

function PublicRoutes() {
  const { path } = useRouteMatch();
  return (
    <div className="">
      <Switch>
        <Route exact path={`${path}`} component={LeafletMaps} />
        <Route exact path={`${path}/map`} component={LeafletMaps} />
        <Route exact path={`${path}/leaflet`} component={LeafletMaps} />
        <Route exact path={`${path}/products`} component={Products} />
      </Switch>
    </div>
  );
}

export default PublicRoutes;
