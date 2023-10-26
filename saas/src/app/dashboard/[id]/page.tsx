import React from 'react'

interface PageProps{
  params:{
    id:string
  }
}

const Id = ({params}:PageProps) => {

  let {id} = params
  return (
    <div>{id}</div>
  )
}

export default Id