
let url = 'https://nowhapi-t1e1gfktt.now.sh/item'

const getThings=async ()=>{
   const things = await fetch(url)
  .then((response)=> {
    return response.json();
  })
  .then((myJson)=> {
    return myJson
  }).catch(err=> console.log(err))
  
  return things
}
const getThingsByID=async (_id)=>{
  const thing = await fetch(`${url}/detail/${_id}`, 
    {
      method: 'GET',
      cors: true,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  ).then((response)=> {
    return response.json();
  })
  .then((myJson)=> {
    return myJson
  }).catch((err)=>{console.log(err)})
  return thing;
}

const searchByName =async (query)=>{
  query = query.toLowerCase().replace(/' '/g, /[+]/)
  const result = await fetch(`${url}/search/${query}`, 
    {
      method: 'GET',
      cors: true,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  ).then((response)=> {
    return response.json();
  })
  .then((myJson)=> {
    return myJson
  }).catch((err)=>{console.log(err)})
  return result;
}

const newItem = async (data) => {
  const things = await fetch(`${url}/new`, 
    {
      method: 'POST',
      cors: true,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }
  ).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
  return things;
}
const updateItem = async (data) => {
  const things = await fetch(`${url}/update/${data._id}`, 
    {
      method: 'PUT',
      cors: true,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }
  ).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
  return things;
}
const deleteItem = async (_id) => {
  const things = await fetch(`${url}/delete/${_id}`, 
  {
    method: 'DELETE',
    cors: true
  }
).then((result)=>{console.log(`${result} item deleted`)}).catch((err)=>{console.log(err)})
return things;
}

















export {
    getThings,
    getThingsByID,
    newItem,
    updateItem,
    deleteItem,
    searchByName
}
