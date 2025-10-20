import styled from 'styled-components';

const SkillsContainer = styled.div`
  margin-top: 10%;
`;

const SkillsList = styled.ul`
  margin-top: 10%;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4%;
`;

const SkillItem = styled.li`
  width: 30%;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 80px;
  height: auto;
  display: block;
  margin: 0 auto 5px;
`;

const SkillName = styled.p`
  margin: 0;
  font-size: calc(2px + 2vw);
`;

const PageTitle = styled.h3`
  color: #034078;
  text-align: center;
`;

export default function Skills() {
    return (
        <>
            <PageTitle>Skills</PageTitle>
            <SkillsContainer>
                <SkillsList>
                    <SkillItem>
                        <SkillImage src="/figma.png" alt="Figma logo"/>
                        <SkillName>Figma</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillImage src="/jira.png" alt="Jira logo"/>
                        <SkillName>Jira</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillImage src="/java.png" alt="Java logo"/>
                        <SkillName>Java</SkillName>
                    </SkillItem>
                </SkillsList>
                <SkillsList>
                    <SkillItem>
                        <SkillImage src="/js.png" alt="JavaScript logo"/>
                        <SkillName>JavaScript</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillImage src="/cplusplus.png" alt="C++ logo" />
                        <SkillName>C++</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillImage src="/python.png" alt="Python logo"/>
                        <SkillName>Python</SkillName>
                    </SkillItem>
                </SkillsList>
            </SkillsContainer>
        </>
    )
}