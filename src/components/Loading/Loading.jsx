import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

export default function Animations() {
  return (
    <Wrapper>
      <Box margin="auto">
        <Box key={1} sx={{ display: { xs: "none", md: "block" }, width: "100%" }}>
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={600}
            height={88}
            key={88}
          />
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={600}
            height={128}
            key={128}
          />
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={600}
            height={158}
            key={158}
          />

          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={600}
            height={88}
            key={90}
          />
        </Box>

        <Box key={2} sx={{ display: { xs: "block", md: "none" } }}>
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={400}
            height={88}
            key={88}
          />
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={400}
            height={100}
            key={100}
          />
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={400}
            height={150}
            key={150}
          />
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={400}
            height={88}
            key={98}
          />
          <Skeleton
            sx={{ borderRadius: "8px", mt: 2 }}
            variant="rectangular"
            width={380}
            height={128}
            key={128}
          />
        </Box>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;
