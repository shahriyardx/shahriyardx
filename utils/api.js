export const API_BASE =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000/api"
    : "https://shahriyar.dev/api";
