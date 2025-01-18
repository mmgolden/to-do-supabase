export function generateVariables(config: { [key: number]: string }) {
  let scss = "";

  Object.entries(config).forEach(([key, value]) => {
    if (key !== "borderRadius" && typeof value === "object") {
      Object.entries(value).forEach(([shade, color]) => {
        scss += `$p-${key}-${shade}: ${color};\n`;
      });
      scss += "\n";
    }
  });

  return scss;
}
