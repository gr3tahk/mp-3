import { Link } from "react-router";
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: #1282A2;
    width: 30%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const NavList = styled.ul`
    padding-left: 0;
    list-style: none;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: row;
        margin: 1% auto;
        width: 100%;
    }
`;

const NavItem = styled.li`
    padding: 4%;
    width: 100%;
    margin: 10% auto 20% auto;
    background-color: #FEFCFB;

    @media screen and (max-width: 1000px) {
        padding: 2px 1px;
        margin: 0 0.5%;
    }
`;

const NavLink = styled(Link)`
    font-size: calc(2px + 2vw);
    text-decoration: none;
    display: block;
    color: #0A1128;
`;

export default function Nav() {
    return (
        <StyledNav>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
                <NavItem><NavLink to="/activities">Activities</NavLink></NavItem>
                <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
            </NavList>
        </StyledNav>
    )
}