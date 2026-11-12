import { describe, expect, it } from "vitest";
import { linkProduto, site } from "./site";
describe("whatsapp", () => {
  it("monta link de produto codificado", () => {
    expect(linkProduto("Brownie")).toBe("https://wa.me/5582900000000?text=Ol%C3%A1!%20Quero%20encomendar%3A%20Brownie");
  });
  it("tem 8 produtos", () => expect(site.produtos).toHaveLength(8));
});
