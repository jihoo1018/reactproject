import '../styles/SignUp.css'
import { useState } from "react"
import { blogLogin } from '../api'

const SignUp = () => {
    const [inputs, setInputs] = useState({})
    const {email, nickname, password} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {email,nickname, password}
        alert(`사용자 이름: ${JSON.stringify(request)}`)
        blogLogin(request)
        .then((res)=>{
            console.log(`Response is ${res}`)
            localStorage.setItem('token',JSON.stringify(res.config.data))
        })
        .catch((err)=>{
            console.log(err)
            alert("아이디와 비밀번호를 다시 입력해주세요")
        })

    }

    return (
    <>
        EMAIL: <input type="text" name="email" onChange={onChange} /><br/>
        NICKNAME: <input type="text" name="nickname" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 회원가입 </button>

    
    </>
)
    }
export default SignUp