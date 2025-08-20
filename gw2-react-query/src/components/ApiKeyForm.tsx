type Props = { apiKey: string; onChange: (v: string) => void; onClear: () => void };

export default function ApiKeyForm({ apiKey, onChange, onClear }: Props) {
  return (
    <div className="card">
      <div className="card-header"><h2>API Key</h2></div>
      <p>Crie/gerencie sua key no site da ArenaNet e cole abaixo.</p>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="password"
          placeholder="GW2 API Key"
          value={apiKey}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="row">
          <button type="button" onClick={() => navigator.clipboard?.readText().then(onChange)}>
            Colar
          </button>
          <button type="button" onClick={onClear} disabled={!apiKey}>Limpar</button>
        </div>
      </form>
    </div>
  );
}
