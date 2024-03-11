import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container } from "@mui/material";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box>
      <Container className="text-center space-y-3  my-5">
        <h1 className="font-serif text-center text-4xl">Current Canvas</h1>
        <p>Informing Today, Empowering Tomorrow</p>
        <p>{currentDate}</p>
      </Container>
    </Box>
  );
};

export default Header;
