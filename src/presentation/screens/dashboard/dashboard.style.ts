import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    max-height: 85%;
    z-index: -2;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 26rem;
  height: 18rem;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 25rem;
    height: 15rem;
  }
  @media (max-width: 992px) {
    width: 20rem;
    height: 15rem;
  }
  @media (max-width: 768px) {
    width: 18rem;
    height: 14rem;
  }
  @media (min-width: 320px) and (max-width: 420px) {
    width: 15rem;
    height: 12rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.6);
  z-index: 1;
`;

export const Paragraph = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: black;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 30px;

  }
`;

