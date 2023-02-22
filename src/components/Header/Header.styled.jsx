// import { NavLink } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderMenuList = styled.ul`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
export const LogoHeaderFirst = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: blue;
`;
export const LogoHeaderSecond = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: yellow;
`;
export const HeaderMenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  color: ${({ theme }) => theme.textSecondary};

  &.active {
    color: ${({ theme }) => theme.primary};
    font-size: 32px;
  }
`;
export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textSecondary};
`;
export const LogoHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;
