import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import image1 from "./image1.webp";
import image2 from "./image2.webp";
import image3 from "./image3.webp";
import imageGif from "./gifImage.gif";
import "./section3.css";

const Section3 = () => {
  const cards = [
    {
      image: image1,
      alt: "Migrants Resilience Collaborative",
      title: "Migrants Resilience Collaborative",
      description:
        "To address the underlying systemic issues, People’s Courage International established the...",
    },
    {
      image: image2,
      alt: "Climate Resilience Initiative",
      title: "Climate Resilience Initiative",
      description:
        "The mission of our initiative is to build the resilience of climate-affected ensuring their climate-responsive adaptation supports.",
    },
    {
      image: image3,
      alt: "Grassroots Resilience Institute",
      title: "Grassroots Resilience Institute",
      description:
        "The Grassroots Resilience Institute (GRI) seeks to partner with CBOs and help solve for the specific challenges our partners face in sustaining...",
    },
  ];

  return (
    <div className="container my-5 section3">
      <Typography variant="h4" align="center" gutterBottom>
        What we do
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 425 }} className="hover-effect">
              <CardMedia
                component="img"
                alt={card.alt}
                height="180"
                image={card.image}
              />
              <CardContent className="d-flex cardContent_section3">
                <div className="img_section3">
                  <h6>
                    <img
                      src={imageGif}
                      className="gif-icon"
                      alt="GIF Icon"
                      style={{ width: "96px", borderRadius: "10px" }}
                    />
                  </h6>
                </div>
                <div className="title1_section3" style={{ marginLeft: "20px" }}>
                  <h4> {card.title}</h4>
                  <p>{card.description}</p>

                  <h5 className="section_3_button">
                    <a href="/MainCRIComponent">Read More</a>
                  </h5>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section3;
