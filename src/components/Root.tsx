import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import {Route, Routes, useLocation} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Experience from "./mains/Experience.tsx";
import Activities from "./mains/Activities.tsx";
import Skills from "./mains/Skills.tsx";
import Projects from "./mains/Projects.tsx";
import styled from 'styled-components';

const PageWrapper = styled.div`
    width: 80vw;
    background-color: #F1F2F6;
    margin: 0 auto;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const MainContent = styled.main`
    height: 100vh;
    width: 70%;
    margin-top: 2%;
    font-size: calc(2px + 2vw);
    text-align: left;
    padding-left: 3%;
    padding-right: 3%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export default function Root(){
    const location = useLocation();
    const isProjectsPage = location.pathname === '/projects';

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav/>
                <MainContent style={isProjectsPage ? {
                    backgroundImage: "url('/calc.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginTop: 0
                } : {}}>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/education`} element={<Education/>}/>
                        <Route path={`/experience`} element={<Experience/>}/>
                        <Route path={`/activities`} element={<Activities/>}/>
                        <Route path={`/skills`} element={<Skills/>}/>
                        <Route path={`/projects`} element={<Projects/>}/>
                    </Routes>
                </MainContent>
            </Container>
            <Footer />
        </PageWrapper>
    )
}