import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #0A1128;
  color: #FEFCFB;
  text-align: left;
  padding-left: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
`;

const FooterLink = styled.a`
  color: #FEFCFB;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Greta Hachigian-Kreutzer <FooterLink href="">Credits</FooterLink> &#169;</p>
        </StyledFooter>
    )
}