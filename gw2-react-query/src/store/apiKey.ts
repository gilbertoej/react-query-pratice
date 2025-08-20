import { useEffect, useState } from "react";

const KEY = "gw2_api_key";

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem(KEY) || "");

  useEffect(() => {
    if (apiKey) localStorage.setItem(KEY, apiKey);
    else localStorage.removeItem(KEY);
  }, [apiKey]);

  return { apiKey, setApiKey, clear: () => setApiKey("") };
}
