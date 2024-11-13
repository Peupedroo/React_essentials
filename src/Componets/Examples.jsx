import TabButton from "./TabButton";
import Section from "./Section";
import {useState} from "react";
import Tabs from "./Tabs";
import { EXAMPLES } from './Data.js';

export default function Examples(){
    const [selectedTopic, setSelectedTopic] =useState();
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);

        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
            </div>
        );
    }
    return (
        <Section title = "Examples "id="examples">
            <h2>Examples</h2>
            <Tabs
                buttonsContainer= "menu"
                buttons={   <> <TabButton isSelected={selectedTopic === "components"}
                                         onClick={() => handleSelect("components")}>components</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"}
                  onClick={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === "props"}
                       onClick={() => handleSelect("props")}>props</TabButton>
            <TabButton isSelected={selectedTopic === "state"}
                       onClick={() => handleSelect("state")}>state</TabButton>
            </>}>
                {tabContent}
            </Tabs>
            <menu>

            </menu>

        </Section>
    )
}