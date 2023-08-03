import { Center, Box } from '@mantine/core';
import useStyles from './Footer.styles';
import {Contact} from "../Contact/Contact";

export function Footer() {
  const { classes } = useStyles();
  return (
      <Box bg="#212529">
          <Center className={classes.footer}>
              <Contact/>
          </Center>
      </Box>
  );
}
