const DescripcionUbicacion = () => {
  return (
    <section className="bg-[rgb(227,239,255)] py-6 rounded-lg flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <p className="font-bold">Apartamendo "Pulvett Valera"</p>
      <p className="text-sm">Sector Rio Aro</p>
      <p className="text-sm">Urbanmización Caroni Plaza</p>
      <a className="underline hover:text-[rgb(90,148,243)] transition" href="">Ver en Google map</a>

    </section>
  )
}

export default DescripcionUbicacion