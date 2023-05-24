import { Components, Theme } from '@mui/material'

export default function FormLabel(
  theme: Theme,
): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: theme.palette.grey[500],
          },
        },
      },
    },
  }
}
