import dlearnService from "admin/dlearn/api"
import { useState } from "react"

const Konlp =() =>{
    const [movie, setMovie] = useState()

    const onClick = e => {   
        e.preventDefault()
        dlearnService.konlp().then(res=>{
            const json = JSON.parse(res)
            setMovie(json['result'])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (<>
    <h2>한글 추출</h2>
    <button onClick={onClick}>한글 추출</button>
    <p>버튼을 클릭하시면, 가장 많이 사용된 한글 단어가 추출 됩니다.</p>
    <table>
        {movie && movie.map(({rank,title})=>(
            <tr key={rank}><td>{rank}</td><td>{title}</td></tr>
    ))}
    </table>
    </>)
}
export default Konlp