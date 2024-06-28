import { Link } from 'react-router-dom'
import '../notfound404/notfound.css'



let NotFound = () =>{
    return (
        <div className="notfoundcontainer">
        <h1>404</h1>
        <p>Nə isə səhv getdi!</p>
        <Link  to="/"><button className='buttonas'> İlkin səhifəyə qayıt.</button> </Link>
        </div>
       
    )
}

export default NotFound