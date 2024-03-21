import styled from "styled-components";

export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  label {
    color: var(--color-black);
    font-size: 1.1rem;
    font-weight: 500;
  }
  input {
    line-height: 24px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid !important;
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 18px;
  margin-top: 20px;
  padding: 15px 0;
  background: var(--color-green);
  color: var(--color-white);
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    padding: 18px 0;
    border-radius: 20px;
  }
`;
