import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontSize: 125,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      width: "90%",
      fontSize: 75,
    },
  },
  grid: {
    [theme.fn.smallerThan('md')]: {
      width: "90%",
    },
  },
  headerBox: {
    paddingTop: "25vh",
    [theme.fn.smallerThan('md')]: {
      paddingTop: "5vh",
      marginBottom: "2vh",
    },
  },
}));
