import Link from "next/link"

const Contato = () => {
  return (
    <>
      <div className="mb-10">Contato</div>
      <Link href={"/"} className="h-5 w-20 p-4 rounded-sm bg-red-700 text-white">Voltar</Link>
    </>
  )
}

export default Contato