import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import FormNotaFiscal from "./components/FormNotaFiscal/FormNotaFiscal";
import ListaNotasFiscais from "./components/ListaNotasFiscais/ListaNotasFiscais";

function App() {
  const [atualizar, setAtualizar] = useState(false);

  return (
    <>
      <GlobalStyles />
      <FormNotaFiscal atualizarLista={() => setAtualizar(!atualizar)} />
      <ListaNotasFiscais atualizar={atualizar} />
    </>
  );
}

export default App;
