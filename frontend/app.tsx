import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ITheme, Theme } from './css/theme';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/main';
import { PGPPage } from './pages/pgp/pgp';
import { ApiPage } from './pages/api/api';
import { PageNotFound } from './pages/errors/notfound';
import { Header } from './header/header';
import { RequestApiKeyPage } from './pages/api/request';
import { OAuth2Page } from './pages/oauth2/oauth2';
import { ErrorPage } from './pages/errors/error';
import { store } from './redux/store';

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
            <Provider store={store}>
                <GlobalCss />
                <Header />
                <Routes>
                    <Route path={'/'} element={<MainPage />}/>
                    <Route path={'/pgp'} element={<PGPPage />}></Route>
                    <Route path={'/api'} element={<ApiPage />}></Route>
                    <Route path={'/api/request'} element={<RequestApiKeyPage />}></Route>
                    <Route path={'/oauth2'} element={<OAuth2Page />}></Route>

                    <Route path={'/error/:errorId'} element={<ErrorPage />}></Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
}

root.render(<App />);
