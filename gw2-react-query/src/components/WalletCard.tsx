import { useWallet } from "../hooks/useGw2";
import { useAllCurrencies } from "../hooks/useGw2";
import { formatCurrencyValue } from "../lib/format";

export default function WalletCard({ apiKey }: { apiKey: string }) {
  const { data, isLoading, isError } = useWallet(apiKey);
  const { data: metaDict, isLoading: loadingMeta } = useAllCurrencies("pt-BR");

  if (!apiKey) return <div className="card"><div className="card-header"><h2>Carteira</h2></div><p>Informe seu API key.</p></div>;

  return (
    <div className="card">
      <div className="card-header"><h2>Carteira</h2></div>
      {isLoading || loadingMeta ? (
        <p>Carregando...</p>
      ) : isError ? (
        <p style={{ color: "red" }}>Erro ao carregar carteira (permissão "wallet").</p>
      ) : (
        <ul className="list">
          {data?.sort((a,b) => (metaDict?.[a.id]?.order ?? 0) - (metaDict?.[b.id]?.order ?? 0)).map((w) => {
            const c = metaDict?.[w.id];
            return (
              <li key={w.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {c?.icon && <img src={c.icon} alt="" width={16} height={16} />}
                <div>
                  <b>{c?.name ?? `Currency ${w.id}`}</b>: {formatCurrencyValue(w.id, w.value)}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
