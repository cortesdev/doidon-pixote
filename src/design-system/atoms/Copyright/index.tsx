import { Box } from "@mui/material"
import Typography from "../Typography"

export const Copyright = ({ ...props }) => {
  return (
    <Box alignSelf='center'>
      <Typography size="small" color="black">
        {'© '}
        {`${new Date().getFullYear()} `}
        Doidon Pixote  e os Van der Zicrey
      </Typography>
    </Box>
  )
}
