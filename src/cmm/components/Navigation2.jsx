import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom"

const Navigation2 = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500, margin:"0 auto" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<FavoriteIcon/>} component={Link} to="/home"/>
        <BottomNavigationAction label="Counter" icon={<FavoriteIcon/>} component={Link} to="/counter"/>
        <BottomNavigationAction label="Todo" icon={<FavoriteIcon/>} component={Link} to="/todos"/>
        <BottomNavigationAction label="SignUp" icon={<FavoriteIcon/>} component={Link} to="/signup"/>
        <BottomNavigationAction label="LoginForm" icon={<FavoriteIcon/>} component={Link} to="/login-form"/>
        <BottomNavigationAction label="Stroke" icon={<FavoriteIcon/>} component={Link} to="/stroke"/>
        <BottomNavigationAction label="Iris" icon={<FavoriteIcon/>} component={Link} to="/iris"/>
        <BottomNavigationAction label="Fashion" icon={<FavoriteIcon/>} component={Link} to="/fashion"/>
        <BottomNavigationAction label="Number" icon={<FavoriteIcon/>} component={Link} to="/mnnumber"/>
        <BottomNavigationAction label="NaverMovie" icon={<FavoriteIcon/>} component={Link} to="/navermovie"/>
        <BottomNavigationAction label="Konlp" icon={<FavoriteIcon/>} component={Link} to="/konlp"/>
        <BottomNavigationAction label="MovieReview" icon={<FavoriteIcon/>} component={Link} to="/moviereview"/>
        <BottomNavigationAction label="UserList" icon={<FavoriteIcon/>} component={Link} to="/userlist"/>
      </BottomNavigation>
    </Box>
  );
}

export default Navigation2