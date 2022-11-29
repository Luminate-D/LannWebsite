import React from 'react';
import { createRoot } from 'react-dom/client';
import sc, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ITheme, Theme } from './css/theme';

import { Welcome } from './welcome';
import { TechnologyStack } from './stack/stack';
import { ContactsList } from './contacts';
import { Footer } from './footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main';
import { PGPPage } from './pages/pgp';

const root = createRoot(document.getElementById('root')!);
const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Kanit', 'Roboto', sans-serif;
    }
    
    html, body {
        width: 100%;
        height: 100%;
        color: ${(props: ITheme) => props.theme.primary};
        background-color: ${(props: ITheme) => props.theme.bgPrimary};
    }

    html {
        overflow-y: scroll;
        scrollbar-color: '#212121' black;
        scrollbar-width: thin;
    }
`;

function App() {
    return <BrowserRouter>
        <ThemeProvider theme={Theme}>
            <GlobalCss />
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/pgp'} element={<PGPPage />}></Route>
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
}

root.render(<App />);
