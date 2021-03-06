import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import styled from "styled-components";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
} from "../../assets/img-nearby";
import videoSrc from "../../assets/video/1.mp4";
import { data, data1, data2 } from "./data";
import Dropdown from "./Dropdown";

const Sections = styled.section`
  background-color: #fff;
  color: #000;
  margin: 0 60px 20px 60px;
  @media (max-width: 1200px) {
    margin: 0 0 20px 0;
  }
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #000;
    font-size: 13px;
    margin: 25px 0 15px 0;
    span {
      color: #000;
      font-size: 13px;
      border: 1px solid #d8d8d8;
      padding: 10px 14px 10px 14px;
      border-radius: 100px;
      margin: 0 10px 0 10px;
      float: right;
      cursor: pointer;
      &:hover {
        border: 1px solid #000;
      }
    }
    .subs {
      color: #717171;
    }
    input {
      border: none;
    }
  }
  .border1 {
    border-bottom: 1px solid rgb(222, 218, 218);
    margin-bottom: 59px;
    @media (max-width: 1200px) {
      visibility: hidden;
      width: 0;
      height: 0;
    }
  }
  .margin {
    margin: 50px 20px 90px 20px;
    .title {
      font-weight: 600;
      font-size: 35px;
      margin-bottom: 15px;
    }
    .subtitle {
      font-size: 25px;
      font-weight: 400;
      margin-top: 70px;
    }
    .right {
      float: right;
    }
  }
  .videos {
    display: flex;
    justify-content: space-evenly;
    margin-right: 80px;
    .title {
      margin: 120px 0 0 80px;
      font-size: 50px;
      font-weight: 700;
      @media (max-width: 991px) {
        font-size: 30px;
      }
      @media (max-width: 717px) {
        font-size: 15px;
      }
      @media (max-width: 475px) {
        visibility: hidden;
      }
    }
    .video {
      border-radius: 20px;
      @media (max-width: 717px) {
        width: 200px;
        height: 300px;
        border-radius: 20px;
        margin-bottom: 15px;
      }
    }
  }
  .underline {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 991px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 615px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 477px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .taball {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 991px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 615px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 477px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .tab1 {
    margin: 10px;
    border-radius: 15px;
  }
  .img1,
  .img2,
  .img3,
  .img4,
  .img5,
  .img6,
  .img7,
  .img8,
  .img9,
  .img10,
  .img11,
  .img12,
  .img13,
  .img14,
  .img15,
  .img16 {
    height: 304px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .img1 {
    background: url(${A});
    background-size: cover;
  }
  .img2 {
    background: url(${B});
    background-size: cover;
  }
  .img3 {
    background: url(${C});
    background-size: cover;
  }
  .img4 {
    background: url(${D});
    background-size: cover;
  }
  .img5 {
    background: url(${E});
    background-size: cover;
  }
  .img6 {
    background: url(${F});
    background-size: cover;
  }
  .img7 {
    background: url(${G});
    background-size: cover;
  }
  .img8 {
    background: url(${H});
    background-size: cover;
  }
  .img9 {
    background: url(${I});
    background-size: cover;
  }
  .img10 {
    background: url(${J});
    background-size: cover;
  }
  .img11 {
    background: url(${K});
    background-size: cover;
  }
  .img12 {
    background: url(${L});
    background-size: cover;
  }
  .img13 {
    background: url(${M});
    background-size: cover;
  }
  .img14 {
    background: url(${N});
    background-size: cover;
  }
  .img15 {
    background: url(${O});
    background-size: cover;
  }
  .city {
    font-size: 15px;
    font-weight: 600;
    .right {
      float: right;
    }
  }
  .distance {
    font-size: 15px;
    .right {
      float: right;
    }
  }
  .more {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    font-size: 15px;
    padding: 15px 25px 15px 25px;
    border-radius: 10px;
    margin: 50px 0 0 0;
    background-color: rgb(70, 69, 69);
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #000;
    }
  }
`;

function Section({ filter }) {
  const [dropdown, setDropdown] = useState("dropdown");
  const dropToggle = () => {
    setDropdown(dropdown === "dropdown" ? "dropdown active" : "dropdown");
  };
  return (
    <Sections>
      <div className="border1">
        <div className="input">
          <span>
            <Dropdown dropToggle={dropToggle} dropdown={dropdown} />
          </span>
          <span>
            ?????? <FaAngleDown />
          </span>
          <span>
            ?????? ?????? ?????? <FaAngleDown />
          </span>
          <span>
            ?????? <FaAngleDown />
          </span>
          <span>????????????</span>
          <span>??????????????????</span>
          <span>?????????</span>
          <span>?????????</span>
          <span>??????</span>
          <span>??????</span>
          <span>??????</span>
          <span>?????? ??? ????????????</span>
          <span onClick={filter}>
            <BiTransfer />
            ??????
          </span>
        </div>
      </div>
      <div className="videos">
        <div className="title">
          ????????????
          <br /> ??????????????? ??????
          <br /> ?????? ????????????
        </div>
        <div>
          <video className="video" autoPlay muted width="330px" height="440px">
            <source src={videoSrc} type="video/mp4"></source>
          </video>
          <div>
            <span>
              <span>???</span> 4.99 (181)
            </span>
            <br />
            <span>????????? ???????????? ???????????? ?????????</span>
            <br />
            <span>?????????: Helen</span>
          </div>
        </div>
      </div>
      <div className="margin">
        <div>?????? 162???</div>
        <br />
        <div className="title">??? ?????? ?????? ??????</div>
        <br />
        <div>
          ???????????? ?????? ?????????19 ?????? ?????? ?????? ????????? ???????????????.
          <span className="underline">????????? ????????????</span>
        </div>
        <br />
        <span>
          <span className="subtitle">?????? ?????? ?????? ?????? ??????</span>
          <span className="right">
            <span className="underline">??????(75???)</span>
          </span>
        </span>
        <div className="tabs">
          {data1.map((item) => (
            <div className="tab1" key={item.img}>
              <div className={item.img}></div>
              <div>
                <span className="city">{item.score}</span>
                <br />
                <span className="distance">{item.detail}</span>
                <br />
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <span>
          <div className="subtitle">????????? ???????????? ?????? ????????? ?????? ??????</div>
        </span>
        <div className="tabs">
          {data2.map((item) => (
            <div className="tab1" key={item.img}>
              <div className={item.img}></div>
              <div>
                <span className="city">{item.score}</span>
                <br />
                <span className="distance">{item.detail}</span>
                <br />
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <span>
          <div className="subtitle">?????? ??????</div>
        </span>
        <div className="taball">
          {data.map((item) => (
            <div key={item.img}>
              <div className="tab1">
                <div className={item.img}></div>
                <div>
                  <span className="city">{item.score}</span>
                  <br />
                  <span className="distance">{item.detail}</span>
                  <br />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="more">??? ??????</button>
      </div>
    </Sections>
  );
}

export default Section;
