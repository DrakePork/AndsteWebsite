import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    contactButton: {
        transition: "background-color ease 0.05s, transform ease 0.1s",
        [`&:hover`]: {
            transform: "translateY(-5px)"
        },
    },
}))
