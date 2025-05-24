import { ChromaClient, Collection } from "chromadb";
import * as dotenv from "dotenv";
dotenv.config();

export class ChromaDbProvider {
  private _client: ChromaClient;
  constructor() {
    this._client = new ChromaClient({
      path: process.env.CHROMA_DB_PATH,
    });
  }

  get client() {
    return this._client;
  }

  async createCollection(name: string) {
    const collection = await this._client.createCollection({name});
    return collection;
  }
}