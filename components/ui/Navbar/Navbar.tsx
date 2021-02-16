import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { RiUser3Line, RiShoppingCartLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { LayoutContext } from "../../../lib/contexts/layoutContext";
import Logo from "../../icons/Logo";

const Wrapper = styled.div`
  padding: 1rem;
  background: hsl(212, 0%, 4%);
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavStart = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  padding-right: 2rem;
  cursor: pointer;
`;

const NavEnd = styled.ul`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  const { setSidebar, navbar } = useContext(LayoutContext);
  return navbar ? (
    <Wrapper>
      <Nav>
        <NavStart>
          <NavItem>
            <HiMenu size={24} onClick={() => setSidebar(true)} />
          </NavItem>
          <NavItem>
            <Link href="/">
              <a>
                <Logo scale={0.7} color="#ffffff" />
              </a>
            </Link>
          </NavItem>
        </NavStart>

        <NavEnd>
          <NavItem>
            <Link href="/account/login">
              <NavLink>
                <RiUser3Line size={24} />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/favorite">
              <NavLink>
                <MdFavoriteBorder size={24} />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/cart">
              <NavLink>
                <RiShoppingCartLine size={24} />
              </NavLink>
            </Link>
          </NavItem>
        </NavEnd>
      </Nav>
    </Wrapper>
  ) : null;
};

export default Navbar;
