import { Popconfirm } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Logos from "../../assets/logo/logo.svg";
import './index.scss';


const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    stateMenu,
    titleHeader,
    stateMenuChild,
    headerMenu,
    setContent,
    setHeaderMenu,
  } = props.data;

  const confirm = (e) => {
    history.push("/login");
  };
  const onHeaderMenu = () => {
    setContent(0);
    setHeaderMenu("");
  };
  return (
    <div className="header">
      {/*<div className="left">*/}
      {/*  <img src={Logos} alt="Logos" style={{maxHeight:150}}/>*/}
        {/*<div>*/}
        {/*  <span>*/}
        {/*    {titleHeader === "" ? "Dashboard Reporting" : titleHeader}{" "}*/}
        {/*  </span>*/}
        {/*  /!*<span>{headerMenu}</span>*!/*/}
        {/*</div>*/}
      {/*</div>*/}
      {/*<div className="right">*/}
        {/*<Popconfirm*/}
        {/*  title="Apakah anda yakin ?"*/}
        {/*  onConfirm={confirm}*/}
        {/*  // onCancel={cancel}*/}
        {/*  okText="Yes"*/}
        {/*  cancelText="No"*/}
        {/*>*/}
        {/*  <button>*/}
        {/*    /!*<img src={Logout} alt="icon-logout" />*!/*/}
        {/*    Logout*/}
        {/*  </button>*/}
        {/*</Popconfirm>*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;
