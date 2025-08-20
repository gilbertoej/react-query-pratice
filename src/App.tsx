import { useApiKey } from "./store/apiKey";
import ApiKeyForm from "./components/ApiKeyForm";
import TokenInfoCard from "./components/TokenInfoCard";
import AccountCard from "./components/AccountCard";
import WalletCard from "./components/WalletCard";

export default function App() {
  const { apiKey, setApiKey, clear } = useApiKey();

  return (
    <div className="container">
      <h1>GW2 + React Query</h1>
      <div className="grid">
        <ApiKeyForm apiKey={apiKey} onChange={setApiKey} onClear={clear} />
        <TokenInfoCard apiKey={apiKey} />
        <AccountCard apiKey={apiKey} />
        <WalletCard apiKey={apiKey} />
      </div>
    </div>
  );
}
