import app1 from '/public/app1-icon.svg'
import app2 from '/public/app2-icon.svg'
import group1 from '/public/group1.png'
import group0 from '/public/group0.png'
import icons from '/public/icons.png'
export const Footerfunc= () => {
    return <div className=" pt-24">
        <div className="bg-sky-300">
            <div className="mx-auto m-0 p-0 box-border max-w-[1300px] p-7">
                <ul className="flex justify-start gap-40 mt-5">
                    <li className="w-[200px]">
                        <p className="font-bold text-[20px] text-[#11142d]">Платформа хақида</p>
                    </li>
                    <li className="w-[200px] ">
                    <p className="font-bold text-[20px] text-[#11142d]">Обуна хақида</p>
                    </li>
                    <li className="w-[200px] ">
                    <p className="font-bold text-[20px] text-[#11142d]">Китоблар</p>
                    </li>
                    <li className="w-[200px]">
                    <p className="font-bold text-[20px] text-[#11142d]">Мобил илова</p>
                    </li>
                </ul>
                <ul className="flex justify-start gap-40  mt-5   ">
                    <li className="w-[200px]">
                        <p className="font-normal text-[18px] text-[#11142d] ">Liber ўзи нима?</p>
                    </li>
                    <li className="w-[200px]">
                    <p className="font-normal text-[18px] text-[#11142d] ">Обуна бўлиш</p>
                    </li>
                    <li className="w-[200px]">
                    <p className="font-normal text-[18px] text-[#11142d] ">Аудио китоблар</p>
                    </li>
                    <li className="w-[200px]">
                        <img src={app2} alt="img" />
                    </li>
                </ul>
                <ul className="flex justify-start gap-40 mt-5">
                    <li className="w-[200px]">
                        <p className="font-normal text-[18px] text-[#11142d] ">Фойдаланиш шартлари</p>
                    </li>
                    <li className="w-[200px]">
                    <p className="font-normal text-[18px] text-[#11142d] ">Қандай тўлаш</p>
                    </li>
                    <li className="w-[200px]">
                    <p className="font-normal text-[18px] text-[#11142d] ">Электрон китоблар</p>
                    </li>
                    <li className="w-[200px]">
                    <img src={app1} alt="img" />
                    </li>
                </ul>
                <ul className="flex justify-between gap-40 mt-5">
                    <li className="w-[200px]">
                        <p className="font-normal text-[18px] text-[#11142d] ">Ёрдам</p>
                    </li>
                    <li className="w-[200px]">
                    <p className="font-normal text-[18px] text-[#11142d] ">Китоблар</p>
                    </li>
                </ul>

            </div>
        </div>
        <div className=" bg-blue-950">

        <div className="mx-auto m-0 p-0 box-border max-w-[1300px] ">
            <ul className=' flex gap-56 p-5'>
                <li>
                    <a className=' no-underline  text-cyan-50' href="#">Ижтимоий тармоқлар</a>
                    </li>
                <li>
                    <a className=' no-underline  text-cyan-50' href="#">Боғланиш</a>
                    </li>
                <li>
                    <a className=' no-underline  text-cyan-50' href="#">Биз қабул қиламиз</a>
                    </li>
            </ul>
            <ul className='flex gap-32 align-middle'>
                <li>
                <img className='w-56' src={icons} alt="" />
                </li>
                <li>
                    <p className='text-gray-400'>+998 90 253 77 53     support@liber.uz</p>
                </li>
                <li className=' flex gap-3'>
                    <img src={group1} alt="img" />
                    <img src={group0} alt="img" />
                    <img src={group1} alt="img" />
                </li>
            </ul>
        </div>
        </div>
    </div>
}