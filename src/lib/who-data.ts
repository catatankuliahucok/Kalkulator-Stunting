
export interface WHODataPoint {
  month: number;
  m3sd: number; // -3 SD
  m2sd: number; // -2 SD
  median: number; // Median (0 SD)
}

export const WHO_BOYS_HEIGHT: WHODataPoint[] = [
  { month: 0, m3sd: 44.2, m2sd: 46.1, median: 49.9 },
  { month: 1, m3sd: 48.9, m2sd: 50.8, median: 54.7 },
  { month: 2, m3sd: 52.4, m2sd: 54.4, median: 58.4 },
  { month: 3, m3sd: 55.3, m2sd: 57.3, median: 61.4 },
  { month: 4, m3sd: 57.6, m2sd: 59.7, median: 63.9 },
  { month: 5, m3sd: 59.6, m2sd: 61.7, median: 65.9 },
  { month: 6, m3sd: 61.2, m2sd: 63.3, median: 67.6 },
  { month: 7, m3sd: 62.7, m2sd: 64.8, median: 69.2 },
  { month: 8, m3sd: 64.0, m2sd: 66.2, median: 70.6 },
  { month: 9, m3sd: 65.2, m2sd: 67.5, median: 72.0 },
  { month: 10, m3sd: 66.4, m2sd: 68.7, median: 73.3 },
  { month: 11, m3sd: 67.5, m2sd: 69.9, median: 74.5 },
  { month: 12, m3sd: 68.6, m2sd: 71.0, median: 75.7 },
  { month: 15, m3sd: 71.6, m2sd: 74.1, median: 79.1 },
  { month: 18, m3sd: 74.4, m2sd: 76.9, median: 82.3 },
  { month: 21, m3sd: 76.8, m2sd: 79.4, median: 85.1 },
  { month: 24, m3sd: 79.1, m2sd: 81.7, median: 87.1 },
  { month: 27, m3sd: 81.2, m2sd: 84.1, median: 89.6 },
  { month: 30, m3sd: 83.2, m2sd: 86.2, median: 91.9 },
  { month: 33, m3sd: 85.0, m2sd: 88.2, median: 94.1 },
  { month: 36, m3sd: 86.8, m2sd: 89.9, median: 96.1 },
  { month: 39, m3sd: 88.6, m2sd: 91.8, median: 98.0 },
  { month: 42, m3sd: 90.2, m2sd: 93.5, median: 99.9 },
  { month: 45, m3sd: 91.8, m2sd: 95.2, median: 101.6 },
  { month: 48, m3sd: 93.3, m2sd: 96.7, median: 103.3 },
  { month: 51, m3sd: 94.8, m2sd: 98.3, median: 105.0 },
  { month: 54, m3sd: 96.3, m2sd: 99.8, median: 106.7 },
  { month: 57, m3sd: 97.7, m2sd: 101.3, median: 108.3 },
  { month: 60, m3sd: 99.1, m2sd: 102.7, median: 110.0 },
];

export const WHO_GIRLS_HEIGHT: WHODataPoint[] = [
  { month: 0, m3sd: 43.6, m2sd: 45.4, median: 49.1 },
  { month: 1, m3sd: 47.8, m2sd: 49.8, median: 53.7 },
  { month: 2, m3sd: 51.0, m2sd: 53.0, median: 57.1 },
  { month: 3, m3sd: 53.5, m2sd: 55.6, median: 59.8 },
  { month: 4, m3sd: 55.6, m2sd: 57.8, median: 62.1 },
  { month: 5, m3sd: 57.4, m2sd: 59.6, median: 64.0 },
  { month: 6, m3sd: 58.9, m2sd: 61.2, median: 65.7 },
  { month: 7, m3sd: 60.3, m2sd: 62.7, median: 67.3 },
  { month: 8, m3sd: 61.7, m2sd: 64.0, median: 68.7 },
  { month: 9, m3sd: 62.9, m2sd: 65.3, median: 70.1 },
  { month: 10, m3sd: 64.1, m2sd: 66.5, median: 71.5 },
  { month: 11, m3sd: 65.2, m2sd: 67.7, median: 72.8 },
  { month: 12, m3sd: 66.3, m2sd: 68.9, median: 74.0 },
  { month: 15, m3sd: 69.2, m2sd: 72.0, median: 77.5 },
  { month: 18, m3sd: 72.0, m2sd: 74.9, median: 80.7 },
  { month: 21, m3sd: 74.5, m2sd: 77.5, median: 83.7 },
  { month: 24, m3sd: 76.7, m2sd: 80.0, median: 85.7 },
  { month: 27, m3sd: 79.1, m2sd: 82.3, median: 88.3 },
  { month: 30, m3sd: 81.3, m2sd: 84.5, median: 90.7 },
  { month: 33, m3sd: 83.4, m2sd: 86.6, median: 93.0 },
  { month: 36, m3sd: 85.4, m2sd: 88.7, median: 95.1 },
  { month: 39, m3sd: 87.3, m2sd: 90.7, median: 97.2 },
  { month: 42, m3sd: 89.1, m2sd: 92.5, median: 99.2 },
  { month: 45, m3sd: 90.8, m2sd: 94.3, median: 101.1 },
  { month: 48, m3sd: 92.5, m2sd: 96.1, median: 102.9 },
  { month: 51, m3sd: 94.1, m2sd: 97.7, median: 104.7 },
  { month: 54, m3sd: 95.6, m2sd: 99.4, median: 106.3 },
  { month: 57, m3sd: 97.1, m2sd: 100.9, median: 108.0 },
  { month: 60, m3sd: 98.5, m2sd: 102.5, median: 109.4 },
];

export function interpolate(month: number, data: WHODataPoint[]): WHODataPoint {
  const exact = data.find((d) => d.month === month);
  if (exact) return exact;

  const lower = [...data].reverse().find((d) => d.month < month);
  const upper = data.find((d) => d.month > month);

  if (!lower) return data[0];
  if (!upper) return data[data.length - 1];

  const ratio = (month - lower.month) / (upper.month - lower.month);

  return {
    month,
    m3sd: lower.m3sd + (upper.m3sd - lower.m3sd) * ratio,
    m2sd: lower.m2sd + (upper.m2sd - lower.m2sd) * ratio,
    median: lower.median + (upper.median - lower.median) * ratio,
  };
}

export type StuntingStatus = "Normal" | "Pendek (Stunted)" | "Sangat Pendek (Severely Stunted)";

export function getStuntingStatus(height: number, standards: WHODataPoint): StuntingStatus {
  if (height < standards.m3sd) {
    return "Sangat Pendek (Severely Stunted)";
  } else if (height < standards.m2sd) {
    return "Pendek (Stunted)";
  } else {
    return "Normal";
  }
}
