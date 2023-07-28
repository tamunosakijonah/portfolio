import img1 from './images/logo.svg'
import img2 from './images/icon-hamburger.svg'
function Header(){
    return(
        <div className='apart'>
            <div><img src={img1}></img></div>
            <div><img src={img2}></img></div>

        </div>
    )
}

export default Header