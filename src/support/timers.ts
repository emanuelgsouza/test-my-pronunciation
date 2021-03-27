export const padHour = (value: string | number): string => {
  if (typeof value === "string") {
    return value.padStart(2, "0");
  }

  return value.toString().padStart(2, "0");
};

export const formatTimer = (seconds: number | void): string => {
  const value = seconds || 0;

  const result = [];

  result.push(padHour(Math.floor(value / 60)));

  result.push(padHour(value % 60));

  return result.join(":");
};

export default formatTimer;
