import img1 from './images/logo.svg'
import img2 from './images/icon-hamburger.svg'
function Header(){
    return(
        <div className='apart'>
            <div><img src={img1} alt='img'></img></div>
            <div><img src={img2} alt='img'></img></div>

        </div>
    )
}

export default Header