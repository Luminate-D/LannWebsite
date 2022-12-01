import React from 'react';
import sc from 'styled-components';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Wrapper = sc.div`
    display: flex;
    padding: 1em;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Avatar = sc.img`
    border-radius: 50%;
    width: 2em;
    height: 2em;
    margin-right: 0.75em;
`;

const Nickname = sc.span`
    display: flex;
    font-size: 1.5em;
    align-items: baseline;
    justify-content: center;
`;

const Tag = sc.span`
    font-size: 0.5em;
    filter: brightness(0.7);
`;

export function LoggedUserInfo() {
    const user = useSelector((state: RootState) => state.discordAuth.user!);
    return <Wrapper>
        <Avatar src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`} />
        <Nickname>
            {user.username}
            <Tag>#{user.discriminator}</Tag>
        </Nickname>
    </Wrapper>
}