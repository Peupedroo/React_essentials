import Header from "./Componets/Header";
import Examples from "./Componets/Examples";
import CoreConcepts from "./Componets/coreConcepts";


function App() {

  return (
      <div>

          <Header/>
          <main>
             <CoreConcepts/>
             <Examples />
          </main>
      </div>
  )
      ;
}

export default App;
