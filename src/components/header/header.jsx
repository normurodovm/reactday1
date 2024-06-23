export const Header = ({title , img}) => {
    return <div className='header'>
        <div className="header__block">
                <img src={img} alt="icon" />
            <div className="header__content">
                <h2 className="header__title">{title}</h2>
                <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    </div>
}





import './header-style.css'