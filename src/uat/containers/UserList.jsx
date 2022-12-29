import { useEffect,useState } from 'react'
import '../styles/UserList.css'
import axios from 'axios'
import ListForm from '../components/ListForm'
export default function UserList(){
    const[list,setList] = useState([])
    useEffect(()=>{
        fetchUserList()
    },[])}
    const fetchUserList = () => {
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
    }
    return<>
        <ListForm list={list}/>
    </>