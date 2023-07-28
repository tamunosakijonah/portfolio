import img3 from './images/illustration-intro.svg'
function First(){
    return(
        <div className='dot'>
            <div><img src={img3}></img></div>
            <div>
                <h4>Bring everyone together to build better project</h4>
                <p>manage makes it simple for software teams to plan day-to-daytask while keeping 
                    the larger team goals in view
                </p>
                <button>get started</button>
            </div>
        </div>
        
    )
}
export default First