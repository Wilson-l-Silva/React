export function App() {
  console.log('oi');

  //retorna sempre um elemento pai, se tiver mais de dois elementos da ruim
  //<></> //react fragment tag vazia nao retorna div na inpeção do console
  return (
    <>
      <h1>Olá Mundo</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nostrum
        nobis facilis accusantium fugit aperiam ab saepe ipsa, alias dolorum
        incidunt reiciendis dolore quidem nihil harum minus debitis magni
        recusandae!
      </p>
    </>
  );
}

//export { App }; // te ogriga a importar usando nome do componente APp
//export default App; no componete se importa usando qualquer nome
