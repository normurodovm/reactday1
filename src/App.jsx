import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainCard } from './components/card/main-card'
import { Header } from './components/header/header'
import { Footerfunc } from './footer/footer'
import cardimg1 from '/public/card-img-1.png'
import cardimg2 from '/public/card-img-2.png'
import cardimg3 from '/public/card-img-3.png'
import cardimg4 from '/public/card-img-4.png'
import cardimg5 from '/public/card-img-5.png'
import cardimg6 from '/public/card-img-6.png'
import cardimg7 from '/public/card-img-7.png'
import cardimg8 from '/public/card-img-5.png'
import cardimg9 from '/public/card-img-9.png'
import cardimg10 from '/public/card-img-10.png'
import groups from '/public/group-images.png'
import icon1 from '/icon1.svg'
import icon2 from '/icon2.svg'
import headericon1 from '/public/header-icon1.svg'
import headericon2 from '/header-icon2.svg'
import headericon3 from '/header-icon-3.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mx-auto m-0 p-0 box-border max-w-[1300px] container2">
      <Header img={headericon1} title={"Тезкор етказиш"}  />
      <Header img={headericon2} title={"Тўлов химояси"}  />
      <Header img={headericon1} title={"Юқори сифат"}  />
      <Header img={headericon3} title={"Энг сара китоблар"}  />
    </div>
    <div className="container mx-auto m-0 p-0 box-border max-w-[1300px]">
    <h2 className="font-semibold text-4xl leading-[1.25] text-[#242424] mt-16 mb-8">Рукнлар</h2>
      <img src={groups} alt="img" />
    </div>
    <div className="container mx-auto m-0 p-0 box-border max-w-[1300px]">

    <h2 className="font-semibold text-4xl leading-[1.25] text-[#242424] mt-16 mb-8">Янги қўшилганлар</h2>
      <div className="flex flex-wrap gap-[30px]">
        <MainCard img={cardimg1} title={"1984"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg2} title={"Rich dad poor dad"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg3} title={"Код 8"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg4} title={"Даниел КИЗ"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg5} title={"Бепарволикнинг"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
      </div>
    </div>
    <div className="container mx-auto m-0 p-0 box-border max-w-[1300px]">
      <h2 className="font-semibold text-4xl leading-[1.25] text-[#242424] mt-16 mb-8">Аудио китоблар</h2>
        <div className="flex flex-wrap gap-[30px]">
        <MainCard img={cardimg6} title={"1984"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg7} title={"Rich dad poor dad"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg8} title={"Код 8"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg9} title={"Даниел КИЗ"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg10} title={"Бепарволикнинг"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        </div>
        </div>
        <section>
          <Footerfunc/>
        </section>
    </>
  )
}

export default App
