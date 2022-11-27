import axios from "axios";
import { env as serverEnv } from "env/server.mjs";
import { env as clientEnv } from "env/client.mjs";

export const api = axios.create({
  baseURL: clientEnv.NEXT_PUBLIC_STRAPI_BASE,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${serverEnv.STRAPI_TOKEN}`,
  },
});
