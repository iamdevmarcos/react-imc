import { Level } from "../../types/Level";
import * as C from "./styles";

import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  data: Level;
};

export const GridItem = ({ data }: Props) => {
  return (
    <C.Container bgColor={data.color}>
      <C.Icon>
        <C.Image
          src={data.icon === "up" ? upImage : downImage}
          alt=""
          width="30"
        />
      </C.Icon>
      <C.Title>{data.title}</C.Title>
      <C.Info>
        <>
          IMC está entre <strong>{data.imc[0]}</strong> e{" "}
          <strong>{data.imc[1]}</strong>
        </>
      </C.Info>
    </C.Container>
  );
};
