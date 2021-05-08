import React from 'react';
import { CardActions, Typography, AppBar, Toolbar , CssBaseline , Container , Grid, Button , Card , CardMedia , CardContent} from '@material-ui/core';
import { Menu, MenuItem, MenuList, Popover } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
import SimpleMenu from './SimpleMenu';

// AppBar, Card, CArdActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container 
//import { Button , Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

// CssBaseline for your material ui applications so you don't have to worry about the styles
// more components you'll start noticing the difference 

// AppBar is navigation bar - have a position of relative inside of there 
// Toolbar is the blue line you'll be able 


// How can you know you need to push maxWidth in Container, how can you know push gutterBottom and anything elses in -
// @material-ui, that's main question

// ---> Need to understand where u can find and learn more these props and that's exactly what you're going to learn rightnow
//  Examples demos and explanations for each components

const cards = [1 , 2 , 3 , 4 , 5  , 6 , 7 , 8 , 9];


const App = () => {

    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Phone Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <SimpleMenu />
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                         <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
                            Album file 
                         </Typography>
                         <Typography variant="h5" align="center" color="textSecond" paragraph>
                             Hello everyone  this is a photo album and I'm trying to make this sentense as long as possible so we can see how does it look like on the screen
                         </Typography>
                         <div className={classes.button}>
                             <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        My photo is so handsome))
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">
                                        My photo is so handsome))
                                    </Button>
                                </Grid>
                             </Grid>
                         </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia} 
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h4">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is media card.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary"> View </Button>
                                    <Button size="small" color="primary"> Edit </Button>
                                </CardActions>
                            </Card>
                        </Grid>                        
                        ))};
                    </Grid>
                </Container>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                        Something here to give the footer a purpose!
                    </Typography> 
                </footer>
            </main>
        </>
    );
}

export default App;