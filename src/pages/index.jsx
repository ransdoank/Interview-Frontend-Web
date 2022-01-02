import { Col, Row } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";

// import Header from "../components/header";
import Sidebar from "../components/sidebar";

import Quest1 from "./quest1";
import Quest2 from "./quest2";
import Foot from "../components/footer";

import menu1 from "../assets/icon/Q1.svg";
import menu2 from "../assets/icon/Q2.svg";

const Dashboard = () => {
  const [stateMenu, setStateMenu] = useState(1);
  const [stateMenuChild, setStateMenuChild] = useState(1);
  const [titleHeader, setTitleHeader] = useState("");
  const [headerMenu, setHeaderMenu] = useState("");
  const [content, setContent] = useState(0);
  const [menuSidebar, setMenuSidebar] = useState([
    {
      id: 1,
      title: "Question 1",
      child: [],
      icon: menu1,
      iconActive: menu1,
      active: true,
    },
    {
      id: 2,
      title: "Question 2",
      child: [],
      icon: menu2,
      iconActive: menu2,
      active: false,
    }
  ]);

  const functionContent = () => {
    switch (stateMenu) {
      case 1:
        return <Quest1
            style={{
              height:'100%',
              overflowY: 'auto',
            }}
          data={{ content, setContent, setHeaderMenu, stateMenuChild }}
        />;
      case 2:
        return <Quest2
            style={{
              height:'100%',
              overflowY: 'auto',
            }}
          data={{ content, setContent, setHeaderMenu, stateMenuChild }}
        />;
      default:
        return;
    }
  };
  useEffect(() => {
    return null;
  }, [stateMenu, stateMenuChild]);
  return (
    <div className="dashboard" style={{height:'100%'}}>
      {/*<Header*/}
      {/*  data={{*/}
      {/*    stateMenu,*/}
      {/*    titleHeader,*/}
      {/*    setTitleHeader,*/}
      {/*    stateMenuChild,*/}
      {/*    setStateMenuChild,*/}
      {/*    headerMenu,*/}
      {/*    setHeaderMenu,*/}
      {/*    content,*/}
      {/*    setContent,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Row style={{height:'100%', backgroundColor:"whiteSmoke"}}>*/}
      <Row
          style={
            {
              height:'100%',
              // margin:'0px',
              backgroundColor:'rgba(86, 170, 238, 0.05)',
              overflowY: 'auto',
              // minHeight: `calc(100vh - 25px)`
            }
          }
      >
        <Sidebar
          data={{
            menuSidebar,
            setMenuSidebar,
            stateMenu,
            setStateMenu,
            stateMenuChild,
            setStateMenuChild,
            setTitleHeader,
            setHeaderMenu,
            setContent,
          }}
        />
        <Col md={18} className="fillContent" >
          {functionContent()}
          <div style={{
            textAlign:'center'
          }}>
            <Foot />
          </div>
        </Col>

      </Row>
    </div>
  );
};

export default Dashboard;
