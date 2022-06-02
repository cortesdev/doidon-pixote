import { FC } from "react";
import { Stack, useMediaQuery } from "@mui/material";
import MobileDrawer from "../organisms/MobileNav";
import { theme } from "../../utils/theme";
import Navbar from "../organisms/Navbar";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";


interface LayoutProps {
  open?: boolean,
  setOpen?: any,
  openModal?: any,
  children?: any,
  className?: string
  bothNavsOpen?: any
}

export const Layout: FC<LayoutProps> = ({
  open,
  setOpen,
  className,
  children,
  openModal,
  ...props }) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <article className={className} style={{marginTop: 100}} >
      {isMobile && <MobileDrawer />}

      <Header />
      
      <Stack direction="row" spacing={2} pt={2} >
        {children}
      </Stack>

      <Footer />
    </article >
  );
}