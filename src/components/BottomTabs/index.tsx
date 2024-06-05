type BottomTabsProps = {
  tariff: string
  setter: (param: string) => void
  load: (param: boolean) => void
  filtersUpdate: (param: boolean) => void
}
export const BottomTabs = ({
  tariff,
  setter,
  load,
  filtersUpdate
}: BottomTabsProps) => {
  return (
    <div className="bg-pearl w-[100%] h-[108px] flex justify-between">
      <div
        className={`w-[50%] flex justify-center pt-4  ${tariff === 'none' && 'border-t-4 border-sapphire'}`}
        onClick={() => {
          setter('none')
          load(true)
          filtersUpdate(true)
        }}
      >
        <p
          className={`font-semibold font-main text-[18px] text-inactive ${tariff === 'none' ? 'text-iron' : 'text-inactive'}`}
        >
          Sem tarifa
        </p>
      </div>
      <div
        className={`w-[50%] flex justify-center pt-4  ${tariff === 'tariff' && 'border-t-4 border-sapphire'}`}
        onClick={() => {
          setter('tariff')
          load(true)
          filtersUpdate(true)
        }}
      >
        <p
          className={`font-semibold font-main text-[18px] text-inactive ${tariff === 'tariff' ? 'text-iron' : 'text-inactive'}`}
        >
          Com tarifa
        </p>
      </div>
    </div>
  )
}
