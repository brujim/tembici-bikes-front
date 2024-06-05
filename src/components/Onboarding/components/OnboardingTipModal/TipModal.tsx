import Image from 'next/image'
import { useRouter } from 'next/router'

export const TipModal = () => {
  const router = useRouter()
  return (
    <div className="bg-iron/70 w-[100vw] h-[100vh]">
      <div className="absolute top-[5.5rem] right-7 bg-pearl w-[55px] h-[55px] rounded-md flex items-center justify-center">
        <Image
          src="/images/search/filter.svg"
          alt="buscar"
          width={40}
          height={40}
        />
      </div>
      <div className="absolute top-36 right-9">
        <Image
          src="/images/onboarding/poligono.svg"
          width={43}
          height={37}
          alt="poligono"
        />
      </div>
      <div className="w-[90%] h-[230px] rounded-xl bg-pearl absolute top-44 right-5 px-10 py-6">
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
    </div>
  )
}
