import {Text, Grid, Card, Image, Button, Badge, Transition, Overlay} from '@mantine/core';
import {useState} from 'react';
import {IconExternalLink} from '@tabler/icons-react';
import useStyles from './Projects.styles';

export interface Project {
    id: number;
    span: number;
    link: string;
    image: string;
    title: string[];
    color: string[];
    description: string;
    type: ProjectType;
}

export enum ProjectType {
    MinecraftServer = 'Minecraft Server',
    MinecraftPlugin = 'Minecraft Plugin',
    DiscordBot = 'Discord Bot',
}

const gradients = {
    [ProjectType.MinecraftServer]: {from: 'teal', to: 'blue', deg: 60},
    [ProjectType.MinecraftPlugin]: {from: 'red', to: 'orange', deg: 60},
    [ProjectType.DiscordBot]: {from: 'cyan.6', to: 'blue', deg: 60},
};

interface ProjectProps {
    project: Project;
}

const slideDownSkew = {
    in: {opacity: 1, transform: "translateX(0) translateY(0)"},
    out: {opacity: 0, transform: "translateX(-100%) translateY(-100%)"},
    common: {transformOrigin: "top left"},
    transitionProperty: "transform, opacity"
};

const slideUpSkew = {
    in: {opacity: 1, transform: "translateX(0) translateY(0)"},
    out: {opacity: 0, transform: "translateX(100%) translateY(100%)"},
    common: {transformOrigin: "bottom right"},
    transitionProperty: "transform, opacity"
};

export function ProjectCard({project}: ProjectProps) {
    const {classes} = useStyles();
    const [clicked, setClicked] = useState(false);

    return (
        <Grid.Col md={12} lg={project.span}>
            <Card className={classes.projectCard} shadow="sm" padding="lg" radius="md" withBorder>
                <Image className={classes.projectImage} src={project.image} withPlaceholder/>
                <Overlay
                    className={classes.projectOverlay}
                    gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)"
                    opacity={clicked ? 0 : 0.85}
                    style={{transition: 'all 0.5s ease'}}
                />
                <Overlay
                    className={classes.projectOverlay}
                    color="#000"
                    opacity={clicked ? 0.85 : 0}
                    style={{transition: 'all 0.5s ease'}}
                />
                <Transition mounted={clicked} transition={slideUpSkew} duration={500} timingFunction="ease">
                    {(styles) => (
                        <Overlay className={classes.projectOverlay} style={styles} opacity={0}>
                            <Grid columns={24} gutter="xs" justify="space-between">
                                <Grid.Col md={24} lg={24}>
                                    {project.title.map((titlePart, index) => (
                                        <Text key={project.id + "-exp-title-text-" + index}
                                              className={classes.projectOverlayTitle} inherit
                                              color={project.color[index]} component="span">
                                            {titlePart}
                                        </Text>
                                    ))}
                                </Grid.Col>
                                <Grid.Col md={24} lg={24}>
                                    <Grid justify="flex-start" gutter="xs">
                                        <Grid.Col span="content">
                                            <Button leftIcon={<IconExternalLink/>} className={classes.buttonSizeOverlay}
                                                    component="a" href={project.link} target="_blank" variant="light"
                                                    color="teal" radius="md">
                                                Link
                                            </Button>
                                        </Grid.Col>
                                        <Grid.Col span="content">
                                            <Button className={classes.buttonSizeOverlay} onClick={() => {
                                                setClicked(false)
                                            }} variant="light" color="blue" radius="md">
                                                Less Info
                                            </Button>
                                        </Grid.Col>
                                    </Grid>
                                </Grid.Col>
                                <Grid.Col>
                                    <Text size="md">
                                        {project.description}
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Overlay>
                    )}
                </Transition>
                <Transition mounted={!clicked} transition={slideDownSkew} duration={500} timingFunction="ease">
                    {(styles) => (
                        <Overlay className={classes.projectOverlay} style={styles} opacity={0}>
                            <Badge style={styles} className={classes.projectType} radius={6.5} size="xl"
                                   variant="gradient" gradient={gradients[project.type]}>
                                {project.type}
                            </Badge>
                            <div style={styles} className={classes.projectContent}>
                                <Grid columns={24} gutter="0" justify="space-between">
                                    <Grid.Col>
                                        {project.title.map((titlePart, index) => (
                                            <Text key={project.id + "-title-text-" + index}
                                                  className={classes.projectTitle} color={project.color[index]}
                                                  component="span">
                                                {titlePart}
                                            </Text>
                                        ))}
                                    </Grid.Col>
                                    <Grid.Col md={24} lg={17}>
                                        <Text lineClamp={3} size="sm">
                                            {project.description}
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col md={24} lg={2}>
                                        <Grid gutter="xs" justify="flex-end">
                                            <Grid.Col span="auto">
                                                <Button leftIcon={<IconExternalLink/>} className={classes.buttonSize}
                                                        component="a" href={project.link} target="_blank"
                                                        variant="light" color="teal" radius="md">
                                                    Link
                                                </Button>
                                            </Grid.Col>
                                            <Grid.Col span="auto">
                                                <Button className={classes.buttonSize} onClick={() => {
                                                    setClicked(true)
                                                }} variant="light" color="blue" radius="md">
                                                    More Info
                                                </Button>
                                            </Grid.Col>
                                        </Grid>
                                    </Grid.Col>
                                </Grid>
                            </div>
                        </Overlay>
                    )}
                </Transition>
            </Card>
        </Grid.Col>
    );
}
