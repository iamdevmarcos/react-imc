import { useState } from "react";

import { GlobalStyles } from "./styles/GlobalStyles";
import * as C from "./App.styles";

import leftArrowImage from "./assets/leftarrow.png";

import { levels } from "./data/levels";
import { Level } from "./types/Level";
import { calculateIMC } from "./utils/imc";

import { GridItem } from "./components/GridItem";

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

  const handleBackButton = () => {
    setToShow(null);
    setWeightField(0);
    setHeightField(0);
  };

  return (
    <C.Main>
      <GlobalStyles />

      <C.Header>
        <C.Area>
          <C.Logo href="https://marcosdev.me/">marcosdev.me</C.Logo>
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
            disabled={toShow ? true : false}
          />

          <C.Input
            type="number"
            placeholder="Digite a seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <C.Button onClick={handleCalcButton} disabled={toShow ? true : false}>
            Calcular
          </C.Button>
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
                <C.RightArrow onClick={handleBackButton}>
                  <C.Image src={leftArrowImage} alt="" width={25} />
                </C.RightArrow>
                <GridItem data={toShow} />
              </C.RightBig>
            )}
          </>
        </C.RightSide>
      </C.Container>
    </C.Main>
  );
}
