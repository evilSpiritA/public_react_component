export function c_objSort<T>(data: T[], col: string) {
  return data.sort((a: any, b: any) => {
    return a[col] < b[col] ? -1 : a[col] > b[col] ? 1 : 0;
  });
}
