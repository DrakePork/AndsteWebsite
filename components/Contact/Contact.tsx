import { Grid, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

export function Contact() {
  return (
      <Grid grow gutter="2.5vw">
        <Grid.Col span={1}>
          <ActionIcon color="dark.3" variant="filled" size="5rem" component="a" href="https://mantine.dev/core/">
            <IconBrandGithub size="3.5rem"/>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={1}>
          <ActionIcon color="blue" variant="filled" size="5rem" component="a" href="https://mantine.dev/core/">
            <IconBrandLinkedin size="3.5rem"/>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={1}>
          <ActionIcon color="teal.6" variant="filled" size="5rem" component="a" href="https://mantine.dev/core/">
            <IconMail size="3.5rem"/>
          </ActionIcon>
        </Grid.Col>
      </Grid>
  );
}
