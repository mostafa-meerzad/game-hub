import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Container
      maxW="1440px" 
      mx="auto" 
    >
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
