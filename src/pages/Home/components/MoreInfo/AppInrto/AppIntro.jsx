import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DEFAULT_COLORS } from "../../../../../assets";

export default function AppCard() {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 0, border: "2px solid #eeeeee" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          fontWeight="semibold"
          gutterBottom
          variant="h5"
          component="div"
        >
          MiniRead
        </Typography>
        <Typography variant="body2" color="text.secondary">
          MiniRead is a web blog created by Aoufi Abderahmane freelance
          full-stack javascript developer. Here I share my knowledge and
          experience in web developement and IT in general. Feel free to contact
          me!
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://portfolio-abdouaoufi.vercel.app/">
          <Button
            size="small"
            sx={{ color: DEFAULT_COLORS.secondary, fontWeight: "bold" }}
          >
            Contact me
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
