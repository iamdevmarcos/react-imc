import styled from "styled-components";

export const Main = styled.div`
  padding-bottom: 50px;
`;

export const Header = styled.div`
  @media (max-width: 770px) {
    padding: 0 20px;
  }
`;

export const Area = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

export const Logo = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  gap: 80px;
  max-width: 900px;
  margin: auto;

  @media (max-width: 770px) {
    padding: 0 20px;
    flex-direction: column;
    gap: 0;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 770px) {
    margin-top: 50px;
  }
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  color: #ddd;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid rgba(150, 163, 171, 0.5);
  padding: 10px 2px;
  margin-bottom: 20px;
  font-size: 14px;
  background: transparent;
  color: #fff;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    border-bottom: 2px solid rgba(150, 163, 171, 1);
  }
`;

export const Button = styled.button`
  background: #000;
  color: #fff;
  font-size: 15px;
  border: 0;
  border-radius: 10px;
  padding: 15px 0;
  width: 100%;
  cursor: pointer;
  margin-top: 40px;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RightBig = styled.div`
  flex: 1;
  display: flex;
`;

export const RightArrow = styled.div`
  position: absolute;
  background: #000;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: -35px;
  margin-top: 145px;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 770px) {
    margin-left: 0;
    margin-top: 0;
    border-radius: 10px;
  }
`;

export const Image = styled.img``;
