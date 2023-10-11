'use client';
import {Text, Grid, Card, Image, Button, Badge, Transition, Overlay, Flex, rem} from '@mantine/core';
import {useState} from 'react';
import {IconExternalLink} from '@tabler/icons-react';
import classes from './Projects.module.css';

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
    in: {backgroundOpacity: 1, transform: "translateX(0) translateY(0)"},
    out: {backgroundOpacity: 0, transform: "translateX(-100%) translateY(-100%)"},
    common: {transformOrigin: "top left"},
    transitionProperty: "transform, backgroundOpacity"
};

const slideUpSkew = {
    in: {backgroundOpacity: 1, transform: "translateX(0) translateY(0)"},
    out: {backgroundOpacity: 0, transform: "translateX(100%) translateY(100%)"},
    common: {transformOrigin: "bottom right"},
    transitionProperty: "transform, backgroundOpacity"
};

export function ProjectCard({project}: ProjectProps) {
    const [clicked, setClicked] = useState(false);
    return (
        <Grid.Col span={{sm: project.span}}>
            <Card h={{base: rem(300), sm: rem(280)}} className={classes.projectCard} shadow="sm" padding="lg" radius="md" withBorder>
                <Image className={classes.projectImage} src={project.image}/>
                <Overlay
                    className={classes.projectOverlay}
                    gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)"
                    backgroundOpacity={clicked ? 0 : 0.85}
                    style={{transition: 'all 0.5s ease'}}
                />
                <Overlay
                    className={classes.projectOverlay}
                    color="#000"
                    backgroundOpacity={clicked ? 0.85 : 0}
                    style={{transition: 'all 0.5s ease'}}
                />
                <Transition mounted={clicked} transition={slideUpSkew} duration={500} timingFunction="ease">
                    {(styles) => (
                        <Overlay className={classes.projectOverlay} style={styles} backgroundOpacity={0}>
                            <Grid gutter="xs">
                                <Grid.Col span={12}>
                                    {project.title.map((titlePart, index) => (
                                        <Text key={project.id + "-exp-title-text-" + index}
                                              className={classes.projectOverlayTitle}
                                              c={project.color[index]} component="span">
                                            {titlePart}
                                        </Text>
                                    ))}
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Flex gap="xs">
                                        <Button leftSection={<IconExternalLink/>}
                                                component="a" href={project.link} target="_blank" variant="light"
                                                color="teal" radius="md" fullWidth>
                                            Link
                                        </Button>
                                        <Button onClick={() => {
                                            setClicked(false)
                                        }} variant="light" color="blue" radius="md" fullWidth>
                                            Less Info
                                        </Button>
                                    </Flex>
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <Text size="md" pb={{base: 100, sm: 0}}>
                                        {project.description}
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Overlay>
                    )}
                </Transition>
                <Transition mounted={!clicked} transition={slideDownSkew} duration={500} timingFunction="ease">
                    {(styles) => (
                        <Overlay className={classes.projectOverlay} style={styles} backgroundOpacity={0}>
                            <Badge style={styles} className={classes.projectType} radius={6.5} size="xl"
                                   variant="gradient" gradient={gradients[project.type]}>
                                {project.type}
                            </Badge>
                            <div style={styles} className={classes.projectContent}>
                                <Grid columns={24} gutter={{ base: 5, sm: 0 }} justify="space-between">
                                    <Grid.Col span={24}>
                                        {project.title.map((titlePart, index) => (
                                            <Text key={project.id + "-title-text-" + index}
                                                  className={classes.projectTitle} c={project.color[index]}
                                                  component="span">
                                                {titlePart}
                                            </Text>
                                        ))}
                                    </Grid.Col>
                                    <Grid.Col span={{base: 24, sm: 16}}>
                                        <Text lineClamp={4} size="sm">
                                            {project.description}
                                        </Text>
                                    </Grid.Col>
                                    <Grid.Col span={{base: 24, sm: 7}}>
                                        <Flex gap="xs" justify="flex-end" direction={{sm: "column"}}>
                                            <Button leftSection={<IconExternalLink/>}
                                                    component="a" href={project.link} target="_blank"
                                                    variant="light" color="teal" radius="md" fullWidth>
                                                Link
                                            </Button>
                                            <Button onClick={() => {
                                                setClicked(true)
                                            }} variant="light" color="blue" radius="md" fullWidth>
                                                More Info
                                            </Button>
                                        </Flex>
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
