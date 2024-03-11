import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const Footer = () => {
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
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="text-center w-full"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box className="w-full  flex justify-center  ">
          {navItems.map((item) => (
            <Link key={item} href={item.path}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <p
          
          className="text-center text-white text-xs    w-full"
        >
          @2024 Ashrafuj Jaman Tanbin
        </p>
      </Container>
    </Box>
  );
};

export default Footer;
