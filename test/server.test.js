const request = require("supertest");
const app = require("../server");

describe("Hollow Knight Web", () => {
  test("GET / responde 200 y HTML", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/html/);
  });

  test("GET /api/lore responde 200 y JSON con el título correcto", async () => {
    const res = await request(app).get("/api/lore");
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Hollow Knight");
    expect(Array.isArray(res.body.main_characters)).toBe(true);
  });
});
const express = require("express");