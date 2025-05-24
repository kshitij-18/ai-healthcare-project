import { ChromaDbProvider } from "../client/ChromaDbProvider";
import fs from "node:fs/promises";
import pdf from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const extractPdfText = async (filePath: string) => {
  const buffer = await fs.readFile(filePath);
  const data = await pdf(buffer);
  const textualData = data.text;

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 0,
  });

  const texts = await textSplitter.splitText(textualData);
  return texts;
};
