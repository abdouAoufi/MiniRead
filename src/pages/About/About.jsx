import React from "react";
import Navbar from "../.././components/Navbar";
import styled from "styled-components";
import abdou from "../../assets/images/jpg/abdou.png";
import Box from "@mui/material/Box";
import Title from "../../components/Typography/Title";
import { Typography } from "@mui/material";
import { TYPO_COLORS } from "../../assets";
import { Button } from "@mui/material";
import { DEFAULT_COLORS } from "../../assets";
import ContaindTag from "../../components/Tag/Outlined";

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <Box
        sx={{
          justifyContent: "center",
          placeitems: "center",
          pt: 12,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          placeItems: "center",
        }}
      >
        <ProfileImage src={abdou} alt="title" />
        <Box sx={{ p: 8 }}>
          <Typography
            variant="h2"
            component="div"
            sx={{ color: TYPO_COLORS.balck, fontWeight: "500", mt: 2 }}
          >
            Hi there!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: TYPO_COLORS.lessBlack,
              fontSize: "1.25rem",
              maxWidth: "500px",
            }}
          >
            Aoufi abderahmane passionate full-stack freelance JAVASCRIPT
            developer and content creator. Also i'm student from Boumerdes
            university in Automatics and Computing. I'am always looking to
            expand my skills and share knowledge with people.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          placeitems: "center",
          pt: 8,
          pb: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          placeItems: "center",
        }}
      >
        <Box sx={{ p: 8 }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              color: TYPO_COLORS.balck,
              fontWeight: "500",
            }}
          >
            My career
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: TYPO_COLORS.lessBlack,
              fontSize: "1.25rem",
              maxWidth: "500px",
              mt : 2
            }}
          >
            Always up for challenge. I can create varity of web apps using
            latest web technology such as ReactJS and NodeJs. I've created
            several web apps for start-ups. And now being Freelancer You can get
            in touch with me below.
            <a href="https://portfolio-abdouaoufi.vercel.app/">
              <Button
                size="large"
                sx={{
                  fontWeight: "bold",
                  textTransform: "lowercase",
                  fontSize: "1.1rem",
                  color: DEFAULT_COLORS.secondary,
                }}
              >
                Contact me
              </Button>
            </a>
          </Typography>
        </Box>
        <Box sx={{ maxWidth: { md: "500px", xs: "300px" } }}>
          <ContaindTag>Javascript</ContaindTag>
          <ContaindTag>ReactJs</ContaindTag>
          <ContaindTag>NodeJs</ContaindTag>
          <ContaindTag>ExpessJs</ContaindTag>
          <ContaindTag>NextJs</ContaindTag>
          <ContaindTag>SQL</ContaindTag>
          <ContaindTag>Mongodb</ContaindTag>
          <ContaindTag>MERN</ContaindTag>
          <ContaindTag>Material ui</ContaindTag>
          <ContaindTag>Tailwind </ContaindTag>
          <ContaindTag>Bootstrap</ContaindTag>
          <ContaindTag>Java</ContaindTag>
          <ContaindTag>Android</ContaindTag>
          <ContaindTag>Git</ContaindTag>
          <ContaindTag>GitHub</ContaindTag>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ProfileImage = styled.img`
  height: 350px;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.58);
`;

export default About;
