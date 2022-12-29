import axios from 'axios'
import {server, loginre} from 'context'
export const userLogin = req =>axios.post(`${server}${loginre}loginform`, req,
{headers:{
    Authorization:'JWT fefege..'
}
}
)