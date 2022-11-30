import React from 'react';
import { Images } from '../../images';
import { StackItem } from '../stackitem';

const images = Images.getRepository('stack/infrastructure');

export function Windows() {
    return <StackItem logo={images["windows.png"]} title={"Windows"} description={`
        My primary Operation System. I use it in my routine, because its more user-friendly
        for me, as i can install linux shell in it. Also i play games on it.
    `} />;
}

export function ArchLinux() {
    return <StackItem logo={images["arch.png"]} title={"Arch Linux"} description={`
        My secondary Operation System. Most C++ Projects are made on it.
        I use it in some jobs that windows is not good at. Also
        i do white hacker activity on it.
    `} />;
}

export function Cloudflare() {
    return <StackItem logo={images["cloudflare.png"]} title={"Cloudflare"} description={`
        My websites are protected with cloudflare proxy and its the only
        service i use for dns management and etc. purposes.
    `} />;
}

export function Git() {
    return <StackItem logo={images["git.png"]} title={"Git SCM"} description={`
        I use Git & GitHub to store all my projects and this is most
        used tool in my coding routine.
    `} />;
}

export function Nginx() {
    return <StackItem logo={images["nginx.webp"]} title={"Nginx"} description={`
        I do not use it often. Some big projects are using Nginx if they
        are hosted and need reverse proxy. I dont use other server proxy.
    `} />;
}
