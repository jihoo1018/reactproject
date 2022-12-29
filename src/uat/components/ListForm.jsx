import { useEffect,useState } from 'react'
import '../styles/UserList.css'
import axios from 'axios'
export default function ListForm(){
    const[list,setList] = useState([])
    useEffect(()=>{
        axios
        .get('http://127.0.0.1:8000/blog/auth/user-list')
        .then(res =>{
            console.log("회원목록 들어옴")
            console.log(res.data)
            setList(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return <>
    <h2>회원 목록</h2>
    <p> 회원 목록이 출력됩니다.</p>
    <table className='user-list'>
        <thead>
            <tr>
            <th>blog_id</th><th>email</th><th>nickname</th><th>password</th>
            </tr>
        </thead>
        <tbody>
        {list && list.map(({blog_userid,email,nickname,password})=>(
            <tr key = {blog_userid} >
                <td>{blog_userid}</td>
                <td>{email}</td>
                <td>{nickname}</td>
                <td>{password}</td></tr>))
    }
    </tbody>
    </table>
        </>
}