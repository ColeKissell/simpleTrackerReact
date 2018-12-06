let url = 'https://hapiapi-nwwwdcogfv.now.sh/item'

const getThings=async ()=>{
   const things = await fetch(url)
  .then((response)=> {
    return response.json();
  })
  .then((myJson)=> {
    return myJson
  });
  
  return things
}
const getThingsByID=async (_id)=>{
  const thing = await fetch(`${url}/${_id}`, 
    {
      method: 'get',
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

const newItem = async (data) => {
  const things = await fetch(url, 
    {
      method: 'post',
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
  const things = await fetch(`${url}/${data._id}`, 
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
  const things = await fetch(`${url}/${_id}`, 
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
    deleteItem
}