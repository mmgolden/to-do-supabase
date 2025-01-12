type ShadeNumber = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

type ColorShades = {
  [K in ShadeNumber]: string;
};

type PrimitiveColors = {
  [colorName: string]: ColorShades;
};

type PrimeVueVariables = {
  [key: `p-${string}-${ShadeNumber}`]: string;
};

export const formatPrimeVueVariables = (primitive: PrimitiveColors): PrimeVueVariables => {
  const result: PrimeVueVariables = {};

  Object.entries(primitive).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, hexValue]) => {
      const key = `p-${colorName}-${shade}` as `p-${string}-${ShadeNumber}`;
      result[key] = hexValue;
    });
  });

  return result;
};
