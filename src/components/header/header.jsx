export const Header = ({title , img}) => {
    return <div className='header'>
        <div className="flex items-center gap-[30px] max-w-[322px]">
                <img src={img} alt="icon" />
            <div className="header__content">
                <h2 className="font-bold text-[15px] leading-[1.2] text-[#11142d]">{title}</h2>
                <p className="font-normal text-[11px] text-[#aaa]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    </div>
}





import './header-style.css'