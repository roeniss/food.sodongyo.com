export const getAppName = () =>
  process.env.NODE_ENV === "development" ? "localhost" : "food.sodongyo.com";
