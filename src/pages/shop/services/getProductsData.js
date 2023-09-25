import axios from "axios";

export const getProductsData = async (data) => {
  const resp = axios("https://fakestoreapi.com/products");

  return resp;
};
