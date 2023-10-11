import {Text, ActionIcon, Group, HoverCard, HoverCardTarget, HoverCardDropdown} from '@mantine/core';
import {IconBrandGithub, IconBrandLinkedin, IconMail} from "@tabler/icons-react";
import classes from './Contact.module.css';

interface ContactSettings {
    size: string;
    iconVariant: string;
}

export function Contact({size, iconVariant}: ContactSettings) {
    return (
        <Group gap="xl">
            <HoverCard shadow="md" arrowPosition="center" withArrow={true} position="bottom-end">
                <HoverCardTarget>
                    <ActionIcon className={classes.contactButton} title="My Github" color="dark.3" variant={iconVariant} size={size} component="a" target="_blank" href="https://github.com/DrakePork">
                        <IconBrandGithub size="3.5rem"/>
                    </ActionIcon>
                </HoverCardTarget>
                <HoverCardDropdown>
                    <Text size="sm">
                        github.com/DrakePork
                    </Text>
                </HoverCardDropdown>
            </HoverCard>
            <HoverCard shadow="md" arrowPosition="center" withArrow={true}>
                <HoverCardTarget>
                    <ActionIcon className={classes.contactButton} title="My Linkedin" color="blue" variant={iconVariant} size={size} component="a" target="_blank" href="https://www.linkedin.com/in/andreaspolden">
                        <IconBrandLinkedin size="3.5rem"/>
                    </ActionIcon>
                </HoverCardTarget>
                <HoverCardDropdown>
                    <Text size="sm">
                        andste.no/linkedin
                    </Text>
                </HoverCardDropdown>
            </HoverCard>
            <HoverCard shadow="md" arrowPosition="center" withArrow={true} position="bottom-start">
                <HoverCardTarget>
                    <ActionIcon className={classes.contactButton} title="My Email" color="teal.6" variant={iconVariant} size={size} component="a" target="_blank" href="mailto:andreaspolden@andste.no">
                        <IconMail size="3.5rem"/>
                    </ActionIcon>
                </HoverCardTarget>
                <HoverCardDropdown>
                    <Text size="sm">
                        andreaspolden@andste.no
                    </Text>
                </HoverCardDropdown>
            </HoverCard>
        </Group>
    );
}
