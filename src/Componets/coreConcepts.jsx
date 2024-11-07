import {CORE_CONCEPTS} from "./Data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">


            <h2>Core concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((coreconceptItem) => <CoreConcept key={coreconceptItem.title}{...coreconceptItem}
                />)}

            </ul>
        </section>
    )
}