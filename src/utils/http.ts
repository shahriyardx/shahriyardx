import { env as clientEnv } from "env/client.mjs";
import { env as serverEnv } from "env/server.mjs";

export const api = async (url: string) => {
  const response = await fetch(`${clientEnv.NEXT_PUBLIC_STRAPI_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${serverEnv.STRAPI_TOKEN}`,
    },
  });

  return await response.json();
};
