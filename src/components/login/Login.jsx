import {FaUser, FaLock} from 'react-icons/fa'
import './Login.css'

const Login = () => {
  return (
    <div className="container">
        <form>
            <h1>Acesso ao Sistema</h1>
            <div>
                <input type="email" name="email" id="email" placeholder='E-mail' />
                <FaUser className='icon'/>
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder='Senha' />
                <FaLock className='icon'/>
            </div>
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login