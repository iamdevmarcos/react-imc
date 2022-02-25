import { Level } from "../../types/Level";
import * as C from "./styles";

type Props = {
  data: Level;
};

export const GridItem = ({ data }: Props) => {
  return (
    <C.Container>
      <h1>{data.title}</h1>
    </C.Container>
  );
};
