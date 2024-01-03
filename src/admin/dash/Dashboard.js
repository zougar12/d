import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import KPI from './KPIComponent'; // Assurez-vous d'importer le composant KPI
import DataTable from './Table'; // Assurez-vous d'avoir créé ce composant pour le tableau de données
import BarGraph from './BarGraph';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CssBaseline } from '@mui/material';

const tableData = [
  { name: 'Client A', ca: '100,000€' },
  { name: 'Client A', ca: '100,000€' },
  { name: 'Client A', ca: '100,000€' },
  { name: 'Client A', ca: '100,000€' },
  
];

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'black', color: 'white', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <KPI title="tableau">
              <DataTable data={tableData} />
            </KPI>
            <KPI title="graph">
              <BarGraph />
            </KPI>
          </Grid>
          <Grid item xs={12}>
            <KPI title="graph">
              <BarGraph />
            </KPI>
          </Grid>
          {/* Ajoutez autant de KPI que nécessaire */}
        </Grid>
      </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
