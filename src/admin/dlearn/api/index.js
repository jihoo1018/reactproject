import {server, dlearn,webcrawler,nlp, moviere, loginre} from 'context'

const dlearnService = {
    iris, getFashion, postFashion ,postNumber, navermovie ,konlp, moviereview, loginform
}


function handleResponse(response){ 
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
    }


async function loginform(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    fetch(`${server}${loginre}login-form`, requestOption)
    .then(handleResponse)
    .then(data => {
        alert(JSON.stringify(data))
    })
    .catch((error) => {
        alert('error :::: '+error);
    });
}

async function moviereview(review){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
    }
    const url = (`${server}${moviere}moviereview`)
    const res = await fetch(url,requestOption)
    .then(handleResponse)
    .then(data => (JSON.stringify(data)))
    .catch((error) => {
        alert('error :::: '+error);
    });
    return Promise.resolve(res);
}

async function konlp(){
    const res = await fetch(`${server}${nlp}ko-nlp`)
    .then(handleResponse)
    .then(data => JSON.stringify(data))
    .catch((error) => {
        alert('error :::: '+error);
    });
    return Promise.resolve(res);
}    

async function navermovie(){
    const res = await fetch(`${server}${webcrawler}naver-movie`)
    .then(handleResponse)
    .then(data => JSON.stringify(data))
    .catch((error) => {
        alert('error :::: '+error);
    });
    return Promise.resolve(res);
}

async function iris(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    fetch(`${server}${dlearn}iris`, requestOption)
    .then(handleResponse)
    .then(data => {
        alert(JSON.stringify(data))
    })
    .catch((error) => {
        alert('error :::: '+error);
    });
}
async function postFashion(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    fetch(`${server}${dlearn}fashion`, requestOption)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
    .catch((error) => {
        alert('error :::: '+error);
    });
}
async function getFashion(id){
    fetch(`${server}${dlearn}fashion?id=${id}`)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
} 

async function postNumber(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    fetch(`${server}${dlearn}MnNumber`, requestOption)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
    .catch((error) => {
        alert('error :::: '+error);
    });

}

export default dlearnService