import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

// material-ui
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const GetDataJson = async() => {
  try {
    const result = await axios.get('/api/blog_get');
    return result.data;
  } catch(error) {

  }
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Top = () => {
  let [blog_items, setBlogs] = useState([]);

  useEffect(() => {
    const f = async() => {
      let blogs = await GetDataJson();
      setBlogs(blogs);
    }
    f();
  }, []);

  const classes = useStyles();

  const url = window.location.protocol + '//' + window.location.host;

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {blog_items.map((data, index) => 
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={'/storage/' + data.image}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to={"/blog/" + data.id} className="title"><span>{data.title}</span></Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Top;

// const TopStyle = styled.div`
//   text-align:center;
//   ul {
//     margin: 0;
//     padding: 0;
//   }
//   ul li {
//     list-style: none;
//     font-size: 2rem;
//     padding-top: 2rem;
//   }

//   .title span {
//     color: black;
//   }
// `;