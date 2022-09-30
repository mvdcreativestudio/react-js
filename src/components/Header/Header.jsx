import HeaderImg from '../../assets/verano.jpg'
import '../Header/Header.css';

export const Header = () => {
    return (
        <div>
            <img className='imgHeader' src={HeaderImg} alt='logo'/>
        </div>
    )
}