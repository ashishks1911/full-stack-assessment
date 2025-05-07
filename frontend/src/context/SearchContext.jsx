import { createContext, useState } from "react";

export const SearchContext = createContext([]);

const SearchState = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <SearchContext.Provider value={{ state, setState }}>
      {children}
    </SearchContext.Provider>
  )
}
export default SearchState;
