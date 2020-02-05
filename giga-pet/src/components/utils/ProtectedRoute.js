import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { render: Render, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("token")) {
          return <Render {...renderProps} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
