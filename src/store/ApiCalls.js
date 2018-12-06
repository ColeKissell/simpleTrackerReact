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
  ).catch((err)=>{console.log(err)})
  console.log(things)
  return things;
}
const updateItem = async (data) => {
  console.log(data)
  const things = await fetch(`${url}/${data._id}`, 
    {
      method: 'PUT',
      cors: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }
  ).catch((err)=>{console.log(err)})
  console.log(things)
  return things;
}
const deleteItem = async (_id) => {
  const things = await fetch(`${url}/${_id}`, 
  {
    method: 'DELETE',
    cors: true,
    // headers: {
    //   'Content-type': 'application/json; charset=UTF-8'
    // },
    // body: JSON.stringify(data)
  }
).catch((err)=>{console.log(err)})
console.log(things)
return things;
}
export {
    getThings,
    newItem,
    updateItem,
    deleteItem
}