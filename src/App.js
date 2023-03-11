import SearchBar from "./components/SearchBar";
import "./App.css";
import CardContainer from "./components/CardContainer";
import { createContext, useEffect, useState } from "react";
export const MyContext = createContext();
function App() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState(name);
  const [data, setData] = useState([]);
  useEffect(() => {
    const api = async () => {
      if (search !== "") {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${search}&apikey=d48797fe`
        )
        const data = await response.json();
        // console.log(data.Search);
        setData(data.Search);
      }
     
    }

    api()
  }, [search])

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          search: search,
          setSearch: setSearch,
          name: name,
          setName: setName,
          data: data,
          setData: setData,
        }}
      >
        <SearchBar />
        <CardContainer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
