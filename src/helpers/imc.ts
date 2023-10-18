export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  // { title: "Muito abaixo do peso", color: "", icon: "down", imc: [0, 17] },
  { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.49] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.5, 24.99] },
  { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25, 29.99] },
  { title: "Obesidade", color: "#C3423F", icon: "down", imc: [30, 99] },
  // { title: "Obesidade II", color: "", icon: "down", imc: [35, 39.99] },
  // { title: "Obesidade III (Mórbida)", color: "", icon: "down", imc: [40, 99] },
];

export const calculateIMC = (weight: number, height: number) => {
  const imc = parseFloat((weight / (height * height)).toFixed(2));

  for (const i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      const levelCopy: Level = { ...levels[i] };
      levelCopy.yourImc = imc;
      return levelCopy;
    }
  }
  return null;
};
