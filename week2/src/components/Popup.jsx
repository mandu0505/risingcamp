import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineMail } from "react-icons/ai";

const Popups = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  padding: 25px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  background: #fff;
  visibility: hidden;
  transition: 0.3s;
  border-radius: 10px;
  &.active {
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
  }
  .header {
    border-bottom: 1px solid #d1cdcd;
    .close {
      width: 15px;
      font-size: 20px;
      border-radius: 100px;
      padding: 8px 28px 8px 15px;
      &:hover {
        background: #d1cdcd;
        cursor: pointer;
      }
    }
    .login {
      justify-content: center;
      text-align: center;
      align-items: center;
      margin: -30px 0 20px 0;
      font-weight: 600;
    }
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0 30px 0;
  }
  .border {
    border: 1px solid #8e8d8d;
    border-radius: 5px;
    .arrow {
      float: right;
      margin: -35px 20px 0 0;
    }
    .border1 {
      border-top: 1px solid #8e8d8d;
    }
    .details {
      font-size: 12px;
      margin: 10px 0 -10px 20px;
      color: #8e8d8d;
    }
    .detail {
      margin: 10px 0 10px 20px;
      color: #8e8d8d;
    }
  }
  .info {
    margin: 20px 0 0 0;
    font-size: 13px;
    .underline {
      text-decoration: underline;
      font-weight: 600;
    }
  }
  .button {
    text-align: center;
    color: #fff;
    background: #f42f56;
    padding: 10px 0 10px 0;
    margin: 15px 0 15px 0;
    border-radius: 10px;
    font-weight: 700;
  }
  .toggle {
    text-align: center;
    font-size: 16px;
    padding: 13px 0 13px 0;
    margin: 15px 0 0 0;
    border: 1px solid #8e8d8d;
    border-radius: 10px;
    .icon {
      float: left;
      margin-left: 10px;
    }
  }
  fieldset {
    border-color: #d1cdcd;
    border-width: 1px 0 0 0;
    legend {
      text-align: center;
    }
  }
`;

function Popup({ toggle, popup }) {
  return (
    <Popups className={popup}>
      <div className="header">
        <div className="close" onClick={toggle}>
          X
        </div>
        <div className="login">????????? ?????? ?????? ??????</div>
      </div>
      <div>
        <div>
          <div className="title">?????????????????? ?????? ?????? ???????????????.</div>
          <div className="border">
            <div>
              <div>
                <div className="details">??????/??????</div>
                <div className="detail">??????(+1)</div>
              </div>
              <div>
                <FaAngleDown className="arrow" />
              </div>
            </div>
            <div className="border1"></div>
            <div className="detail">????????????</div>
          </div>
          <div className="info">
            ????????? ????????? ??????????????? ?????????????????????. ?????? ?????? ????????? ?????? ???
            ????????? ????????? ???????????????.
            <br /> <span className="underline">???????????? ????????????</span>
          </div>
          <div className="button">??????</div>
        </div>
        <div>
          <fieldset>
            <legend>??????</legend>
          </fieldset>
          <div className="toggle">
            <BsFacebook className="icon" />
            ?????????????????? ???????????????
          </div>
          <div className="toggle">
            <FcGoogle className="icon" />
            ????????? ???????????????
          </div>
          <div className="toggle">
            <AiFillApple className="icon" />
            Apple ???????????? ????????????
          </div>
          <div className="toggle">
            <AiOutlineMail className="icon" />
            ???????????? ???????????????
          </div>
        </div>
      </div>
    </Popups>
  );
}

export default Popup;
