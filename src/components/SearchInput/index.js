import { Input, Wrapper } from "./style";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ ...rest }) => {
  return (
    <Wrapper>
      <SearchIcon color="inherit" />
      <Input {...rest} />
    </Wrapper>
  );
};

export default SearchInput;
