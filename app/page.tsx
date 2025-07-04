import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
        <div className="pt-10">
            <h1 className="text-5xl font-bold text-dark text-center mb-10" >
                Len tak ľahko to nepôjde :D
            </h1>
            <p className="mb-10 text-xl m-auto max-w-[650px] text-center">Keďže už máš čo-to odžité, rozhodli sme sa pripraviť pre teba malý test. Nájdeš v ňom otázky, ktoré by ti s úsmevom položili tvoji najbližší.</p>
            <Link className='m-auto rounded-2xl border text-white font-bold bg-green-500 py-6 px-10 text-xl block w-fit hover:border-green-500 hover:bg-transparent hover:text-green-500 transition duration-300' href={'/test-gabs'}>Začni test</Link>
        </div >
    </div >
  );
}
