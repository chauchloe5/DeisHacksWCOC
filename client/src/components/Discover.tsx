import React, { useState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Fab,
  Slide,
  Typography,
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export const enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
}

interface InonProfit {
  id: string,
  name: string,
  whoSwipedRight: string[],
  profile: {
      logo: string, // String is reference link to where logo is stored
      category: string[],
      specialty: string[],
      bio: string,
      website: string,
      primaryRepresentative: string,
      contactInfo: {
          email: string,
          phoneNumber: string,
          mailingAddress: string
      }
  }
  forum: string; // String is reference link to forum object
}

const mockDataa = [
  {
    id: 'The Waltham Partnership for Youth',
    name: 'The Waltham Partnership for Youth',
    whoSwipedRight: [],
    profile: {
      logo: '/wpfy.png',
      category: [
          'Human Services',
          'Educational'
      ],
      specialty: [
          'Youth Programs',
          'Internship Opportunities for Youth',
          'Teaching Social Justice'
      ],
      bio: 'WPY works to ensure that the wealth of resources in and around Waltham are available for the youth and families who need them most. We facilitate high-impact community partnerships that support health and wellness, leadership development, and economic opportunity for Waltham youth while working to address long-standing structural inequities.',
      website: 'http://www.walthampartnershipforyouth.org',
      primaryRepresentative: 'Kaytie Dowcett',
      contactInfo: {
          email: 'info@walthampartnershipforyouth.org',
          phoneNumber: '(781) 314-3367',
          mailingAddress: '617 Lexington Street, Waltham MA 02452',
      }
    }
  },
  {
    id: 'The Charles River Museum of Industry and Innovation',
    name: 'The Charles River Museum of Industry and Innovation',
    whoSwipedRight: [],
    profile: {
        logo: '/crm.png',
        category: [
            'Art, Culture and Humanities'
        ],
        specialty: [
            'History',
            'Educaion and Technology'
        ],
        bio: 'Our mission is to educate people about America\'s industrial history and to encourage and inspire future innovation.',
        website: 'http://www.charlesrivermuseum.org',
        primaryRepresentative: 'Bob Perry',
        contactInfo: {
            email: 'info@charlesrivermuseum.org',
            phoneNumber: '(781) 893-5410',
            mailingAddress: '154 Moody St, Waltham MA 02453-5302',
        }
    },
    forum: 'String ID to Charles River Museum Forum'
  }
]

const Discover = () => {
  const [direction, setDirection] = useState<Direction>(Direction.UP);
  const [inEffect, setIn] = useState<boolean>(true);
  const [mockData, setMockData] = useState(mockDataa);
  const [mockDatum, setMockDatum] = useState<InonProfit | null>(null);

  useEffect(() => {
    let t = mockData.shift();
    setMockDatum(t as any);
  }, [])

  let nonprofitcard = (
    <div style={{ width: 500 }}>
      <Card style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
        <CardHeader
          title={mockDatum?.name}
        />
        <CardMedia
          component='img'
          height='300'
          image={mockDatum?.profile.logo}
          // image='https://picsum.photos/200/300'
        />
      </Card>
      <Card style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
        <CardHeader
          title='Category'
        />
        <CardContent>
          {mockDatum?.profile.category.map((category) => (
            <Chip
              label={category} 
              key={category}
              style={{ marginRight: 5 }}
            />
          ))}
        </CardContent>
      </Card>
      <Card style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
        <CardHeader
          title='Specialty'
        />
        <CardContent>
          {mockDatum?.profile.specialty.map((specialty) => (
            <Chip
              label={specialty} 
              key={specialty}
              style={{ margin: 2.5 }}
            />
          ))}
        </CardContent>
      </Card>
      <Card style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}>
        <CardHeader
          title='Mission Statement'
        />
        <CardContent>
          <Typography variant='body1'>
            {mockDatum?.profile.bio}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div style={{ 'display': 'flex', justifyContent: 'center', width: '100%' }}>
      <Slide
        direction={direction}
        in={inEffect}
        mountOnEnter
        unmountOnExit
        timeout={500}
      >
        {nonprofitcard}
      </Slide>
      <div style={{
        'position': 'fixed',
        top: '85%',
        width: '100%',
        'display': 'flex',
        justifyContent: 'space-between'
      }}>
        <Fab
          style={{ marginLeft: '20px' }}
          color='secondary'
          onClick={() => {
            mockData.push(mockDatum as any);
            setDirection(Direction.RIGHT);
            setIn(false);
            setTimeout(() => {
              let t = mockData.shift();
              setMockDatum(t as any);
              setDirection(Direction.UP);
              setTimeout(() => {
                setIn(true);
              }, 100);
            }, 500);
          }}
        >
          <CloseIcon />
        </Fab>
        <Fab
          style={{ marginRight: '20px' }}
          color='primary'
          onClick={() => {
            setDirection(Direction.LEFT);
            setIn(false);
            setTimeout(() => {
              let t = mockData.shift();
              setMockDatum(t as any);
              setDirection(Direction.UP);
              setTimeout(() => {
                setIn(true);
              }, 100);
            }, 500);
          }}
        >
          <CheckIcon />
        </Fab>
      </div>
    </div>
  )
};

export default Discover;