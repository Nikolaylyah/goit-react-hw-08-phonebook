import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const tokenKey = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// Authorization

export const signUpUser = async body => {
  const { data } = await axios.post("users/signup", body);
  tokenKey.set(data.token);
  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post("users/login", body);
  tokenKey.set(data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post("/users/logout");
  tokenKey.unset();
  return data;
};

export const refreshCurrenthUser = async persistedToken => {
  if (!persistedToken) {
    throw Error("user");
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return error;
  }
};

// Contacts

export const getDataContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

export const getAddContacts = async newContact => {
  const { data } = await axios.post("/contacts", newContact);
  return data;
};
export const deleteContact = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
};
