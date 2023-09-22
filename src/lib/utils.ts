export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const findByName = (data: any, selected: string | undefined) => {
  return data?.find((each: any) => {
    if (each?.title) return each.title === selected;
    return each.name === selected;
  });
};

export const maskNumber = (value: number | string) => {
  const numberString = value.toString();
  const lastFourDigits = numberString.slice(-4);
  const masked = '*'.repeat(4) + lastFourDigits;

  return {
    lastFour: lastFourDigits,
    masked,
  };
};

export const fallbackString = (value: string) => {
  if (value && value.trim() !== '') {
    return value.charAt(0);
  }
};
