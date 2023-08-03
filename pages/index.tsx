import {
  MantineProvider,
} from '@mantine/core';

import { Header } from '../components/Header/Header';
import { Projects } from '../components/Projects/Projects';
import { About } from '../components/About/About';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </MantineProvider>
  );
}
