// Router principal
import React from 'react';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainScreen } from '../components/MainScreen';
import { NuevoScreenPrincipal } from '../components/nuevo/NuevoScreenPrincipal';
import { ExplorarScreen } from '../components/explorar/ExplorarScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/NavBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/nuevo" element={<NuevoScreenPrincipal />} />
                <Route path="/explorar" element={<ExplorarScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
