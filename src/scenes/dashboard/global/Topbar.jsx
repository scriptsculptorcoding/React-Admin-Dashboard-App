import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Sidebar from ".scenes/dashboard/global/Sidebar";

const TopBar = () => {
  const  theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  console.log(colorMode);

  return ( 
    <>
    
      <Box display="flex" justifyContent="space-between" p={2}></Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        <IconButton type="button" sx={{ p: 1 }}>
          <AcUnitIcon />
        </IconButton>

        {/*Icons*/}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <AcUnitIcon />
            ) : (
              <AcUnitIcon />
            )}
            <AcUnitIcon />
          </IconButton>
          <IconButton>
            <AcUnitIcon />
          </IconButton>
          <IconButton>
            <AcUnitIcon />
          </IconButton>
          <IconButton>
            <AcUnitIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
