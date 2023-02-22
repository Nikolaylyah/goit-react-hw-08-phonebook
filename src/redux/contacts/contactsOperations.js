import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContact,
  getAddContacts,
  getDataContacts,
} from "../../services/contactsApiService";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    const contacts = await getDataContacts();
    return contacts;
  },
);
export const createContacts = createAsyncThunk(
  "contacts/createContacts",
  async contact => {
    const contactCreate = await getAddContacts(contact);
    return contactCreate;
  },
);
// export const deleteContacts = createAsyncThunk(
//   "contacts/deleteContacts",
//   async contactId => {
//     const contactDelete = await deleteContact(contactId);
//     return contactDelete;
//   },
// );

export const deleteContacts = createAsyncThunk(
  "contacts/removeContact",
  async ({ id }, { rejectWithValue }) => {
    try {
      await deleteContact(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
