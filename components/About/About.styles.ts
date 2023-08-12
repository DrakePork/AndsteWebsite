import {createStyles} from '@mantine/core';

export default createStyles((theme) => ({
    title: {
        fontSize: 125,
        fontWeight: 900,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 75,
        },
    },
    divider: {
        width: "50%",

        [theme.fn.smallerThan('md')]: {
            width: "80%",
        },
    },
    angle: {
        position: 'relative',
        zIndex: 1,
        '&::before, &::after': {
            background: 'inherit',
            content: '""',
            display: 'block',
            height: '50%',
            left: 0,
            position: 'absolute',
            right: 0,
            zIndex: -1,
            backfaceVisibility: 'hidden',
        },
        '&::before': {
            top: "-7vh",
            transform: 'skewY(5deg)',
            transformOrigin: '100% 0',
            boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.6)',
        },
        '&::after': {
            bottom: 0,
            transform: 'skewY(-1.5deg)',
            transformOrigin: '100%',
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.6)',
        },
    },
}));
