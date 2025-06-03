import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { TextFieldProps } from '@mui/material';

const SearchBox = ({ ...rest }: TextFieldProps) => {
  return (
    <TextField
      type="search"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default SearchBox;
