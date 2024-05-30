import Image from 'next/image'

type UnderstandModalProps = {
  setter: () => void
}

export const UnderstandModal = ({ setter }: UnderstandModalProps) => {
  return (
    <div className="bg-iron/70 w-[100vw] h-[100vh]">

      <div className="w-[100%] h-[50%] bg-pearl absolute bottom-20 px-6 py-6">
        <Image
          src="/images/filter/itau.png"
          alt="primeiros passos"
          width={75}
          height={38}
        />
        <h3 className="font-main text-[18px] font-bold">
          Entenda as tarifas de retirada
        </h3>
        <p className="font-main mt-3 leading-5  mb-6">
          As cores e os ícone no mapa representam o valor da taxa de retirada
        </p>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/no-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Sem tarifa</p>
        </div>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/low-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Tarifa baixa</p>
        </div>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/median-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Tarifa média</p>
        </div>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/high-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Tarifa alta</p>
        </div>


        <button
          className="bg-cooper w-[100%] py-4 text-pearl font-main font-semibold rounded-full mt-6"
          onClick={setter}
        >
          Selecionar filtros
        </button> 
      </div>
    </div>
  )
}
