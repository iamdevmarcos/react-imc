import { useState } from "react";
import * as C from "./App.styles";
import poweredImage from "./assets/powered.png";
import { GridItem } from "./components/GridItem";

import { levels } from "./data/levels";
import { Level } from "./types/Level";
import { calculateIMC } from "./utils/imc";

export default function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalcButton = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    } else {
      alert("Digite todos os campos!");
    }
  };

  return (
    <C.Main>
      <C.Header>
        <C.Area>
          <C.Logo src={poweredImage} alt="Logo" width="150" />
        </C.Area>
      </C.Header>
      <C.Container>
        <C.LeftSide>
          <C.Title>Calcule o seu IMC.</C.Title>
          <C.Description>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </C.Description>

          <C.Input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />

          <C.Input
            type="number"
            placeholder="Digite a seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <C.Button onClick={handleCalcButton}>Calcular</C.Button>
        </C.LeftSide>
        <C.RightSide>
          <>
            {!toShow && (
              <C.Grid>
                {levels.map((item, index) => (
                  <GridItem key={index} data={item} />
                ))}
              </C.Grid>
            )}
            {toShow && (
              <C.RightBig>
                <C.RightArrow></C.RightArrow>
                <GridItem data={toShow} />
              </C.RightBig>
            )}
          </>
        </C.RightSide>
      </C.Container>
    </C.Main>
  );
}
