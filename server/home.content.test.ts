import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("Nexus home content", () => {
  const home = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");

  it("contains the core guide sections and original game catalog", () => {
    expect(home).toContain("Jogue mais.");
    expect(home).toContain("Escolha seu próximo");
    expect(home).toContain("Seu setup.");
    expect(home).toContain("Complete sua");
    expect(home).toContain("Cyberpunk 2077");
    expect(home).toContain("EA Sports FC 25");
  });

  it("keeps uploaded media references for every game card", () => {
    expect(home).toContain("cyberpunk-2077_36dbe4c7.JPG");
    expect(home).toContain("ea-fc-25_532cd045.JPG");
    expect(home).toContain("god-of-war_b27619c5.JPG");
    expect(home).toContain("red-dead-2_49017692.JPG");
    expect(home).toContain("spider-man-2_5f696a5d.JPG");
  });
});
