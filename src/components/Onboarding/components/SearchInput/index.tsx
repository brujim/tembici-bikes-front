import Image from 'next/image'
import { useRouter } from 'next/router'

export const SearchInput = () => {
  const router = useRouter()

  return (
    <div className="bg-pearl w-[100%] h-[111px] shadow-lg rounded-xl relative max-w-[500px]">
      <div className="absolute top-28 right-5 hidden md:block">
        <Image
          src="/images/onboarding/poligono.svg"
          width={43}
          height={37}
          alt="poligono"
        />
      </div>
      <div className="w-[90%] h-[230px] rounded-xl bg-pearl absolute top-36 right-2 px-10 py-6 max-w-[400px] shadow-lg hidden md:block">
        <h3 className="font-main text-[20px] font-bold">
          Selecione os filtros
        </h3>
        <p className="font-main mt-3 leading-5">
          Comece selecionando os filtros para depois visualizar as tarifas de
          retirada nas estações.
        </p>
        <button
          className="bg-cooper w-[100%] py-4 text-pearl font-main font-semibold rounded-full mt-6"
          onClick={() => {
            localStorage.setItem('onboarding', 'first')
            router.push('/')
          }}
        >
          Selecionar filtros
        </button>
      </div>
      <div className="flex flex-col items-center justify-between h-full py-4">
        <h3 className="font-main font-bold text-[18px]">
          Pesquisa de Preço Dinâmico
        </h3>
        <span className="absolute top-[4.1rem] left-7">
          <Image
            src="/images/search/search.svg"
            alt="buscar"
            width={20}
            height={20}
          />
        </span>
        <div className="flex justify-between px-4 items-center gap-4 w-full">
          <input
            type="text"
            className="bg-silver rounded-md w-[85%] h-[40px] pl-10 font-main"
            placeholder="Pesquise uma estação aqui"
          />
          <button className="flex items-center">
            <Image
              src="/images/search/filter.svg"
              alt="buscar"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
