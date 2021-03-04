import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

export default class Products extends Component {
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      let response = await fetch("/products/");
      const data = await response.json();
      console.log(data);
      this.setState({
        products: data,
        loading: false,
      });
    } catch (error) {
      alert(error);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    };
  }
  render() {
    if (this.state.loading) {
      return <div> Loading... </div>;
    }
    if (Array.isArray(this.state.products)) {
      var products = this.state.products.map((e, idx) => (
        <Grid item xs={7} sm={5} md={4} lg={3}>
          <Card key={idx}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={e.title}
                height="140"
                image={`http://localhost:5000/empty.jpg`}
                title={e.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {e.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Button size="small" color="secondary" variant="contained">
                  ADD TO CART
                </Button>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  color="black"
                  style={{ fontWeight: "bold" }}
                >
                  {`${e.price}$`}
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ));

      return (
        <Grid container spacing={3} justify="center" alignItems="center">
          {products}
        </Grid>
      );
    } else {
      return <div>No products found</div>;
    }
  }
}
