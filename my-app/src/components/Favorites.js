import React from "react";
import {Link} from "react-router-dom"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default ()=>{
    return (
        <BottomNavigation value="" className="favorites-bar" >
            <Link to="/recipes/Favorites"> Go to your favorite Recipes<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /></Link> 
        </BottomNavigation>
)
}