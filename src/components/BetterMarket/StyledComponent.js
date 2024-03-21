import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-image: url("https://ui-practise.vercel.app/static/images/landingView/Background.png");
  background-size: cover;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 50px;
  width: 90%;
  max-width: 1140px;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const AppLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background: var(--bg-color-green);
  width: 100%;
  img {
    width: 172px;
    height: 93px;
    margin-bottom: 25px;
  }
  h4 {
    color: var(--color-yellow);
    font-size: 1rem;
    font-weight: 500;
    line-height: 30px;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
    padding: 33px 51px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 50px;
    h4 {
      font-size: 2.4rem;
      line-height: 45px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 32px;
  gap: 30px;
  h1 {
    color: rgb(35, 35, 35);
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    color: rgb(189, 189, 189);
    font-family: "Mulish";
    font-size: 14px;
    font-weight: 600;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }
  .log-in {
    color: rgb(25, 176, 126);
  }
  @media screen and (min-width: 992px) {
    gap: 90px;
    padding: 55px 52px;
    h1 {
      font-size: 2.4rem;
    }
  }
`;
