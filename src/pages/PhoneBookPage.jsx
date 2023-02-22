import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import Section from "../components/Section";
import { contactsOperations } from "../redux/contacts";

function PhoneBookPage() {
  const contactStatus = useSelector(state => state.phonebook.items.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactStatus === "idle") {
      dispatch(contactsOperations.getContacts());
    }
  }, [contactStatus, dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <h3>Find contacts by name</h3>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}

export default PhoneBookPage;
