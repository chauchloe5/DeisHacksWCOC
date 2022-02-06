import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Slide,
  Typography,
} from '@material-ui/core';

import { Direction } from './Discover';

const Forum = () => {
  const [inEffect1, setIn1] = useState(true);
  const [inEffect2, setIn2] = useState(false);
  const [dir2, setDir2] = useState<Direction>(Direction.LEFT);
  const [inEffect3, setIn3] = useState(false);

  const nonprofits = (
    <div>
      <div>
        <Typography variant='h4' align='center' style={{ marginBottom: 20 }}>My Forum</Typography>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => {
          setIn1(false);
          setTimeout(() => {
            setIn2(true);
            setDir2(Direction.RIGHT);
          }, 200);
        }}>
          <ListItemText primary='The Waltham Partnership for Youth' />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => {
          setIn1(false);
        }}>
          <ListItemText primary='Communities United, Inc.' />
        </ListItem>
      </List>
    </div>
  )

  const posts = (
    <div style={{ 'display': 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: 500 }}>
        <Card style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
          <CardHeader
            title='The Waltham Partnership for Youth'
          />
          <CardMedia
            component='img'
            height='300'
            image='wpfy.png'
          // image='https://picsum.photos/200/300'
          />
        </Card> 
        <Card style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
          <CardHeader 
            title='Posts'
          />
          <Divider />
          <List>
            <ListItem button onClick={() => {
              setIn2(false);
              setTimeout(() => {
                setIn3(true);
              }, 200);
            }}>
              <ListItemText primary='Help Wanted!' />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => {
              setIn2(false);
              setTimeout(() => {
                setIn3(true);
              }, 200);
            }}>
              <ListItemText primary='Looking for Partners to Grow our Internship program' />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => {
              setIn1(false);
              setTimeout(() => {
                // setIn2(true);
              }, 500);
            }}>
              <ListItemText primary='Looking for Diversified Sources of Funding' />
            </ListItem>
          </List>
        </Card> 
      </div>
    </div>
  )

  const comments = (
    <div>
      <div>
        <Typography variant='h4' align='center' style={{ marginBottom: 20 }}>
          Help Wanted!
        </Typography>
        <Typography variant='body1' style={{ margin: 20 }}>
          We are currently low in staff, and looking for people interested in Bookkeeping and Office Manager
        </Typography>
        <Typography variant='body2' style={{ margin: 20 }}>2/6/2022</Typography>
      </div>
      <Divider />
      <List>
        <ListItem>
          <ListItemText
            primary='We have people looking for jobs! We will send them your way.'
            secondary='by Waltham Chamber of Commerce, 2/6/2022'
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary='Thank you so much!'
            secondary='by The Waltham Partnership for Youth, 2/6/2022'
          />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Slide
        direction='right'
        in={inEffect1}
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        {nonprofits}
      </Slide>
      <Slide
        direction={dir2}
        in={inEffect2}
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        {posts}
      </Slide>
      <Slide
        direction='left'
        in={inEffect3}
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        {comments}
      </Slide>

    </div>
  )
};

export default Forum;