import { useQuery } from "@tanstack/react-query";
import { withToken } from "../lib/api";

// Tipos básicos (parciais)
export type TokenInfo = { id: string; name: string; permissions: string[] };
export type Account = { id: string; name: string; world: number };
export type WalletEntry = { id: number; value: number };
export type Currency = { id: number; name: string; icon: string };

export function useTokenInfo(apiKey: string) {
  return useQuery({
    queryKey: ["tokeninfo", apiKey],
    enabled: !!apiKey,
    queryFn: async () => (await withToken<TokenInfo>("/tokeninfo", apiKey)).data,
  });
}

export function useAccount(apiKey: string) {
  return useQuery({
    queryKey: ["account", apiKey],
    enabled: !!apiKey,
    queryFn: async () => (await withToken<Account>("/account", apiKey)).data,
  });
}

export function useWallet(apiKey: string) {
  return useQuery({
    queryKey: ["wallet", apiKey],
    enabled: !!apiKey,
    queryFn: async () => (await withToken<WalletEntry[]>("/account/wallet", apiKey)).data,
  });
}

export type CurrencyMeta = { id: number; name: string; icon: string; order: number; description?: string };

export function useAllCurrencies(lang: "en" | "pt" | "pt-BR" | "es" = "pt-BR") {
  return useQuery({
    queryKey: ["currencies", lang],
    queryFn: async (): Promise<Record<number, CurrencyMeta>> => {
      const res = await fetch(`https://api.guildwars2.com/v2/currencies?ids=all&lang=${lang}`);
      const list: CurrencyMeta[] = await res.json();
      // normaliza em dict por ID
      return Object.fromEntries(list.map((c) => [c.id, c]));
    },
    staleTime: 1000 * 60 * 60, // 1h, muda pouco
  });
}
