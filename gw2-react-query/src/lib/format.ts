// src/lib/format.ts
export function formatCoin(valueInCopper: number) {
  const gold = Math.floor(valueInCopper / 10000);
  const silver = Math.floor((valueInCopper % 10000) / 100);
  const copper = valueInCopper % 100;
  // exemplo 12g 03s 07c, mantendo alinhado
  const ss = silver.toString().padStart(2, "0");
  const cc = copper.toString().padStart(2, "0");
  return `${gold}g ${ss}s ${cc}c`;
}

export function formatCurrencyValue(id: number, value: number) {
  // id 1 é Coin (ouro/prata/cobre)
  if (id === 1) return formatCoin(value);
  // demais: só separador de milhar
  return Intl.NumberFormat("pt-BR").format(value);
}
