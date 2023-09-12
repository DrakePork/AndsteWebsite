import {Title, Text, Grid, Container, Center, Divider, Box} from '@mantine/core';
import useStyles from './Projects.styles';
import {ProjectCard, ProjectType, Project} from './ProjectCard';

const projects: Project[] = [
    {
        id: 0,
        span: 7,
        link: 'https://skyprison.net',
        image: '/skyprison.png',
        title: ['Sky', 'Prison'],
        color: ['#66d9e8', '#e03131'],
        description: 'SkyPrison is a Minecraft Prison Server. It has been running since 2012, however I took over development for it in 2019, and became co-owner in January of 2021. ' +
            'I have since 2019 been in charge of setting up plugins, developing custom features & a variety of other responsibilities.',
        type: ProjectType.MinecraftServer,
    },
    {
        id: 1,
        span: 5,
        link: 'https://github.com/mc-skyprison/SkyPrisonCore',
        image: 'github.png',
        title: ['SkyPrisonCore'],
        color: ['#ced4da'],
        description: 'SkyPrisonCore is the custom coded plugin for the Minecraft Server SkyPrison. It has been in development since 2020 when several custom plugins were merged into one.',
        type: ProjectType.MinecraftPlugin,
    },
    {
        id: 2,
        span: 6,
        link: 'https://github.com/DrakePork/RegionTeleport',
        image: 'regionteleport.png',
        title: ['RegionTeleport'],
        color: ['#9c36b5'],
        description: 'RegionTeleport is a Minecraft plugin originally coded for SkyPrison, but has been released for others to use aswell. It\'s main functionality is teleporting ' +
            'players from a WorldGuard region to a specified location, but it has in later years gotten other functionality like clearing regions of specific entities & some region flags',
        type: ProjectType.MinecraftPlugin,
    },
    {
        id: 3,
        span: 6,
        link: 'hhttps://github.com/DrakePork/TaskBot',
        image: 'github.png',
        title: ['TaskBot'],
        color: ['#d68835'],
        description: 'TaskBot is a bot for Discord that is used to keep track of who\'s turn it is to do a task.',
        type: ProjectType.DiscordBot,
    },
];

export function Projects() {
    const {classes} = useStyles();
    return (
        <Box sx={{minHeight: "100vh"}} className={classes.angle} bg="#212529" pb={50}>
            <Title id="projects" className={classes.title} align="center" mb={50}>
                <Text inherit variant="gradient" gradient={{from: '#ffc078', to: '#e8590c'}} component="span">
                    Projects
                </Text>
                <Center><Divider className={classes.divider} my="md" size="xl"/></Center>
            </Title>
            <Container>
                <Grid grow>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
