import { Levels } from "const";

export type Quest = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string,
  type: string,
  level: Levels,
  peopleCount: number[],
  duration: number;
};
