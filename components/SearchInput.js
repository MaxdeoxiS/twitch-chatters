import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import { Search } from '@mui/icons-material'

export default function SearchInput({ value, onChange }) {
  return (
    <OutlinedInput
      value={value}
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            edge="end"
          >
            <Search />
          </IconButton>
        </InputAdornment>
      }
      label="Search"
    />
  )
}