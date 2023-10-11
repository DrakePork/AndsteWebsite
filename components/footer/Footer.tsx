import {Box, Flex } from '@mantine/core';
import classes from './Footer.module.css';
import {Contact} from "@/components/contact/Contact";

export function Footer() {
  return (
      <Box className={classes.footer}>
          <Flex gap="20" align="center" direction="column">
              <Contact size="3rem" iconVariant="transparent"/>
          </Flex>
      </Box>
  );
}
