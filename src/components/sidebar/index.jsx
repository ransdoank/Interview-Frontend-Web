import { Col, Menu } from "antd";
import React from "react";
import './index.scss';
import Logos from "../../assets/logo/logo.svg";
// import Logos from "../../assets/icon/search.svg";

const { SubMenu } = Menu;

const Sidebar = (props) => {
  const {
    setTitleHeader,
    menuSidebar,
    setMenuSidebar,
    stateMenu,
    setStateMenu,
    setStateMenuChild,
    setHeaderMenu,
    setContent,
  } = props.data;

  const onClickMenu = (item) => {
    setContent(0);
    setHeaderMenu("");
    if (item.id === 2) {
      setStateMenuChild(1);
    } else if (item.id === 3) {
      setStateMenuChild(4);
    }
    setTitleHeader(item.title);
    const x = document.querySelectorAll(".active");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
    const add = document.getElementById(item.id);
    add.classList.add("active");
    setStateMenu(item.id);

    const elementsIndex = menuSidebar.findIndex(
      (element) => element.id === item.id
    );
    let newArray = [];

    menuSidebar.map((k) => {
      return newArray.push({ ...k, active: false });
    });

    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      active: !newArray[elementsIndex].active,
    };
    setMenuSidebar(newArray);
  };

  const onClickMenuChild = (item) => {
    setHeaderMenu("");
    setContent(0);
    const x = document.querySelectorAll(".childMenu > .activeChild");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("activeChild");
    }
    const add = document.querySelector(`.${item.key}`);
    add.classList.add("activeChild");
    setStateMenuChild(item.id);
  };
  return (
    <Col md={6} sm={6} className="sidebarCol">
      <Col className='header-logo'>
        {/*<img src={Logo} alt='logo' />*/}
        {/*<div className='col-md-12 col-lg-12 px-lg-12 text-center'>*/}
          <img src={Logos} alt='logo' className='mb-3 mt-3' />
          {/* <h5 className='title mb-0 text-center' style={{'fontStyle': 'italic', 'color': 'whitesmoke'}}><u>APP</u></h5> */}
          {/* <h6 className='sub-title text-center' style={{'fontStyle': 'italic', 'color': 'whitesmoke'}}>APP - Admin</h6> */}
        {/*</div>*/}
      </Col>
      <div className="side">
        {menuSidebar.map((item, index) => {
          if (item.active) {
            return (
              <div
                // className={`menu ${item.active ? "active" : ""}`}
                className={`menu`}
                // id={item.id}

                key={index}
              >
                <div
                  className={`parent ${item.active ? "active" : ""}`}
                  id={item.id}
                  onClick={() => onClickMenu(item)}
                >
                  <img src={item.iconActive} alt="" />
                  <div>{item.title}</div>
                </div>
                <div
                  className={`childMenu`}
                  style={stateMenu !== item.id ? { display: "none" } : {}}
                >
                  {item.child.map((i, x) => (
                    <p
                      key={`x${x}`}
                      className={`${i.key} ${i.active ? "activeChild" : ""}`}
                      onClick={() => onClickMenuChild(i)}
                    >
                      {i.name}
                    </p>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div
                // className={`menu ${item.active ? "active" : ""}`}
                className={`menu`}
                // id={item.id}
                onClick={() => onClickMenu(item)}
                key={index}
              >
                <div
                  className={`parent ${item.active ? "active" : ""}`}
                  id={item.id}
                >
                  <img src={item.icon} alt="" />
                  <div>{item.title}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </Col>
  );
};

export default Sidebar;
