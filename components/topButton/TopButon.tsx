'use client';
import {ActionIcon, Affix, rem, Transition} from "@mantine/core";
import {IconArrowBigUp} from "@tabler/icons-react";
import {useWindowScroll} from "@mantine/hooks";

export function TopButton() {
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <Affix position={{bottom: rem(20), right: rem(20)}}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <ActionIcon title="My Github" color="cyan.9" variant="filled" size="3rem" style={transitionStyles}
                                onClick={() => scrollTo({y: 0})}>
                        <IconArrowBigUp size="2.5rem"/>
                    </ActionIcon>
                )}
            </Transition>
        </Affix>
    );
}

