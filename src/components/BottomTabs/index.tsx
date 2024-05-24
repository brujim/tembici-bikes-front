export const BottomTabs = () => {
  return (
    <div className="bg-pearl w-[100%] h-[92px] flex justify-between">
      <div className=" w-[50%] flex justify-center pt-4 border-t-4 border-sapphire">
        <p className="font-bold font-main text-[18px]">Sem tarifa</p>
      </div>
      <div className=" w-[50%] flex justify-center pt-4">
        <p className="font-bold font-main text-[18px] text-inactive">
          Com tarifa
        </p>
      </div>
    </div>
  )
}
