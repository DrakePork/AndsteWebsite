import {Analytics} from '@vercel/analytics/react';
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import {Projects} from "@/components/projects/Projects";


export default function Home() {
return (
<>
    <Header/>
    <Projects/>
    <Footer/>
    <Analytics/>
</>
)
}
