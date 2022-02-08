import data from "../data/data.json";

export interface RespData {
  message: string;
}

export const fetchData = (delay: number = 3000) =>
  new Promise<RespData>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
