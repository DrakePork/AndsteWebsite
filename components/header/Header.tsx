import {Title, Text, Grid, Button, Center, Box, GridCol} from '@mantine/core';
import classes from './Header.module.css';
import {Contact} from "@/components/contact/Contact";
import Link from "next/link";
export function Header() {
  return (
      <Box className={classes.headerBox} h="100vh">
          <Center>
              <Title className={classes.title}>
                  <Text inherit variant="gradient" gradient={{ from: '#99e9f2', to: '#087f5b'}} component="span">
                      Hi, I&apos;m Andreas
                  </Text>
              </Title>
          </Center>
          <Text c="dimmed" ta="center" size="lg" style={{ maxWidth: 580 }} mx="auto" mt="xl" mb={50}>
              Student, Developer & Musician
          </Text>
          <Center>
              <Grid className={classes.grid} grow gutter="xl">
                  <GridCol m={1} span={6}>
                      <Button component={Link} href="#projects" radius="md" size="xl" fullWidth variant="outline" color="orange">
                          Projects
                      </Button>
                  </GridCol>
                  <GridCol span={12}>
                      <Center>
                          <Contact size="5rem" iconVariant="filled"/>
                      </Center>
                  </GridCol>
              </Grid>
          </Center>
      </Box>
  );
}
