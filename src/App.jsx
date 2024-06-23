import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainCard } from './components/card/main-card'
import { Header } from './components/header/header'
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
import icon1 from '/icon1.svg'
import icon2 from '/icon2.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">

    <h2 className="title">Янги қўшилганлар</h2>
      <div className='product'>
        <MainCard img={cardimg1} title={"1984"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg2} title={"Rich dad poor dad"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg3} title={"Код 8"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg4} title={"Даниел КИЗ"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg5} title={"Бепарволикнинг но..."} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
      </div>
    </div>
    <div className="container">
      <h2 className="title">Аудио китоблар</h2>
        <div className="product">
        <MainCard img={cardimg6} title={"1984"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg7} title={"Rich dad poor dad"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg8} title={"Код 8"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg9} title={"Даниел КИЗ"} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        <MainCard img={cardimg10} title={"Бепарволикнинг но..."} text={"SIYOSAT, FANTASTIKA"} before={icon1} after={icon2} />
        </div>
        </div>
    </>
  )
}

export default App
