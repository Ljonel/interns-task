import styled from "styled-components";

export const InternsContainer = styled.div`
  background-color: ${({ theme }) => theme.background.light};
  position: absolute;
  display: flex;
  max-width: 656px;
  flex-direction: column;
  align-items: flex-start;
  top: 136px;
  padding: 40px 80px 80px;
  h1 {
    color: ${({ theme }) => theme.color.dark};
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    width: 100%;
    text-align: left;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 900px) {
    top: 160px;
  }
  @media screen and (max-width: 656px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 40px 40px;
  }
`;

export const List = styled.div`
  position: static;
  width: 496px;
  top: 127px;

  .list-element {
    width: 100%;
    flex: 1;
    height: 64px;
    padding: 8px 24px;
    background-color: #ededed;
    display: flex;
    justify-content: space-between;
    flex-grow: 0;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    border: 2px solid #ededed;
    transition: all 0.1s;

    &:hover {
      background-color: ${({ theme }) => theme.background.light};
      border: 2px solid ${({ theme }) => theme.background.dark};
    }
    &:nth-child(even) {
      background-color: #f2f2f2;
      border: 2px solid #f2f2f2;

      &:hover {
        background-color: ${({ theme }) => theme.background.light};
        border: 2px solid ${({ theme }) => theme.background.dark};
      }
    }
  }
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.dark};
    transition: all 0.2s;
    &:hover {
      filter: invert(29%) sepia(38%) saturate(0%) hue-rotate(271deg)
        brightness(103%) contrast(93%);
    }
  }
  img {
    margin-right: 10px;
  }
  @media screen and (max-width: 656px) {
    width: 100%;
    min-width: 250px;
  }
`;
