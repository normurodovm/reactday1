
export const MainCard = ({img , title , text , before , after}) => {
    return <div>
        <section className="card">
            <div className="container1">
                <div className="card__content">
                    <div className="max-w-[230px]">
        <img className='card__img' src={img} alt="img" />
        <h2 className="font-bold text-2xl text-[#11142d] mt-3">{title}</h2>
        <p className="font-normal text-base text-[#3f51b5] mb-6 mt-3">{text}</p>
        <div className="flex justify-between items-center">
            <img src={before} alt="icon" />
            <img src={after} alt="icon" />
        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
import './style.css'
