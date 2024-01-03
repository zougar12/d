import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const KPI = ({ title, children }) => {
  return (
    <Card sx={{ bgcolor: 'grey.900', color: 'white', m: 2, width: 'fit-content' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {children}
        </Typography>
        {/* Ici, vous pouvez ajouter des graphiques ou d'autres éléments spécifiques à votre KPI */}
      </CardContent>
    </Card>
  );
};

export default KPI;
