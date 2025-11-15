import "./MyForm.css"
import { useState } from "react"

const MyForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, email, bio, role)

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={handleName}
                    value={name} 
                />
            </label>
            <label>
                <span>Email:</span>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                />
            </label>
            <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    id="bio"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                ></textarea>
            </label>
            <label>
                <span>Função do Sistema</span>
                <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="admin">Admin</option>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm