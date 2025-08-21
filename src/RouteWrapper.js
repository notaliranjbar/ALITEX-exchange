
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "./Loading";

const RouteWrapper = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loading /> : <Outlet />;
};

export default RouteWrapper;
