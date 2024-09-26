import { useState } from "react"
import DescripcionUbicacion from "./DescripcionUbicacion"

const Ubicacion = () => {
  const [ubicacion, setUbicacion]=useState(false)

  
  const handleClick=()=>{
    setUbicacion(!ubicacion)
  }
  return (
    <>
      <button onClick={handleClick} className="bg-[rgb(227,239,255)] transition hover:bg-[rgb(210,229,255)] py-2 rounded-lg text-[rgb(73,162,182)] font-semibold flex justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <span>{ubicacion ? "Ocultar Ubicación" :"Ver Ubicacion"}</span>
      </button>
      {ubicacion && <DescripcionUbicacion/>}
    </>
  )
}

export default Ubicacion