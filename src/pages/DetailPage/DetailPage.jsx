import {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Grid from '@mui/material/Grid';

const DetailPage = () => {
  const [funko, setFunko] =  useState([])

  let { id } = useParams()

  useEffect(()=> {
    axios("src/productos.json").then((json) =>
    setFunko(json.data.productos)
    )
  },[])

  return (
   <div>
        <h1>Detail Page</h1>
     <div>
        {funko.id ? <ItemListContainer funko={funko}/> : null}

     </div>
   </div>
  )
}

export default DetailPage