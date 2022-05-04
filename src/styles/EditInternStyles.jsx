import styled from "styled-components";

export const EditContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    left: calc(50% - 112px / 2 - 272px);
    position: absolute;
    min-width: 112px;
    height: 48px;
    top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.dark};
    font-family: "roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.2s;
    &:hover {
      color: #555555;
      filter: invert(29%) sepia(38%) saturate(0%) hue-rotate(271deg)
        brightness(103%) contrast(93%);
    }
    img {
      margin-right: 12px;
    }
  }
  @media screen and (max-width: 900px) {
    a {
      top: 160px;
    }
  }
  @media screen and (max-width: 740px) {
    a {
      left: 40px;
    }
  }
`;
export const EditInternsContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 656px;
  min-height: 300px;
  height: 575px;
  max-height: 639px;
  padding: 40px 80px;
  background-color: ${({ theme }) => theme.background.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 136px;
  text-align: left;
  h1 {
    color: ${({ theme }) => theme.color.dark};
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
  }
  @media screen and (max-width: 900px) {
    top: 246px;
  }
  @media screen and (max-width: 575px) {
    padding: 20px 40px;
    height: 100%;
  }
`;
export const Form = styled.form`
  min-width: 250px;
  max-width: 496px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 27px;

  input {
    padding: 0px 0px 0px 16px;
    background: none;
    border: 1px solid ${({ theme }) => theme.background.dark};
    &:focus {
      background-color: ${({ theme }) => theme.background.light};
      border: 2px solid ${({ theme }) => theme.background.dark};
      outline: none;
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.outline};
    }
  }
  input[type="text"] {
    width: 100%;
    min-height: 48px;
    font-style: normal;
    color: ${({ theme }) => theme.color.dark};
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  input[type="date"] {
    width: 100%;
    height: 48px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    font-family: "Roboto";
    font-style: normal;
    text-transform: uppercase;
    color: #555555;

    /* position: relative; */
  }
  input[type="date"]:focus {
    color: #222222;
  }
  .form-element input[type="text"].error {
    background-color: #f7f7f7;
  }
  .form-element-date input[type="date"].error {
    color: #222222;
    background-color: #f7f7f7;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    background: transparent;
    z-index: 999;
    width: 28px;
    height: 28px;
  }
  button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.background.dark};
    width: 224px;
    height: 48px;
    color: #fff;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.1s;
    &:hover {
      background-color: #555555;
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.outline};
    }
  }
  .error {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.error};
  }
  input[type="date"] .error button {
    margin-top: 40px;
  }
  .form-element {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 112px;
    justify-content: space-between;
    position: relative;
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: ${({ theme }) => theme.color.dark};
    }
  }

  .date {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 575px) {
      width: 100%;
      height: 220px;
      flex-direction: column;
      max-height: 200px;
    }
  }
  .form-element-date {
    width: 240px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;

    .date-icon-error {
      top: 41px;
      right: 54px;
      @media screen and (max-width: 575px) {
        top: 36px;
      }
    }
    @media screen and (max-width: 575px) {
      width: 100%;
    }
  }

  .datepicker-icon {
    right: 0;
    top: 29px;
    position: absolute;
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.background.dark};
    @media screen and (max-width: 575px) {
      top: 25px;
    }
  }

  @media screen and (max-width: 575px) {
    align-items: center;
  }
`;
export const ErrorText = styled.span`
  height: 24px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.error};
  position: static;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
export const ErrorIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 12px;
  top: 40px;
`;
