import styled from 'styled-components';

const Content = styled.div`
  margin-top: 4%;
`;

const ActivitiesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  font-size: calc(2px + 2vw);
`;

const ActivityItem = styled.li`
  padding-left: 2%;
  margin-bottom: 10%;
  border-left: 6px solid #034078;
`;

const BulletList = styled.ul`
  list-style: initial;
  padding-left: 5%;
  margin-top: 1%;
`;

const BulletItem = styled.li`
  border: none;
  margin-bottom: 0;
  padding-left: 0;
`;

const PageTitle = styled.h3`
  color: #034078;
  text-align: center;
  font-size: calc(2px + 2vw);
`;

export default function Activities() {
    return (
        <>
            <PageTitle>Activities</PageTitle>
            <Content>
                <ActivitiesList>
                    <ActivityItem>
                        <b>Director of Administration</b>, Kappa Delta<br/>
                        <i>December 2023 - July 2024</i>
                        <br/>Boston, MA<br/>
                        <BulletList>
                            <BulletItem>Managed the files, attendance, and form completions of over 150 sorority members.</BulletItem>
                            <BulletItem>Regularly completed and dispersed meeting minutes</BulletItem>
                        </BulletList>
                    </ActivityItem>
                    <ActivityItem>
                        <b>Lead Web Developer</b>, Back Bay Publishing Company<br/>
                        <i>May 2024 - Present</i>
                        <br/>Boston, MA<br/>
                        <BulletList>
                            <BulletItem>
                                Oversaw The Daily Free Press and Boston Hockey Blog websites with a dedicated user base
                                of 100,000 weekly visitors.
                            </BulletItem>
                            <BulletItem>
                                Optimized website performance and maintenance, regularly updating and ensuring software
                                compatibility
                            </BulletItem>
                        </BulletList>
                    </ActivityItem>
                </ActivitiesList>
            </Content>
        </>
    )
}