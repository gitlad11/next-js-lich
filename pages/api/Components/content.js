import React, {useEffect , useState }  from 'react'
import Grid from '@mui/material/Grid';
import MyCard from './card.js'
import NoImage from '../Images/NoImage.jpg'

function Content(props){
	const items = props.items
	const removeGood = props.removeGood
	const ImageUrl = 'NoImage.jpg'
	const styles = {
		container : {
			height : "400px",
			marginTop : "5px",
			minWidth : "600px",
			backgroundColor : "#fff",
			borderRadius : "8px",
			boxShadow: "0 0 10px rgba(0,0,0,0.5)"
		}
	}
	useEffect(() => {
	
	},[])	
	//if(items != undefined){
		//return(
			//<div style={styles.container} >
			//<Grid container spacing={2}>
				//{items.map((item) => {
					//<Grid item xs={6}>
					//<MyCard url={item.url} title={item.title} />
					//</Grid>
				//}
					//)}
			//</Grid>
			//</div>
			//)
	//} else {

		return (
		<div style={styles.container} >
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<MyCard removeGood={removeGood} url={ImageUrl} title="Нет доступного товара" />
				</Grid>
			</Grid>
		</div>
		)

	}
//}
export default Content;