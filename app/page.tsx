import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <div className='flex h-screen items-center justify-center'>
        <div>
          <h1 className='text-dark mb-10 text-center text-5xl font-bold'>
            Len tak ľahko to nepôjde :D
          </h1>
          <p className='m-auto mb-10 max-w-[650px] text-center text-xl'>
            Keďže už máš čo-to odžité, rozhodli sme sa pripraviť pre teba malý
            test. Nájdeš v ňom otázky, ktoré by ti s úsmevom položili tvoji
            najbližší.
          </p>
          <Link
            className='m-auto block w-fit rounded-3xl border bg-[#401316] px-10 py-6 text-xl font-bold text-white transition duration-300 hover:border-[#401316] hover:bg-transparent hover:text-[#401316]'
            href={'/test-gabs'}
          >
            Začni test
          </Link>
        </div>
      </div>
    </div>
  );
}
