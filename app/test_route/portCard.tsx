"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { Adb } from "@mui/icons-material";

export interface PortCardProps {
  title: string;
  subHeader: string;
  imageUrls: string;
  cardContent: string;
  cardHTML?: React.ReactNode;
}

export const PortCard: React.FC<PortCardProps> = ({
  title,
  subHeader,
  imageUrls,
  cardContent,
  cardHTML,
}) => {
  return (
    <Card sx={{}}>
      <CardHeader title={title} subheader={subHeader} />
      <CardMedia
        component="img"
        height="200"
        image={imageUrls || "../vercel.svg"}
        alt="imageUrls"
        className="fit-content"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cardContent ? cardContent : cardHTML}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Adb />
      </CardActions>
    </Card>
  );
};
