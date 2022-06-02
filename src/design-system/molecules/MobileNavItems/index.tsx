import { FC, FunctionComponentElement } from "react";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem/ListItem";
import { styled } from "@mui/material/styles";

import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const drawerWidth = 200;

interface NavigationProps {
  open?: boolean;
  handleDrawerOpen?: any;
  setOpen?: any;
  handleMessengerOpen?: any;
  parsedToken?: any;
  onClick?: any;
  pathName?: any;
}

const StyledList = styled(List)`

a {
  margin-bottom: .5rem;
  display: block;
  border-radius: 5px;

 :hover {
    transition: all .25s ease-in;
    background-color: #001AFF !important;
    color: white;
    text-decoration: none;
    
    img {
      transition: all .25s ease-in;
      filter: invert(1);
    }
 
    .MuiChip-colorDefault {
      filter: invert(1);
    }
  }
      
}

& .active {
  &.logout {
    background-color: transparent;
  }
  .MuiListItem-root {    
    transition: all .25s ease-in;
    background-color: #001AFF !important;
    color: white;
    text-decoration: none;
      
    img {
      transition: all .25s ease-in;
      filter: invert(1);
    }

    
    .MuiChip-colorDefault {
      filter: invert(1);
    }
}

`
const StyledListItem = styled(ListItem)`
  border-radius: 5px;
  cursor: pointer;

  .MuiListItemIcon-root  {
    align-items: center;
  }
  
  .MuiListItemIcon-root  {
    margin-right: 20px;
  }

  .MuiChip-label {
    font-weight: bold;
  }
`;

 

export const MobileNavItems: FC  = ({  ...props }) => {
  const navigate = useNavigate();


  return (
    <Box className="navigation">
      <StyledList style={{ margin: '0 10px' }}>
        <NavLink to="/buildings"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: 3,
              }}>
                <img src="/svg/icons/Buildings.svg" height="23px" width="23px" alt="buildings icon" />
              </ListItemIcon>
              <ListItemText primary="Buildings" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
        </NavLink>

        <NavLink
          to="/activity/"
          // onClick={handleMessengerOpen}
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }} onClick={() => {

              console.log('clicked on activity');
            }}>
              <ListItemIcon sx={{
                minWidth: 0,
                mr: 3,

              }}>
                <img src="/svg/icons/Bell.svg" height="23px" width="23px" alt="bell icon" />
              </ListItemIcon>

              <ListItemText primary="Activity" sx={{ fontSize: '14px' }} />
              <Chip
                label="3"
                sx={{
                  "& span": {
                    padding: '0',
                  },
                  height: '24px',
                  width: '24px',
                  marginTop: '2px',
                  marginLeft: 1,
                }}
              />
            </div>
          </StyledListItem>
        </NavLink>

        <NavLink to="/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
          //activeClassName="active"
          style={{
            minHeight: 48,
            justifyContent: 'initial',
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemIcon sx={{
                minWidth: 0,
                mr: 3,

              }}>
                <img src="/svg/icons/GearSix.svg" height="23px" width="23px" alt="gear icon" />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
        </NavLink>
      </StyledList>
    </Box>
  );
}