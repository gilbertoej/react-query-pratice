import { useAccount } from "../hooks/useGw2";

export default function AccountCard({ apiKey }: { apiKey: string }) {
  const { data, isLoading, isError } = useAccount(apiKey);

  return (
    <div className="card">
      <div className="card-header"><h2>Conta</h2></div>
      {!apiKey ? <p>Informe seu API key.</p> :
        isLoading ? <p>Carregando...</p> :
        isError ? <p style={{color:"red"}}>Erro ao carregar conta (verifique permissões).</p> :
        <>
          <p><b>Account Name:</b> {data?.name}</p>
          <p><b>Account ID:</b> {data?.id}</p>
          <p><b>World:</b> {data?.world}</p>
        </>
      }
    </div>
  );
}
