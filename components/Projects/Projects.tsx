import { Title, Text, Grid, Container, Center, Divider, Box } from '@mantine/core';
import useStyles from './Projects.styles';
import { ProjectCard, ProjectType, Project } from './ProjectCard';

const projects: Project[] = [
  {
    id: 0,
    link: 'https://skyprison.net',
    image: '/skyprison.png',
    title: ['Sky', 'Prison'],
    color: ['#66d9e8', '#e03131'],
    description: 'SkyPrison is a Minecraft Prison Server in the sky! Here you can potato in a potato, and also eat a potato in a cabbage! Also remember to eat a bagel once in a potato. ahahahahahahahahaa adfg sdfgh sfdghb erswthg esrvf s',
    type: ProjectType.MinecraftServer,
  },
  {
    id: 1,
    link: 'https://github.com/mc-skyprison/SkyPrisonCore',
    image: 'github.png',
    title: ['SkyPrisonCore'],
    color: ['#ced4da'],
    description: 'Minecraft Plugin containing custom code for SkyPrison',
    type: ProjectType.MinecraftPlugin,
  },
  {
    id: 2,
    link: 'https://modrinth.com/plugin/regionteleport',
    image: 'regionteleport.png',
    title: ['RegionTeleport'],
    color: ['#9c36b5'],
    description: 'Minecraft Plugin',
    type: ProjectType.MinecraftPlugin,
  },
];

export function Projects() {
  const { classes } = useStyles();
  return (
    <Box sx={{ minHeight: "100vh" }} pt={100} pb={250}>
      <Title id="projects" className={classes.title} align="center" mb={50}>
        <Text inherit variant="gradient" gradient={{ from: '#ffc078', to: '#e8590c'}} component="span">
          Projects
        </Text>
        <Center><Divider className={classes.divider} my="md" size="xl" /></Center>
      </Title>
      <Container>
        <Grid columns={2} grow>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
