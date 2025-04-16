const { data } = require("autoprefixer");

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json();

  const parsedDate = new Date(responseBody.updated_at).toISOString();
  expect(parsedDate).toBe(responseBody.updated_at);
  expect(responseBody.dependencies.database.version).toBe("16.8");
  expect(responseBody.dependencies.database.oppened_connections).toBe(1);
});
