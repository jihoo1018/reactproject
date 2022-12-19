import { useState } from "react"
import dlearnService from "admin/dlearn/api"

const MnNumber = () => {
    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
      e.preventDefault()
      const {value, name} = e.target
      setInputs({...inputs, [name]: value})
    }
    const onPostClick = e => {
      e.preventDefault()
      dlearnService.postNumber(id)
      let arr = document.getElementsByClassName('box')
      for(let i=0; i<arr.length; i++) arr[i].value = ""
  }
    return(<>
      <form method="post">
      <h1>number Post</h1>
      <p>번호를 입력해주세요.</p>
      <input type="text" className="box" placeholder="번호" name="id" onChange={onChange}/>
      <button onClick={onPostClick}>번호인식</button>
      </form>
      </>)
}
export default MnNumber