import { MouseEventHandler, useEffect, useState } from 'react'
import { filters } from '../../data/filters'
import { ModalSection } from './components/ModalSection'
import { FiltersTypes } from '../../types/Filters/filtes'

const Reveal = require('react-reveal/Reveal')

type FilterModalProps = {
  closeFilter: () => void
  setters: any[]
  states: any[]
  clearFilters: any
}

export const FilterModal = ({
  closeFilter,
  setters,
  states,
  clearFilters
}: FilterModalProps) => {
  return (
    <Reveal>
      <div className="w-[100vw] h-[100vh] bg-stone/70">
        <div className="bg-pearl h-[90vh] absolute bottom-0 w-[100vw] overflow-y-scroll">
          <div className="flex justify-between items-center pt-5 px-4">
            <img src="/images/filter/itau.png" />
            <img src="/images/filter/x.png" onClick={closeFilter} />
          </div>
          <h3 className="font-main font-extrabold text-[18px] px-4 mt-4 py-2">
            Selecione abaixo os filtros para encontrar a estação ideal para
            você:
          </h3>
          <form className="">
            {filters.map((filter, index) => {
              return (
                <ModalSection
                  key={index}
                  types={filter.type}
                  answer={filter.answer}
                  options={filter.options}
                  values={filter.value}
                  setters={[...setters]}
                  states={[...states]}
                  indexes={index}
                />
              )
            })}
          </form>
          <div className="flex justify-between items-center px-10 border-t-[1px] border-steel py-10 mt-4">
            <p
              className="font-main text-cooper font-semibold"
              onClick={clearFilters}
            >
              Limpar filtros
            </p>
            <button className="bg-cooper px-8 py-4 rounded-full text-pearl font-main">
              Pesquisar estações
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
