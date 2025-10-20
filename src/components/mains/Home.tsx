import styled from 'styled-components';

const Content = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
    margin-top: 6%;
    font-size: calc(2px + 2vw);
  }
`;

const Overview = styled.p`
  margin-top: 6%;
`;

const ProfileImage = styled.img`
  padding: 5%;
  width: auto;
`;

const PageTitle = styled.h3`
  color: #034078;
  text-align: center;
`;

export default function Home() {
    return (
        <>
            <PageTitle>Home</PageTitle>
            <Content>
                <ProfileImage src="/profile-photo.jpg" alt="Profile photo"/>
                <Overview>
                    Hi! I'm Greta, a fourth-year computer science student at Boston University.
                    I'm passionate about product management, software development, entrepreneurship,
                    and user-centric solutions. When I'm not analyzing KPIs or writing PRDs, you can find me surfing,
                    cooking,
                    or raving about the most recent F1 Grand Prix (go McLaren).
                </Overview>
            </Content>
            <br/>
            <p>
                Welcome to my website! You can find my <b><i>educational history</i></b>, <b><i>work history</i></b>,
                and other <b><i>activities, skills, and projects</i></b> of interest. Thanks for stopping by!
            </p>
        </>
    )
}