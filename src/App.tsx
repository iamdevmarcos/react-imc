import * as C from "./App.styles";
import poweredImage from "./assets/powered.png";

export default function App() {
  return (
    <C.Main>
      <C.Header>
        <C.Area>
          <C.Logo src={poweredImage} alt="Logo" width="150" />
        </C.Area>
      </C.Header>
      <C.Container>
        <C.LeftSide>...</C.LeftSide>
        <C.RightSide>...</C.RightSide>
      </C.Container>
    </C.Main>
  );
}
