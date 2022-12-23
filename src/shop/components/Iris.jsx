import { useState } from "react"
import { irisapi } from "shop/api"

const Iris2 = () => {
    const [inputs, setInputs] = useState({})
    const {SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm} = inputs;
    
    const onClick = e =>{
        e.preventDefault()
        const request = {SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm}
        irisapi(request)
        .then((res)=>{
            console.log(`Response is ${res.data.result}`)
            localStorage.setItem('token', JSON.stringify(res.data.result))
            alert(`찾는 품종 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('잘못된 입력입니다')
        })
    }
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    return (
    <>
    꽃잎 길이 : <input type="text" name="PetalLengthCm" onChange={onChange} /><br/>
    꽃잎 폭: <input type="text" name="PetalWidthCm" onChange={onChange} /><br/>
    꽃받침 길이: <input type="text" name="SepalLengthCm" onChange={onChange} /><br/>
    꽃받침 폭: <input type="text" name="SepalWidthCm" onChange={onChange} /><br/>
    <button onClick={onClick}> 실행 </button>
    </>
    )}

export default Iris2