import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 35%;
  height: 70%;
  background-image: linear-gradient(to top, white 81%, white 1%, #eeebeb 18%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  @media (min-width: 320px) {
    width: 95%;
  }
  
  @media (min-width: 768px) {
    width: 35%;
  }

  @media (min-width: 992px) {
    width: 35%;
  }

  @media (min-width: 1200px) {
    width: 35%;
  }
`;

export const InputGroup = styled.div`
  font-family: "Segoe UI", sans-serif;
  max-width: 190px;
  position: relative;
`;
export const Input = styled.input`
  font-size: 100%;
  width: 465;
  height: 45;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
`;
export const Label = styled.label`
  font-size: 100%;
  position: absolute;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
`;
