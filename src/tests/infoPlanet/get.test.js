describe("InfoPLanet", () => {
  test("Get to /api/planets/1 should return 200", async () => {
    const response = await fetch("https://swapi.py4e.com/api/planets/1");
    expect(response.status).toBe(200);

    const data = await response.json();

    expect(data.name).toBe("Tatooine");
    expect(data.climate).toBe("arid");
    expect(data.terrain).toBe("desert");
    expect(data.population).toBe("200000");
  });
});
