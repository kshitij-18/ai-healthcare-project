import path from "path";
import { extractPdfText } from "./utils/extractPdfText";

const main = async () => {
    const filePath = `${process.env.ASSETS_BASE_PATH}symptom-check-1.pdf`;
    const texts = await extractPdfText(filePath);
    console.log("Extracted texts:", texts.length);
}

main();