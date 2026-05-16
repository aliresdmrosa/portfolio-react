import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";
import Data from "../data.json";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [filtro, setFiltro] = useState("all");
  const [data, setData] = useState(Data);

  useEffect(() =>{
    document.documentElement.classList.add("dark");
  }, [])

  function handTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  function handleRemove(id) {
    setData(data.filter((data) => data.id !== id));
  }

  function handleIsActive(id) {
    setData((data) =>
      data.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  function filtrarCard(Data) {
    if (filtro === "active") {
      return Data.filter((card) => card.isActive);
    }
    if (filtro === "inactive") {
      return Data.filter((card) => !card.isActive);
    }
    return Data;
  }

  return (
    <>
      <div className="md:w-[70%] m-auto w-full ">
        <Header isDark={isDark} handTheme={handTheme} />
        <div className="flex flex-col items-center sm:flex-row justify-between pt-[70px] pb-[25px] px-2">
          <h2 className="text-2xl font-noto  dark:text-neutral-200 text-neutral-900 font-bold">Extensions List</h2>
          <div className="flex gap-2 ">
            <Button title="All" handle={() => setFiltro("all")} />
            <Button title="Active" handle={() => setFiltro("active")} />
            <Button title="Inactive" handle={() => setFiltro("inactive")} />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 items-stretch">
          {filtrarCard(data).map((item) => (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              isActive={item.isActive}
              logo={item.logo}
              setIsActive={() => handleIsActive(item.id)}
              handleRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
