import { useTokenInfo } from "../hooks/useGw2";

export default function TokenInfoCard({ apiKey }: { apiKey: string }) {
  const { data, isLoading, isError } = useTokenInfo(apiKey);

  return (
    <div className="card">
      <div className="card-header"><h2>Token</h2></div>
      {!apiKey ? <p>Informe seu API key.</p> :
        isLoading ? <p>Carregando...</p> :
        isError ? <p style={{color:"red"}}>Erro ao carregar token.</p> :
        <>
          <p><b>Nome:</b> {data?.name}</p>
          <p><b>ID:</b> {data?.id}</p>
          <p><b>Permissões:</b> {data?.permissions?.join(", ") || "—"}</p>
        </>
      }
    </div>
  );
}
