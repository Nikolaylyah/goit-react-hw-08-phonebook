import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { contactsOperations } from ".";
import { logOut } from "../user/userOperations";

const contactsItemsSlice = createSlice({
  name: "items",
  initialState: {
    contacts: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(contactsOperations.getContacts.pending, state => ({
        ...state,
        status: "pending",
      }))
      .addCase(contactsOperations.getContacts.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        contacts: [...action.payload],
      }))
      .addCase(contactsOperations.getContacts.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }))
      .addCase(contactsOperations.createContacts.pending, state => ({
        ...state,
        status: "pending",
      }))
      .addCase(
        contactsOperations.createContacts.fulfilled,
        (state, action) => ({
          ...state,
          status: "succeeded",
          contacts: [...state.contacts, action.payload],
        }),
      )
      .addCase(contactsOperations.createContacts.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }))
      .addCase(contactsOperations.deleteContacts.pending, state => ({
        ...state,
        status: "pending",
      }))
      .addCase(
        contactsOperations.deleteContacts.fulfilled,
        (state, action) => ({
          ...state,
          status: "succeeded",
          contacts: [
            ...state.contacts.filter(contact => contact.id !== action.payload),
          ],
        }),
      )
      .addCase(contactsOperations.deleteContacts.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }))
      .addCase(logOut.fulfilled, state => ({
        ...state,
        status: "idle",
        contacts: [],
      }));
  },
});

const contactsFilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContact: (_, action) => action.payload,
  },
});

export const { filterContact } = contactsFilterSlice.actions;

const contactsReducer = combineReducers({
  [contactsItemsSlice.name]: contactsItemsSlice.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});
export default contactsReducer;
