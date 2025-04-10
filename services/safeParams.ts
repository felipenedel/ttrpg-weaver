export class SafeParams {
  constructor(private params: URLSearchParams) {
  }

  get(key: string): string | null {
    const value = this.params.get(key);
    return value === "null" || value === "undefined" ? null : value;
  }
}
