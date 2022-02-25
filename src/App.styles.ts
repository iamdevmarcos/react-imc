import styled from "styled-components";

export const Main = styled.div``;
export const Header = styled.div``;

export const Area = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

export const Logo = styled.img``;

export const Container = styled.div`
  display: flex;
  gap: 80px;
  max-width: 900px;
  margin: auto;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  color: #3a4b5c;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  color: #6a7d8b;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid rgba(150, 163, 171, 0.5);
  padding: 10px 2px;
  margin-bottom: 20px;
  font-size: 14px;

  &:focus {
    border-bottom: 2px solid rgba(150, 163, 171, 1);
  }
`;

export const Button = styled.button`
  background: #227c9d;
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
`;
