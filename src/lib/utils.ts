export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | { [key: string]: boolean | string | number | null | undefined | ClassValue[] };

function flattenClassValue(value: ClassValue): Array<string | number> {
  if (Array.isArray(value)) {
    return value.flatMap((item) => flattenClassValue(item));
  }

  if (value && typeof value === "object") {
    return Object.entries(value)
      .filter(([, condition]) => Boolean(condition))
      .flatMap(([key, condition]) =>
        typeof condition === "boolean" || typeof condition === "number"
          ? [key]
          : flattenClassValue(condition),
      );
  }

  return value || value === 0 ? [value] : [];
}

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flatMap((input) => flattenClassValue(input))
    .map((value) => String(value))
    .filter((value) => value.trim().length > 0)
    .join(" ");
}
