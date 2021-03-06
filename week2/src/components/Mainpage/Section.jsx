import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { b, c, d, e, f, g, h } from "../../assets/img";

const Sections = styled.section`
  background-color: #fff;
  color: #000;
  padding: 30px 5% 20px 5%;
  .title {
    display: flex;
    font-size: 48px;
    margin: 60px 0 30px 15px;
    font-weight: 600;
    @media (max-width: 991px) {
      font-size: 36px;
    }
    @media (max-width: 481px) {
      font-size: 24px;
    }
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 400px;
    @media (max-width: 680px) {
      grid-template-columns: repeat(2, 1fr);
      height: 800px;
    }
    @media (max-width: 340px) {
      grid-template-columns: repeat(1, 1fr);
      height: 1600px;
    }
    @media (max-width: 443px) {
    }
    .city {
      padding-left: 20px;
      font-size: 35px;
      font-weight: 600;
      color: #fff;
      @media (max-width: 991px) {
        font-size: 25px;
      }
      @media (max-width: 443px) {
        font-size: 20px;
      }
    }
    .distance {
      padding: 20px;
      font-size: 20px;
      color: #fff;
      @media (max-width: 991px) {
        font-size: 15px;
      }
      @media (max-width: 443px) {
        font-size: 10px;
      }
    }
    .tab1,
    .tab2,
    .tab3,
    .tab4 {
      margin: 10px;
      border-radius: 15px;
    }
    .tab1 {
      background: #de3151;
    }
    .tab2 {
      background: #d93b30;
    }
    .tab3 {
      background: #bc1a6e;
    }
    .tab4 {
      background: #cc2d4a;
    }
    .img1,
    .img2,
    .img3,
    .img4 {
      height: 50%;
      border-radius: 15px;
      margin-bottom: 20px;
    }
    .img1 {
      background: url(${e});
      background-size: cover;
    }
    .img2 {
      background: url(${f});
      background-size: cover;
    }
    .img3 {
      background: url(${g});
      background-size: cover;
    }
    .img4 {
      background: url(${h});
      background-size: cover;
    }
  }
  .experience {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 800px;
    color: #ffffff;
    .tab1,
    .tab2 {
      margin: 10px;
    }
    .subtitle {
      font-size: 35px;
      font-weight: 600;
    }
    .button {
      border: none;
      background-color: #fff;
      color: #000;
      border-radius: 10px;
      font-size: 18px;
      padding: 14px 32px 14px 32px;
      text-decoration: none;
      float: left;
      margin-top: 20px;
      cursor: pointer;
      &:hover {
        background-color: rgb(211, 210, 210);
      }
      @media (max-width: 436px) {
        font-size: 14px;
        padding: 10px 25px 10px 25px;
      }
    }
  }
  .image1 {
    background: url(${b});
    background-size: cover;
  }
  .image2 {
    background: url(${c});
    background-size: cover;
  }
  .image1,
  .image2 {
    border-radius: 15px;
    height: 100%;
    width: 100%;
    padding: 50px;
    @media (max-width: 991px) {
      height: 80%;
    }
  }
  .image3 {
    background: url(${d});
    background-size: cover;
    border-radius: 15px;
    height: 630px;
    margin: 70px 10px 50px 10px;
    color: #fff;
    padding: 20px;
    .title {
      font-size: 80px;
      font-weight: 800;
      margin-left: 60px;
      @media (max-width: 991px) {
        font-size: 60px;
      }
      @media (max-width: 443px) {
        font-size: 40px;
      }
      @media (max-width: 231px) {
        position: fixed;
      }
    }
    .button {
      border: none;
      background-color: #fff;
      color: #000;
      border-radius: 10px;
      font-size: 18px;
      padding: 14px 32px 14px 32px;
      cursor: pointer;
      margin: 110px 0 0 60px;
      &:hover {
        background-color: rgb(211, 210, 210);
      }
      @media (max-width: 443px) {
        font-size: 10px;
        padding: 7px 16px 7px 16px;
        position: sticky;
      }
    }
  }
`;

function Section() {
  return (
    <Sections>
      <div className="margin">
        <div>
          <span className="title">????????? ?????? ????????? ?????? ????????????</span>
        </div>
        <div className="tabs">
          <div className="tab1">
            <div className="img1"></div>
            <div>
              <span className="city">?????????</span>
              <br />
              <span className="distance">455km ??????</span>
            </div>
          </div>
          <div className="tab2">
            <div className="img2"></div>
            <div>
              <span className="city">??????</span>
              <br />
              <span className="distance">324km ??????</span>
            </div>
          </div>
          <div className="tab3">
            <div className="img3"></div>
            <div>
              <span className="city">?????????</span>
              <br />
              <span className="distance">166km ??????</span>
            </div>
          </div>
          <div className="tab4">
            <div className="img4"></div>
            <div>
              <span className="city">?????????</span>
              <br />
              <span className="distance">157km ??????</span>
            </div>
          </div>
        </div>
      </div>
      <div className="margin">
        <div>
          <span className="title">??????????????? ?????? ????????????</span>
        </div>
        <div className="experience">
          <div className="tab1">
            <div className="image1">
              <span className="subtitle">
                ?????? ??? ?????????
                <br /> ???????????? ?????? ??????
                <br />
              </span>
              <Link to="/experience" className="button">
                ??????
              </Link>
            </div>
          </div>
          <div className="tab2">
            <div className="image2">
              <span className="subtitle">
                ????????? ?????????
                <br /> ????????? ?????? ??????
                <br />
              </span>
              <button className="button">????????? ??????</button>
            </div>
          </div>
        </div>
      </div>
      <div className="margin">
        <div className="image3">
          <span className="title">
            ???????????? ??????
            <br /> ???????????? ??????
            <br /> ??????????
          </span>
          <button className="button">????????????????????? ???????????????</button>
        </div>
      </div>
    </Sections>
  );
}

export default Section;
