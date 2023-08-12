import {ActionIcon, Affix, MantineProvider, rem, Transition} from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '../components/Header/Header';
import { Projects } from '../components/Projects/Projects';
import {useWindowScroll} from "@mantine/hooks";
import { IconArrowBigUp } from '@tabler/icons-react';

export default function HomePage() {
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
            <Header/>
            <Projects/>
            <Analytics/>
            <Affix position={{ bottom: rem(20), right: rem(20) }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon title="My Github" color="cyan.9" variant="filled" size="3rem" style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
                            <IconArrowBigUp size="2.5rem"/>
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </MantineProvider>
    );
}
