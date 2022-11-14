import { useState } from "react";
import { AddCategory } from "./AddCategory.jsx";
import { GifGrid } from "./GifGrid.jsx";
export function GifExpertApp() {
  //Creacion de hook useState
  const [categories, setCategories] = useState(["One punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    //categories.push(newCategory);
    //Llamamos al metodo set, copiamos todo lo anterior
    //con ...categories, luego una coma y el elemento que queremos agregar
    setCategories([newCategory, ...categories]);
  };
  console.log(categories);
  return (
    <div className="background">
      {/* Titulo*/}
      <h1>Buscar un gif</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {
      categories.map((category) => (
         <GifGrid 
          key={category}
          category={category} />
      ))
      }
    </div>
  );
}
