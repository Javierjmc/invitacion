import Fecha from "./components/Fecha"
import Form from "./components/Form"
import Ubicacion from "./components/Ubicacion"
import banner from "./assets/banner.jpg"
import fondo from "./assets/fondo-2.jpg"

const App = () => {  
  return (
    <div style={{"backgroundImage":`url(${fondo})`}} className="min-h-screen flex justify-center items-center bg-cover">
      <main className="w-96 rounded-lg bg-[rgb(255,255,255)] text-[rgb(73,162,182)] shadow-md overflow-hidden">
        <header style={{"backgroundImage":`url(${banner})`}} className="flex flex-col items-center py-32 bg-cover">
        </header>      
        <Fecha/>
        <section className="px-6 pb-6 flex flex-col gap-6">
          <Form/>   
          <Ubicacion/>      
        </section>        
      </main>
    </div>
  )
}

export default App
