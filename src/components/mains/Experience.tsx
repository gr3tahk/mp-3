import styled from 'styled-components';

const Content = styled.div`
    margin-top: 4%;
`;

const ExperienceList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    font-size: calc(1vw);

    @media screen and (max-width: 1000px) {
        font-size: calc(1.8vw);
    }
`;

const ExperienceItem = styled.li`
    padding-left: 2%;
    margin-bottom: 2%;
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

export default function Experience() {
    return (
        <>
            <PageTitle>Experience</PageTitle>
            <Content>
                <ExperienceList>
                    <ExperienceItem>
                        <b>Product Manager Intern</b>, TikTok<br/>
                        <i>June 2025 - September 2025</i>
                        <br/>San Jose, CA<br/>
                        <BulletList>
                            <BulletItem>
                                Redesigned TikTok's Family Pairing splash page, improving UX to reduce signup funnel
                                drop-off and improve conversion rates.
                            </BulletItem>
                            <BulletItem>
                                Led a full visual refresh of Family Pairing, implementing updated TUX design components
                                to cut engineering development time while ensuring UI consistency with TikTok's design system.
                            </BulletItem>
                            <BulletItem>
                                Identified and fixed a critical UX bug where banned/deleted parent/teen accounts caused
                                a white screen error, restoring safe account linking for minors and improving error handling for 1M+ users.
                            </BulletItem>
                            <BulletItem>
                                Led competitive analysis, user research, and cross-functional brainstorms to define
                                future roadmap priorities, including a FP Social Activity Dashboard and AI-powered parental controls,
                                evaluating feasibility and impact with design and engineering teams.
                            </BulletItem>
                        </BulletList>
                    </ExperienceItem>

                    <ExperienceItem>
                        <b>AI SME Product Manager</b>, Intelligence Assist<br/>
                        <i>February 2025 - April 2025</i>
                        <br/>Sydney, Australia<br/>
                        <BulletList>
                            <BulletItem>
                                Redesigned core product offerings and pricing based on market research and competitive
                                analyses, aligning features with customer needs and industry trends.
                            </BulletItem>
                            <BulletItem>
                                Spearheaded a strategic partnership with Webqem, eliminating the need for external
                                customer acquisition and delivering 8 new customers and increasing revenue by over $40,000 within 3 months.
                            </BulletItem>
                            <BulletItem>
                                Led the end-to-end redesign and development of the company website, collaborating with
                                engineering and design teams to improve UX.
                            </BulletItem>
                        </BulletList>
                    </ExperienceItem>

                    <ExperienceItem>
                        <b>Founding Product Marketer</b>, TollBit<br/>
                        <i>December 2023 - February 2025</i>
                        <br/>Boston, MA<br/>
                        <BulletList>
                            <BulletItem>
                                Helped to found and lead the GTM strategy of a company resolving the AI-publisher
                                conflict, driving initiatives to position Tollbit as a market leader.
                            </BulletItem>
                            <BulletItem>
                                Guided TollBit's brand through successful seed and series A funding rounds,
                                revamping website copy to clarify value propositions based on customer
                                feedback, ensuring apt messaging and product presentation.
                            </BulletItem>
                            <BulletItem>
                                Established connections with media and demand-side customers including companies like
                                Conde Nast, The Times, and The Atlantic, conducting market research analyzing website data
                                to inform TAM analysis and target top customer lists.
                            </BulletItem>
                            <BulletItem>
                                Built multiple case studies collaborating with design teams to increase onboarding, new
                                features, and product improvements.
                            </BulletItem>
                        </BulletList>
                    </ExperienceItem>
                </ExperienceList>
            </Content>
        </>
    )
}