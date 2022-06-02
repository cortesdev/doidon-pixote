import { Box } from "@mui/material"
import Typography from "../Typography"

export const Copyright = ({ ...props }) => {
  return (
    <Box alignSelf='center'>
      <Typography size="small">
        {'© '}
        {`${new Date().getFullYear()} `}
        Doidon Pixote
      </Typography>
    </Box>
  )
}
