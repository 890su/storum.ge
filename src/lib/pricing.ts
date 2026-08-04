export const prices = {
  storagePerDay: 0.86,
  mechanicalHandling: 3.97,
  stretchWrap: 2.32,
  boxPicking: 0.26,
} as const;

export type CalculationInput = {
  pallets: number;
  days: number;
  inbound: boolean;
  outbound: boolean;
  stretchPallets: number;
  boxes: number;
};

export function calculateStorage(input: CalculationInput): number {
  const storage = input.pallets * input.days * prices.storagePerDay;
  const handlingCount = Number(input.inbound) + Number(input.outbound);
  const handling = input.pallets * handlingCount * prices.mechanicalHandling;
  const stretch = input.stretchPallets * prices.stretchWrap;
  const picking = input.boxes * prices.boxPicking;
  return storage + handling + stretch + picking;
}

export function formatGel(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
