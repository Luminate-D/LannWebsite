import React from 'react';
import { _StackItem } from './languages';

export function MariaDB() {
    return <_StackItem logo={"mariadb.webp"} title={"MariaDB"} description={`
        I use this database in almost every project. Exception is small projects
        where there is no need in database or storing huge amount of data.
    `} />;
}

export function SQLite() {
    return <_StackItem logo={"sqlite.png"} title={"SQLite"} description={`
        I use this database in small projects where there is no need to
        store much data or these projects are not for public use.
    `} />;
}

export function TypeORM() {
    return <_StackItem logo={"typeorm.png"} title={"TypeORM"} description={`
        As i very often use TypeScript, i use TypeORM for managing databases
        in both SQLite or MySQL. I do not use any other ORM.
    `} />;
}