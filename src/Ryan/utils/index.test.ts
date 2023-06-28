import { c_objSort } from "./index";

describe("測試 utils.ts", () => {
  test("c_objSort function", async () => {
    const input = [{ index: 2 }, { index: 1 }, { index: 4 }, { index: 3 }];
    const output = [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }];
    expect(c_objSort(input, "index")).toEqual(output);
  });
});
