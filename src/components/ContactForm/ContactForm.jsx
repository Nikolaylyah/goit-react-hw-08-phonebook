import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix";
import { Form, FormLabel, Input } from "./ContactForm.styled";
import { contactsOperations } from "../../redux/contacts";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.items.contacts);
  // const contactStatus = useSelector(state => state.phonebook.items.status);
  const [form, setForm] = useState({
    name: "",
    number: "",
  });

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const { name, number } = form;

  const isUniqueContact = () => {
    const isExistContact = contacts.find(contact => contact.number === number);
    if (isExistContact) {
      Notify.failure("Contact with this number is already exist");
    }
    return !isExistContact;
  };
  const validateForm = () => {
    if (!name || !number) {
      Notify.failure("Some field is empty");
      return false;
    }
    return isUniqueContact(name);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const isValidateForm = validateForm();
    if (!isValidateForm) return;
    dispatch(
      contactsOperations.createContacts({ id: nanoid(10), name, number }),
      Notify.success("Contact is add phonebook"),
    );
    const resetForm = () => setForm({ name: "", number: "" });
    resetForm();
  };

  // useEffect(() => {
  //   if (contactStatus === "idle") {
  //     dispatch(contactsOperations.getContacts());
  //   }
  // }, [contactStatus, dispatch]);

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer..."
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <button type="submit">Add contact</button>
    </Form>
  );
}
export default ContactForm;

// ----------REDUX------------------------
// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   // onCheckUnique: PropTypes.func.isRequired,
// };

// export default ContactForm;
// const mapStateToProps = state => ({
//   contacts: state.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   onAddContact: contact => dispatch(handleAddContact(contact)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
