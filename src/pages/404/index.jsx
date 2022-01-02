import { Button } from "antd";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import s from "./style404.scss";

const NotFoundPage = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
      history.push("/");
  }, []);
  return (
    <div className={s.pageNotFound}>
      <div className={s.content}>
        <div>Page not found</div>
        <div>
          <Button onClick={() => history.push("/")}>Back to dashboard</Button>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
