import Image from 'next/image'

type SearchInputProps = {
  openFilters: () => void
}

export const SearchInput = ({ openFilters }: SearchInputProps) => {
  return (
    <div className="bg-pearl w-[100%] h-[111px] shadow-lg rounded-xl relative">
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
          <button className="flex items-center" onClick={openFilters}>
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
