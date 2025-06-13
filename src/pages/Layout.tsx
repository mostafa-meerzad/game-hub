import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Container
      maxW="1440px" // ← 1. hard cap
      mx="auto" // ← 2. centers when wider
      px={{ base: 4, md: 6 }}
    >
      <Navbar />
      <Box p={10}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
