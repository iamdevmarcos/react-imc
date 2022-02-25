import styled from "styled-components";

export const Container = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
  flex: 1;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img``;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Info = styled.div`
  font-size: 12px;
  margin-top: 14px;
`;

export const YourImc = styled.div`
  font-size: 17px;
  margin: 10px 0 50px 0;
`;
