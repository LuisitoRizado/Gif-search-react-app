import { useState } from "react";

export function AddCategory({onNewCategory}) {
  //Estado de nuestro componente
  const [inputValue, setInputValue] = useState("One punch man");

  const onInputChanged = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    //setCategorires(.....)
    if(inputValue.trim().length<=1) return;

    //setCategory(categories => [inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  }
  //Con esto podemos realizar nuestro envio de informacion del formulario
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  );
}
