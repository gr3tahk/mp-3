import styled from 'styled-components';

const Content = styled.div`
  margin-top: 10%;
`;

const EducationList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`;

const EducationItem = styled.li`
  padding-left: 2%;
  margin-bottom: 20%;
  border-left: 6px solid #034078;
`;

const PageTitle = styled.h3`
  color: #034078;
  text-align: center;
`;

export default function Education() {
    return (
        <>
            <PageTitle>Education</PageTitle>
            <Content>
                <EducationList>
                    <EducationItem>
                        B.A. in Computer Science, <i>Boston University</i><br/>
                        Boston, MA<br/>
                        <i>In progress, expected May 2026</i>
                    </EducationItem>
                    <EducationItem>
                        High School Dual Enrollment, <i>Cañada College</i><br/>
                        Palo Alto, CA<br/>
                        <i>June 2020 - June 2022</i>
                    </EducationItem>
                    <EducationItem>
                        High School Diploma, <i>Woodside High School</i><br/>
                        Woodside, CA<br/>
                        <i>September 2018 - June 2022</i><br/>
                        Valedictorian
                    </EducationItem>
                </EducationList>
            </Content>
        </>
    )
}