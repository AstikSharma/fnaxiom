import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MainCard({ heading, content, buttonName }) {
  return (
    <Box
      sx={{
        minWidth: 275,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 300,
          backgroundColor: '#1A2027',
          color: '#FFFFFF',
          borderRadius: '50px',
          padding: '20px',
          minHeight: '50vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 24, fontWeight: 'bold' }} color="inherit" gutterBottom>
            {heading}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {content}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: '#FF5722',
              color: '#FFFFFF',
              fontWeight: 'bold',
              borderRadius: '50px',
              width: '100%',
              fontSize: '1.25rem',
            }}
          >
            {buttonName}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
