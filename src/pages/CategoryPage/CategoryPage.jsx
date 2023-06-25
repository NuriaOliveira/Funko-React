import {useEffect, useState} from 'react'
import axios from "axios"
import { json, useParams, Link } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Grid from '@mui/material/Grid';

const CategoryPage = () => {
  const [funkos, setFunkos] =  useState([])

  let { categoryId } = useParams()

  let filtrarFunkos = funkos.filter((funko)=>{
    return funko.categoria === categoryId
  })

  useEffect(()=> {
    axios("src/productos.json").then((json) =>
    setFunkos(json.data.productos)
    )
  },[])

  return (
   <div>
        <h1>Category Page</h1>
     
        <Grid container spacing={1}>

          { filtrarFunkos.map((funko)=>{
            return(
              <div  style={{margin: 10}} key={funko.id}>
                <Link to={`detail/${funko.id}`}>
                  <ItemListContainer funko={funko}/>
                </Link>
              </div>
            )
          })}
        </Grid>
   </div>
  )
}

export default CategoryPage