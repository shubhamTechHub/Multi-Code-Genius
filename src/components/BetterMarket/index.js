import React from "react";
import Form from "../Form";
import {
  AppContainer,
  AppLogoContainer,
  ContentContainer,
  MainContainer,
} from "./StyledComponent";

const BetterMarket = () => {
  return (
    <AppContainer>
      <MainContainer>
        <AppLogoContainer>
          <img
            src="https://ui-practise.vercel.app/static/images/landingView/logo.png"
            alt="logo"
          />
          <h4>
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </h4>
        </AppLogoContainer>
        <ContentContainer>
          <h1>
            Let&apos;s get started <br /> with a few simple steps
          </h1>
          <Form />
          <div>
            <p>
              By signing up, you agree to our <span>Terms of Service</span>.
            </p>
            <p>
              Already have an account? <span className="log-in">Log in</span>
            </p>
          </div>
        </ContentContainer>
      </MainContainer>
    </AppContainer>
  );
};

export default BetterMarket;
