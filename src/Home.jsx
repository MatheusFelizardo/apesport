import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Background from './assets/img/backgrounds/home.png'
import Players from './assets/img/backgrounds/players.png'
import FootballIcon from './assets/img/icons/football.svg'
import BasketballIcon from './assets/img/icons/basketball.svg'
import BaseballIcon from './assets/img/icons/baseball.svg'
import EsportsIcon from './assets/img/icons/esports.svg'
import WarriorNFT from './assets/img/nfts/warrior.png'

const Home = () => {

  const cards = [
    {name: 'Gamming NFTs', icon: FootballIcon, description: 'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.'},
    {name: 'Bet to Earn', icon: BasketballIcon, description: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original.'},
    {name: 'Defi & Stake', icon: BaseballIcon, description: 'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.'},
    {name: 'Metaverse', icon: EsportsIcon, description: 'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.'},
  ]

  const ecosystemCard = [
    {tag: 'Bet to earn', title: 'Player Owned Economy', icon: WarriorNFT, description: `The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless`},
    {
      tag: null, 
      title: 'APES Token', 
      icon: WarriorNFT, 
      description: 
      (
      <div>
        <p>A unique and brand new token utility model tailored to the creation of a fairer and better gaming experience for players.</p>
        <p>The token is currently planned to have the following utility:</p>

        <ul>
          <li>Governance Voting</li>
          <li>In Game Earning Booster</li>
          <li>In Game NFT Collateral</li>
          <li>Secondary Services</li>
          <li>Tribe Staking</li>
        </ul>
      </div>
      )
      },
    {tag: 'METAVERSE', title: 'APESVERSE', icon: WarriorNFT, description: `The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless`},
  ]

  return (
    <Container>
      <Header />

      <Start>
        <div className="wrapper">
          <Shadow data-color="yellow" />
          <span>APE SPORTS</span>
          <h1>SPORT & E-SPORT <br/> Player Owned Economy.</h1>
          <p>Built on BinanceSide Chain. Incorporating Gaming, NFTs and DeFi together into exciting, diverse and rewarding opportunities.</p>

          <div className="buttons">
            <Button className="purple"><a href="/"><i/>Mint</a></Button>
            <Button><a href="/"><i/>Explore</a></Button>
          </div>
        </div>
        <div className="image">
          <img src={Players} alt="" />
        </div>

        <Cards>
          <Shadow data-color="purple" />
          <Shadow data-color="blue" />
          {cards.map(item => (
              <Card key={item.name}>
                <css-storm  />

                <div className="card-wrapper">
                  <div className="header">
                    <img src={item.icon} alt="" />
                    <span>{item.name}</span>
                  </div>

                  <div className="info">
                    <p>{item.description}.</p>
                  </div>
                </div>
              </Card>
          ))}
        </Cards>

      </Start>


      <Ecosystem>
        <div className="title">Our Ecosystem</div>

        <EcosystemCards>
          <Shadow data-color="yellow" />
          {ecosystemCard.map( (card) => (
            <EcosystemCard key={card.title}>
              <div className="img-wrapper">
                <img src={card.icon} alt="" />
              </div>

              <div className="content">
                <div className="tag">{card.tag}</div>
                <div className="card-title">{card.title}</div>
                <div className="description">{card.description}</div>
              </div>
            </EcosystemCard>
          ))}
         

        </EcosystemCards>
      </Ecosystem>

     

    </Container>
  )
}

export default Home

const Container = styled.div`
  background: #121221;
  min-height: 100vh;
  padding-top: 2rem;

`

const Start = styled.section`
  color: #FFFFFF;
  max-width: 80vw;
  margin: 0 auto;
  background: url(${Background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -70px;
  position: relative;
  opacity: 0;
  animation: fade 5s ease forwards; 


  @keyframes fade {
    to {
      opacity: 1;
    }
  }

  .wrapper {
    padding-top: 250px;
    padding-left: 100px;
    position: relative;
  }

  .image {
    padding-top: 122px;
    position: absolute;
    right: 0;
    top: 0;
  }
 

  span {
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    max-width: 680px;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    gap: 50px;
    padding-left: 60px;
  }

`

const Ecosystem = styled.section`
  .title {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 68px;
  }
`

const Button = styled.div`
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
  &.purple {
    background: #5951EA;
  }

  a {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;
    gap: 6px;
    padding: 8px 26px;
    width: 179px;
    font-weight: bold;
    position: relative;
    padding-top: 12px;
    color: white;

    &:after, &:before { 
      content:"";
      position: absolute;
      width: 25%;
      background: white;
      height: 4px;
      top: 0;
    }

    &:before {
      transform: skewX(50deg) translateX(-10%);
      left: 30%;
    }

    &:after {
      transform: skewX(-50deg) translateX(-10%);
      left: 50%;
    }

  

    i {
      &:after, &:before { 
        transition: all .2s linear;
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
      border:none;
      i {
        &:after, &:before { 
        background: #F2DF3A;
        backdrop-filter: none;
        z-index: 2;
      }
      }
    }
  }
`

const Shadow = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  
  &[data-color='yellow'] {
    box-shadow: 0 0 300px 120px rgba(254, 247, 41, 0.5);
    left: 0px;
    top: 50%;
  }

  &[data-color='purple'] {
    box-shadow: 0 0 200px 180px #62426A;
    right: 20%;
    top: 0;
  }

  &[data-color='blue'] {
    box-shadow: 0 0 200px 180px #142857;
    left: 30%;
    top: 0;
  }

`

const Cards = styled.section`
  display: flex;
  margin-top: 360px;
  padding-bottom: 100px;
  gap: 24px;
  position: relative;
`

const Card = styled.div`
  position: relative;
  cursor: pointer;
  
  &:hover {
    css-storm {
      &:before {
        background: linear-gradient(169deg, rgba(255, 255, 255, 0) 0%, rgba(254, 247, 41, 0.5) 100%);

      }
    }
  }

  css-storm {
    position: absolute;
    background: #1F1E38;

    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: 1;
    overflow:hidden;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(169deg, rgba(255, 255, 255, 0) 0%, #43425c 100%);
      transform-origin: bottom right;
      animation: thunder 3s linear infinite;
      top: -50%;
      left: -50%;
    }

    @keyframes thunder {
      0% {
        transform: rotate(0deg);

      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  .card-wrapper {
    background: #1F1E38;
    z-index: 2;
    position: relative;
    inset: 2px;
  }

  .header {
    display: flex;
    align-items: center;
    min-height: 124px;
    img {
    }

    span {
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;
    }
  }

  .info {
    padding: 0 20px 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }
`

const EcosystemCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 80px;
  position: relative;

  [data-color="yellow"] {
    left: initial;
    right: 0;
    box-shadow: 0 0 600px 320px rgb(254,247,41,.3);
  }
`

const EcosystemCard = styled.div`
  display: flex;
  gap: 142px;
  margin: 0 auto;
  max-width: 60vw;
  align-items: center;
  justify-content: space-between;

  &:nth-child(odd) {
    flex-direction: row-reverse;

    img {
      transform: translateX(-142px);
    }
  }

  .img-wrapper {
    width: 440px;

    img {
    }
  }

  .content {
    width: calc(100% - 440px - 142px);
  }

  .tag {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #F2DF3A;
  }

  .card-title {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #FFFFFF;
  }

  .description {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
    max-width: 75%;
    margin-top: 10px;

    p {
      margin-bottom: 20px;
    }

    ul {
      padding-left: 20px;
    }
  }
`