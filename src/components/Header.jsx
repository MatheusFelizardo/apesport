import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <Container>
      <css-shape-left />
      <css-shape-right><div /></css-shape-right>

      <Wrapper>
        <img src={Logo} alt="Logo" />


        <ul>
          <li><a className="menu-item" href="/">APES Farmer</a></li>
          <li><a className="menu-item" href="/">NFT Marketplace</a></li>
          <li><a className="menu-item" href="/">New & Media</a></li>
          <li><a className="menu-item" href="/">Roadmap</a></li>
          <li><a className="menu-item" href="/">Governance</a></li>
        </ul>

        <ul>
          <li className="circle-btn"><a href="/">BUY APES <span>$10.00</span></a></li>
          <li className="circle-btn"><a href="/">English</a></li>
          <li className="square-btn"><a href="/">GO TO APP <i /></a></li>
        </ul>
      </Wrapper>

    </Container>
  )
}

export default Header

const Container = styled.nav`
  
  max-width: 80vw;
  margin: 0 auto;
  background: #2D2B54;
  position: relative;
  transform: translateX(-10px);
  img {
    margin-right: 95px;
    transform: translateY(-4px);
  }
  &:before {
    content: '';
    height: 80%;
    position: absolute;
    background: #2D2B54;
    bottom: 0;
    width: 15px;
    transform: skewX(20deg);
    left: 0;
  }

  &:after {
    content: '';
    height: 84%;
    position: absolute;
    background: #2D2B54;
    bottom: 0px;
    width: 38px;
    right: -17px;
    transform: skewX(10deg);
  }

  css-shape-left {

   
    &:after, &:before {
      content: '';
      position: absolute;
      background: white;
      z-index: 2;
    }

    &:before {
      height: 70%;
      bottom: 0;
      width: 15px;
      transform: skewX(20deg);
      left: -12px;
    }

    &:after {
      height: 30%;
      top: 0;
      width: 16px;
      transform: skewX(-40deg);
      left: -12px;
    }
  }

  css-shape-right {
    > div {
      &:after {
        content: '';
        position: absolute;
        background: white;
        bottom: 0;
        transform: skewX(-40deg);
        width: 12px;
        right: -24px;
        height: 22%;
        z-index: 2;

      }

      &:before {
        content: '';
        position: absolute;
        background: white;
        height: 80%;
        bottom: 20%;
        width: 10px;
        transform: skewX(17deg);
        right: -18px;
        z-index: 2;
      }
    }


    &:after, &:before {
      content: '';
      position: absolute;
      background: white;
      z-index: 2;
    }

    &:before {
      height: 20%;
      bottom: 0;
      width: 15px;
      transform: skewX(-43deg);
      right: -31px;
    }

    &:after {
      height: 80%;
      top: 0;
      width: 10px;
      transform: skewX(23deg);
      right: -23px;
    }
  }
`

const Wrapper = styled.div `
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    gap: 59px;
    margin-right: 68px;
    align-items: center;
    &:last-of-type {
      gap: 36px;
    }
    li {
      a {
        color: white;
        font-family: 'Oxanium';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 42px;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.06em;

        &.menu-item {
            position: relative;
            &:before {
              content: '';
              position: absolute;
              bottom: 5px;
              width: 100%;
              max-width: 0;
              height: 2px;
              background: #F2DF3A;
              transition: all .3s;
            }

            &:hover {
              &:before {
                max-width: 100%;
              }
            }
          }
      }

      &.circle-btn {
        background: #161527;
        border: 0.3px solid #FFFFFF;
        border-radius: 21.1795px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: all .2s;

        &:hover {
          border: 0.3px solid #F2DF3A;

        }

        a {
          font-size: 10px;
          line-height: 10px;
          gap: 6px;
          padding: 8px 16px;

          span {
            color: #F2DF3A;
          }
        }
      }

      &.square-btn {
        background: #161527;
        border: 0.3px solid #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        backdrop-filter: blur(10px);
        position: relative;
        overflow: hidden;
        border-bottom: 4px solid #F2DF3A;
        transition: all .2s;

        a {
          font-size: 14px;
          line-height: 10px;
          letter-spacing: -0.02em;
          gap: 6px;
          padding: 12px 52px;
          font-weight: bold;
          position: relative;
          padding-top: 16px;
          &:after, &:before { 
            content:"";
            position: absolute;
            width: 25%;
            background: white;
            height: 4px;
            top: 0;
          }

          &:after {
            transform: skewX(-50deg) translateX(-10%);
            left: 50%;
          }

          &:before {
            transform: skewX(50deg) translateX(-10%);
          }

          i {
            &:after, &:before { 
              transition: all .8s linear;
              content:"";
              position: absolute;
              width: 100%;
              background: rgba(255, 255, 255, 0.1);
              opacity: 0.5;
              backdrop-filter: blur(10px);
              height: 20px;
              top: 0;
            }

            &:after {
              left: -45%;
              transform: rotate(50deg);
            }

            &:before {
              right: -45%;
              transform: rotate(-50deg);
            }
          }

        }

        &:hover {
        backdrop-filter:none;

          a {
            i {
              &:after, &:before { 
              background: #F2DF3A;
              backdrop-filter: none;
              z-index: 2;
            }
            }
          }
        }
      }
    }
  }
`