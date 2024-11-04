import { useQuery } from "react-query";
import { useState } from "react";

// Components
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import { Badge, LinearProgress} from "@mui/material";
import {Grid} from '@mui/material';
import { ShoppingCart } from "@mui/icons-material";
import Item from "./Item/item";
// Styles
import { Wrapper } from "./App styles";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProducts = async  (): Promise<CartItemType[]> =>
  await ( await fetch ('https://fakestoreapi.com/products')).json();

const App = () => {

  const {data,isLoading,error} = useQuery<CartItemType[]>(
    
    'products',
    getProducts

  );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return<LinearProgress/>;
  if(error) return<div>Something went wrong...</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
