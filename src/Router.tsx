import { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './design-system/_common/Layout';
import NoMatch from "./pages/nomatch";
import { useMediaQuery } from "@mui/material";
import { theme } from "./utils/theme";

import ScrollToTop from './utils/ScrollToTop';

import Home from "./pages/home";

export const Router: FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false)
 

    return (
        <BrowserRouter>
            <ScrollToTop />

            <main>

                <Layout
                    open={open}
                    setOpen={setOpen}                  
                >
                    <Routes>
                        <Route index
                            element={
                                <Home />
                            }
                        />

                        <Route path="*" element={<NoMatch />} />
                    </Routes>

                </Layout>

            </main>
        </BrowserRouter>
    )
}