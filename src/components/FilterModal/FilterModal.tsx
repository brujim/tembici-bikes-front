import Image from 'next/image'

export const FilterModal = () => {
  return (
    <div className="absolute bottom-0">
      <img src="/images/filter/model.png" alt="itau logo" />
      <div className="bg-iron/70 w-[100vw] h-full absolute top-0">
        <div className="w-[260px] h-[180px] rounded-lg bg-pearl absolute top-[32.5rem] left-28 px-6 flex flex-col items-center justify-center">
          <p className="font-main leading-5">
            Para realizar uma pesquisa, primeiro selecione{' '}
            <strong>todos os filtros.</strong>
          </p>
          <button
            className="bg-cooper w-[100%] py-3 text-pearl font-main font-semibold rounded-full mt-4"
            onClick={() => console.log('oi')}
          >
            Entendi
          </button>
        </div>
        <div className="absolute top-[43.2rem] left-[19rem]">
          <Image
            src="/images/onboarding/poligono-d.svg"
            width={43}
            height={37}
            alt="tip box"
          />
        </div>
      </div>
    </div>
  )
}
