import { createStyles, rem, getStylesRef } from '@mantine/core';

export default createStyles((theme) => ({
  projectCard: {
    height: rem(280),
    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.25)',
    },
  },
  title: {
    fontSize: 125,
    fontWeight: 900,
    letterSpacing: -1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 75,
    },
  },
  projectTitle: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: -1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 30,
    },
  },
  projectOverlayTitle: {
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: -1,
    lineHeight: 1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 30,
    },
  },
  projectType: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },
  projectButtons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  projectImage: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },
  projectOverlay: {
    bottom: -1,
    padding: rem(15),
  },
  projectContent: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  projectExpContent: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
  },
  divider: {
    width: "50%",

    [theme.fn.smallerThan('md')]: {
    width: "80%",
    },
  },
  buttonSize: {
    width: rem(110),
    [theme.fn.smallerThan('lg')]: {
    width: "100%",
    },
  },
  buttonSizeOverlay: {
    width: rem(110),
  },
  angle: {
    position: 'relative',
    zIndex: 1,
    '&::before': {
      background: 'inherit',
      content: '""',
      display: 'block',
      height: '50%',
      left: 0,
      position: 'absolute',
      right: 0,
      zIndex: -1,
      backfaceVisibility: 'hidden',
      top: "-7vh",
      transform: 'skewY(5deg)',
      transformOrigin: '100% 0',
      boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.6)',
    },
  },
}));
