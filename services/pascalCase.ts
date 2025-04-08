import { camelCase } from "lodash";

export function toPascalCase<T>(obj: Record<string, any>): T {
  const newObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = camelCase(key);
      newObj[newKey] = obj[key];
    }
  }
  return newObj as T;
}
