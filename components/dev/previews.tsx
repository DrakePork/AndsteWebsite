import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import {Contact} from "../Contact/Contact";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Contact">
                <Contact/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;