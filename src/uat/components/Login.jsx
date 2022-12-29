import '../styles/Login.css'
import { useState } from "react"
import {userLogin} from "../api"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [inputs, setInputs] = useState({})
    const {email, password} = inputs;
    const navigate = useNavigate()

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {email, password}
        alert(`사용자 이름: ${JSON.stringify(request)}`)
        userLogin(request)
        .then((res)=>{
            localStorage.setItem("LOGINUSER", JSON.stringify(res.data))
            alert(`로컬 스토리지에 저장된 정보 : ${localStorage.getItem("LOGINUSER")}`)
            navigate("/home")
        })
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시')
        })

    }

    return (
    <>
        EMAIL: <input type="text" name="email" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 로그인 </button>

    
    </>
)}
export default Login