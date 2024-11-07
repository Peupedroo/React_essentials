import TabButton from "./TabButton";
import {EXAMPLES} from "./Data";
import {useState} from "react";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] =useState();
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);

        console.log(selectedTopic);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === "components"}
                           onSelect={() => handleSelect("components")}>components</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>jsx</TabButton>
                <TabButton isSelected={selectedTopic === "props"}
                           onSelect={() => handleSelect("props")}>props</TabButton>
                <TabButton isSelected={selectedTopic === "state"}
                           onSelect={() => handleSelect("state")}>state</TabButton>
            </menu>
            {!selectedTopic && <p>Please select a topic. </p>}
            {selectedTopic && (<div id="tab-content">

                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                          <code>
                            {EXAMPLES[selectedTopic].code}
                          </code>
                      </pre>
                </div>
            )}

        </section>
    )
}