import {Title, Text, Grid, Button, Center, Box } from '@mantine/core';
import useStyles from './Header.styles';
import {Contact} from "../Contact/Contact";
export function Header() {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerBox} h="100vh">
      <Center>
        <Title className={classes.title} align="center">
          <Text inherit variant="gradient" gradient={{ from: '#99e9f2', to: '#087f5b'}} component="span">
            Hi, I'm Andreas
          </Text>
        </Title>
      </Center>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl" mb={50}>
        Student, Developer & Musician
      </Text>
      <Center>
        <Grid className={classes.grid} grow gutter="xl">
{/*          <Grid.Col span={6}>
            <Button radius="md" size="xl" fullWidth variant="outline" color="grape"
            onClick={() => {
              const about = document.getElementById('about');
              if(about != null) about.scrollIntoView({behavior: 'smooth'});
            }}>
              Who am I?
            </Button>
          </Grid.Col>*/}
          <Grid.Col span={6}>
            <Button radius="md" size="xl" fullWidth variant="outline" color="orange"
            onClick={() => {
              const projects = document.getElementById('projects');
              if(projects != null) projects.scrollIntoView({behavior: 'smooth'});
            }}>
              Projects
            </Button>
          </Grid.Col>
          <Grid.Col span={12}>
            <Center>
              <Contact/>
            </Center>
          </Grid.Col>
        </Grid>
      </Center>
    </Box>
  );
}
