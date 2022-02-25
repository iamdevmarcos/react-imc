import { levels } from "../data/levels";

export const calculateIMC = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = parseFloat(imc.toFixed(2));
      return levels[i];
    }
  }

  return null;
};
