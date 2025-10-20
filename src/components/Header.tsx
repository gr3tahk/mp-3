import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0A1128;
  color: #FEFCFB;
  text-align: left;
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Greta Hachigian-Kreutzer</h1>
            <p>My Online Portfolio</p>
        </StyledHeader>
    )
}