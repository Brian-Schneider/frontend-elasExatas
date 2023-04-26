import axios from "axios";

export const api = axios.create({
  baseURL: "https://elasexatas.onrender.com",
});

export const cadastrarUsuario = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data.token);
};

export const getAll = async (url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers);
  setDados(resposta.data);
};

export const getId = async (url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers);
  setDados(resposta.data);
};

export const post = async (
  url: any,
  dados: any,
  setDados: any,
  headers: any
) => {
  const resposta = await api.post(url, dados, headers);
  setDados(resposta.data);
};

export const put = async (
  url: any,
  dados: any,
  setDados: any,
  headers: any
) => {
  const resposta = await api.put(url, dados, headers);
  setDados(resposta.data);
};
