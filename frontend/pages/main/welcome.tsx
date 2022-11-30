import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../../css/theme';
import { SupportButton } from './buttons/support';
import { Header } from './header';

const Wrapper = sc.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    background-color: black;
    align-items: center;
    position: relative;
    z-index: 0;
`;

const Container = sc.div`
    position: relative;
    z-index: 0;
    
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    overflow: hidden;
`;

const BackgroundCover = sc.img`
    position: absolute;
    height: 100%;
    filter: blur(8px) brightness(0.5);
    user-select: none;
    z-index: -1;
`;

const Title = sc.span`
    position: relative;
    text-shadow: #ffffff 0 0 8px;

    animation: fadein 8s, glow 8s;
    animation-iteration-count: 1, infinite;
    
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    @keyframes glow {
        0% { text-shadow: #6d9bff 0 0 6px; }
        35% { text-shadow: #6d9bff 0 0 16px; }
        65% { text-shadow: #6d9bff 0 0 16px; }
        100% { text-shadow: #6d9bff 0 0 6px; }
    }
`;

const SubTitle = sc.span`
    font-family: 'Comfortaa';
    font-size: 1.5em;
    line-height: 1.5em;
`;

const Tag = sc.span`
    position: absolute;
    text-shadow: none;
    color: yellow;
    font-size: 1em;
    right: -1.5em;
    bottom: 0.5em;
    font-family: 'Orbitron';
`;

const TitleWord = sc.span`
    font-size: 7em;
    color: ${(props: ITheme) => props.theme.lightBlue};
`;

const Arrow = sc.i`
    position: absolute;
    border: solid ${(props: ITheme) => props.theme.secondary};
    border-width: 0 30px 30px 0;
    display: inline-block;
    padding: 30px;
    
    animation: float 5s infinite;
    
    bottom: 5em;
    
    @keyframes float {
        0% {
            transform: translatey(0px) rotate(45deg);
        }
        
        50% {
            transform: translatey(-1em) rotate(45deg);
        }
        
        100% {
            transform: translatey(0px) rotate(45deg);
        }
    }
    
    &:hover {
        cursor: pointer;
    }
`;

const Agitation = sc.span`
    font-family: 'Comfortaa';
    font-size: 1.5em;
    line-height: 1.5em;
    margin-top: 2em;
`;

export function Welcome() {
    return <Wrapper>
        <BackgroundCover src={"images/cover.png"} />
        <Header />

        <Container>
            <Title>
                <TitleWord>Luminate-D</TitleWord>
                <Tag>#NoToWar</Tag>
            </Title>
            <SubTitle>Hello! I am {calculateAge()} years old and i love programming & developing software</SubTitle>
            <SubTitle>I want to work as software engineer abroad</SubTitle>
            <Agitation>Check out my technology stack below</Agitation>

            <Arrow onClick={() => {
                const targetY = document.getElementById('stack')!.offsetTop;
                document.body.scroll({
                    behavior: 'smooth',
                    top: targetY,
                    left: 0
                });
            }}></Arrow>

            <SupportButton />
        </Container>
    </Wrapper>
}

function calculateAge() {
    const diff = Date.now() - 1170972000000;
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}
