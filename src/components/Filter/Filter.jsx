import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ContactForm/ContactForm.styled";
import { filterContact } from "../../redux/contacts/contactsSlice";

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.phonebook.filter);

  return (
    <Input
      type="text"
      name="filter"
      value={filterValue}
      onChange={e => dispatch(filterContact(e.target.value))}
      placeholder="Enter name for Search"
    />
  );
}

export default Filter;
