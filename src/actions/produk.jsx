
const getData = () =>{
    return{ 
        type:"GET",
        payload:[]
    }
}

const searchData = (data) =>{
    return{ 
        type:"SEARCH",
        payload:data
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getData,
    searchData
}