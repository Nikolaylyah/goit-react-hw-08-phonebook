import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/userOperations";
import { getIsLoggedIn } from "../../redux/user/userSelectors";
import { SFlexContainer } from "../Containers/Containers.styled";
import {
  HeaderMenuItem,
  HeaderMenuList,
  HeaderSection,
  LogoHeaderFirst,
  LogoHeaderSecond,
  NavLinkStyled,
} from "./Header.styled";

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <HeaderSection>
      <SFlexContainer size={20}>
        <LogoHeaderFirst>Phone</LogoHeaderFirst>
        <LogoHeaderSecond>book</LogoHeaderSecond>
        <div>
          <HeaderMenuList>
            {isLoggedIn ? (
              <>
                <HeaderMenuItem>
                  <NavLinkStyled to="/contacts">Phonebook</NavLinkStyled>
                </HeaderMenuItem>
                <HeaderMenuItem>
                  <NavLinkStyled to="/login" onClick={() => dispatch(logOut())}>
                    Logout
                  </NavLinkStyled>
                </HeaderMenuItem>
              </>
            ) : (
              <>
                <HeaderMenuItem>
                  <NavLinkStyled to="/login">Login</NavLinkStyled>
                </HeaderMenuItem>
                <HeaderMenuItem>
                  <NavLinkStyled to="/register">Register</NavLinkStyled>
                </HeaderMenuItem>
              </>
            )}
          </HeaderMenuList>
        </div>
      </SFlexContainer>
    </HeaderSection>
  );
}
