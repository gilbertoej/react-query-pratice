import axios from "axios";

export const gw2 = axios.create({
  baseURL: "https://api.guildwars2.com/v2",
  headers: { "Content-Type": "application/json" },
});

// helper que injeta ?access_token=... automaticamente
export function withToken<T = unknown>(
  path: string,
  apiKey: string,
  params?: Record<string, unknown>
) {
  const search = new URLSearchParams({
    ...(params || {}),
    access_token: apiKey,
  });
   
  return gw2.get<T>(`${path}?${search.toString()}`);
}
