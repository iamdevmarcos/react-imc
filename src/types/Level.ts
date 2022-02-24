export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};
