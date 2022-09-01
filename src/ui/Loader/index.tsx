import { Typography } from "antd";
import React from "react";

import "./index.css";

const Loader: React.FC = () => {
  return (
    <div className="ui-loader">
      <Typography.Title level={3}>Loading...</Typography.Title>
    </div>
  );
};

export default Loader;
