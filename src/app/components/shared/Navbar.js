"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../../assets/logo.png";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const navItems = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Pages",
    path: "/pages",
  },
  {
    route: "Category",
    path: "/category",
  },
];
function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt="logo" />

          <Box className="w-full  flex justify-center  " >
            {navItems.map((item) => (
              <Link
                key={item}
               href={item.path}
              >
             <Button className="text-white"> 
                {item.route}
             </Button>
              </Link>
            ))}
          </Box>
          <Box>
          <Stack direction="row"  sx={{
                "& svg":{
                    color:"white"
                }
             }}>
          <IconButton>
              <FacebookIcon />
            </IconButton>
          </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
