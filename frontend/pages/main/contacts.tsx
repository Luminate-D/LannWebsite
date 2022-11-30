import React from 'react';
import sc from 'styled-components';
import { Images } from '../../images';

const Container = sc.div`
    display: flex;
    width: 100%;
    height: max-content;
    align-items: center;
    flex-direction: column;
`;

const ContactsContainer = sc.div`
    display: flex;
    width: 100%;
    height: max-content;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 200px;
    box-sizing: border-box;
    gap: 1em;
`;

const ContactContainer = sc.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 4 - 1em);
    
    &:hover {
        cursor: pointer;
    }
`;

const Title = sc.span`
    font-size: 3em;
    line-height: 1.5em;
    margin-bottom: 0.5em;
`;

const ContactLogo = sc.img`
    width: 45px;
    margin-right: 1em;
`;

const ContactName = sc.span`
    font-size: 1.75em;
`;

export interface IService {
    logo: string;
    name: string;
    url: string;
}

export function Contact(props: IService) {
    return <ContactContainer onClick={() => window.open(props.url, '_blank')}>
        <ContactLogo src={props.logo} />
        <ContactName>{props.name}</ContactName>
    </ContactContainer>
}

const images = Images.getRepository('services');

export function ContactsList() {
    return <Container>
        <Title>Contacts</Title>
        <ContactsContainer>
            <Contact logo={images["discord.png"]} name={"Discord"} url={'https://discord.com/users/814857877637562379'} />
            <Contact logo={images["telegram.webp"]} name={"Telegram"} url={'https://t.me/@lannts'} />
            <Contact logo={images["github.png"]} name={"GitHub"} url={'https://github.com/Luminate-D'} />
            <Contact logo={images["gmail.png"]} name={"G-Mail"} url={'mailto://lann.wauthority@gmail.com'} />
        </ContactsContainer>
    </Container>;
}