import {Text, ActionIcon, Group, HoverCard} from '@mantine/core';
import {IconBrandGithub, IconBrandLinkedin, IconMail} from "@tabler/icons";
import useStyles from './Contact.styles';

export function Contact() {
    const {classes} = useStyles();
    return (
        <Group spacing="xl">
            <HoverCard shadow="md" arrowPosition="center" withArrow={true} position="bottom-end">
                <HoverCard.Target>
                    <ActionIcon className={classes.contactButton} title="My Github" color="dark.3" variant="filled" size="5rem" component="a" target="_blank" href="https://github.com/DrakePork">
                        <IconBrandGithub size="3.5rem"/>
                    </ActionIcon>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <Text size="sm">
                        github.com/DrakePork
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard shadow="md" arrowPosition="center" withArrow={true}>
                <HoverCard.Target>
                    <ActionIcon className={classes.contactButton} title="My Linkedin" color="blue" variant="filled" size="5rem" component="a" target="_blank" href="https://www.linkedin.com/in/andreas-polden-steinsland-0191941b5/">
                        <IconBrandLinkedin size="3.5rem"/>
                    </ActionIcon>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <Text size="sm">
                        andste.no/linkedin
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard shadow="md" arrowPosition="center" withArrow={true} position="bottom-start">
                <HoverCard.Target>
                    <ActionIcon className={classes.contactButton} title="My Email" color="teal.6" variant="filled" size="5rem" component="a" target="_blank" href="mailto:andreaspolden@andste.no">
                        <IconMail size="3.5rem"/>
                    </ActionIcon>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <Text size="sm">
                        andreaspolden@andste.no
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    );
}
