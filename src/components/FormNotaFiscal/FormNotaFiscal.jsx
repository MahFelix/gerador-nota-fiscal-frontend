import { useState } from "react";
import api from "../../services/api";
import { FormContainer, Title, Form, Input, Button } from "./styles";

const FormNotaFiscal = ({ atualizarLista }) => {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [dataEmissao, setDataEmissao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notaFiscal = {
      cliente,
      produto,
      valor: parseFloat(valor),
      dataEmissao,
    };

    try {
      await api.post("/salvar", notaFiscal);
      atualizarLista();
      setCliente("");
      setProduto("");
      setValor("");
      setDataEmissao("");
    } catch (error) {
      console.error("Erro ao salvar nota fiscal:", error);
    }
  };

  return (
    <FormContainer>
      <Title>Gerar Nota Fiscal</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          step="0.01"
          required
        />
        <Input
          type="date"
          value={dataEmissao}
          onChange={(e) => setDataEmissao(e.target.value)}
          required
        />
        <Button type="submit">Salvar Nota Fiscal</Button>
      </Form>
    </FormContainer>
  );
};

export default FormNotaFiscal;
