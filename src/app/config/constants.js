export const server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:300/api/"
    : "http.example.com";
