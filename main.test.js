import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Check if there is a news about Lian is a cool Web Developer", () => {
  expect(newsList).toContain("Lian is a cool Web Developer")
});

test("checks if news is ascending", () => {
expect(sort("ascending")).toBe(newsList);
});