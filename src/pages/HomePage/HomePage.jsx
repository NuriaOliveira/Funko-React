import React, {useState, useEffect} from 'react';
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';



const HomePage = () =>{
  const [funkos, setFunkos] = useState([])

  console.log("funkos",funkos)
  useEffect(() => {
    /*
    fetch("src/productos.json")
      .then(response => response.json())
      .then(json => console.log(json.productos))
*/
    
    axios("src/productos.json").then((json)=>
    setFunkos(json.data.productos)
    
  )},[]
  )

  return (
    
    <>
    <h1>Home Page</h1>
    <Grid container spacing={1}>

      {funkos.map((funko)=>{
        return(
          <div  style={{margin: 10}} key={funko.id}>
            <Link to={`detail/${funko.id}`}>
              <ItemListContainer funko={funko}/>
            </Link>
          </div>
        )
      })}
    </Grid>
    
    </>
  );
}
export default HomePage