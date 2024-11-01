import {useState} from "react";

import {CORE_CONCEPTS} from "./Componets/Data.js";
import Header from "./Componets/Header";
import CoreConcept from "./Componets/CoreConcept";
import TabButton from "./Componets/TabButton";
import {EXAMPLES} from "./Componets/Data.js";



function App() {
    const [selectedTopic, setSelectedTopic] =useState();
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);

        console.log(selectedTopic);
    }
  return (
      <div>

          <Header/>
          <main>
              <section id="core-concepts">


              <h2>Core concepts</h2>
              <ul>
                  <CoreConcept {...CORE_CONCEPTS[0]}
                  />
                  <CoreConcept{...CORE_CONCEPTS[1]}
                  />
                  <CoreConcept{...CORE_CONCEPTS[2]}
                  />
                  <CoreConcept
                      title={CORE_CONCEPTS[3].title}
                      description={CORE_CONCEPTS[3].description}
                      image ={CORE_CONCEPTS[3].image}
                  />
              </ul>
              </section>
              <section id= "examples">
                  <h2>Examples</h2>
                  <menu>
                      <TabButton onSelect={() => handleSelect("components")}>components</TabButton>
                      <TabButton onSelect={() => handleSelect("jsx")}>jsx</TabButton>
                      <TabButton onSelect={() => handleSelect("props")}>props</TabButton>
                      <TabButton onSelect={() => handleSelect("state")}>state</TabButton>
                  </menu>
                  {!selectedTopic &&<p>Please select a topic. </p>}
                  {selectedTopic &&(  <div id="tab-content">

                      <h3>{EXAMPLES[selectedTopic].title}</h3>
                      <p>{EXAMPLES[selectedTopic].description}</p>
                      <pre>
                          <code>
                            {EXAMPLES[selectedTopic].code}
                          </code>
                      </pre>  </div>
                  )}

              </section>
          </main>
      </div>
  )
      ;
}

export default App;