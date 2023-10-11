import {Title, Text, Container, Divider, Center, Box} from '@mantine/core';
import classes from './About.module.css';

export function About() {
    return (
        <Box style={{minHeight: "100vh"}} className={classes.angle} bg="#212529" pb={50}>
            <Title className={classes.title}>
                <Text id="about" inherit variant="gradient" gradient={{from: '#da77f2', to: '#9c36b5'}}
                      component="span">
                    About
                </Text>
                <Center><Divider className={classes.divider} my="md" size="xl"/></Center>
            </Title>
            <Container>
                <Text inherit component="span">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                    Varius vel pharetra vel turpis nunc. Elementum sagittis vitae et leo. Diam donec adipiscing
                    tristique risus.
                    At varius vel pharetra vel turpis nunc. Id volutpat lacus laoreet non curabitur gravida.
                    Diam sollicitudin tempor id eu nisl. Viverra nam libero justo laoreet sit amet cursus sit. Eu
                    lobortis elementum nibh tellus.
                    Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sit amet nisl suscipit
                    adipiscing bibendum est ultricies.
                    Aliquam ultrices sagittis orci a. Aliquam eleifend mi in nulla.
                </Text>
            </Container>
        </Box>
    );
}
