import { useState, useRef } from "react"
import GraciasAsistir from "./GraciasAsistir"
import { collection , addDoc} from "firebase/firestore"
import { db } from "../firebase/config"

const Form = () => {
  const [gracias,setGracias]=useState(false)
  const inputRef = useRef(null)

  const handleSubmit=(event)=>{
    event.preventDefault()
    if (inputRef.current.value) {
      event.target.classList.toggle("hidden")
      setGracias(!gracias)
      const nombresRef = collection(db, "nombres")
      addDoc(nombresRef, {nombre:inputRef.current.value})
    } else{
      inputRef.current.classList.toggle("border-red-700")
    }

    
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col">
        <span className="font-semibold">Nombre</span>
        <input ref={inputRef} className="border border-opacity-40 border-[rgb(73,162,182)] px-2 py-2 rounded-lg outline-none focus:border-[rgb(73,162,182)]" type="text" placeholder="Tu nombre"/>
      </label>
      <button className="bg-[rgb(73,162,182)] transition hover:bg-[rgb(100,164,179)] py-2 rounded-lg text-[rgb(255,255,255)] font-semibold">Confirmar Asistencia</button>      
    </form>
    {gracias && <GraciasAsistir/>}
    </>
  )
}
export default Form