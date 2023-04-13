import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Grid container padding={2} margin={0}>
          <Grid item xs={12}>
            <Accordion defaultExpanded={true} color="primary">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>example.com</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 1 }}>
                <Grid container>
                  <Grid item xs={6} sx={{ px: 1, pb: 2 }}>
                    <Button href="/exhibitions" variant="contained" color="info" fullWidth>ログイン</Button>
                  </Grid>
                  <Grid item xs={6} sx={{ px: 1, pb: 2 }}>
                    <Button href="/exhibitions" variant="contained" color="info" fullWidth>ログイン</Button>
                  </Grid>
                  <Grid item xs={6} sx={{ px: 1, pb: 2 }}>
                    <Button href="/exhibitions" variant="contained" color="info" fullWidth>ログイン</Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion defaultExpanded={true} color="primary">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>example.com</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 1 }}>
                <Grid container>
                  <Grid item xs={6} sx={{ px: 1, pb: 2 }}>
                    <Button href="/exhibitions" variant="contained" color="info" fullWidth>ログイン</Button>
                  </Grid>
                  <Grid item xs={6} sx={{ px: 1, pb: 2 }}>
                    <Button href="/exhibitions" variant="contained" color="info" fullWidth>ログイン</Button>
                  </Grid>
                  <Grid item xs={6} sx={{ px: 1, pb: 2 }}>
                    <Button href="/exhibitions" variant="contained" color="info" fullWidth>ログイン</Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
