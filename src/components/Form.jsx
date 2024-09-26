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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label className="flex flex-col">
        <span className="font-semibold">Nombre</span>
        <input ref={inputRef} className="border border-opacity-40 border-[rgb(73,162,182)] px-2 py-2 rounded-lg outline-none focus:border-[rgb(73,162,182)]" type="text" placeholder="Ingrese nombre"/>
      </label>
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <button className="bg-[rgb(73,162,182)] transition hover:bg-[rgb(100,164,179)] py-2 rounded-lg text-[rgb(255,255,255)] font-semibold shadow-md w-full">
          Confirmar Asistencia
        </button>
      </div>
    </form>
    {gracias && <GraciasAsistir/>}
    </>
  )
}
export default Form