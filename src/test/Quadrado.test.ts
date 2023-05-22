import { Quadrado } from "../Quadrado";

describe('Testes do Quadrado', (): void => {
  it('Deve calcular a área corretamente', (): void => {
    const quadrado = new Quadrado(2);
    expect(quadrado.area()).toBe(4);
  });
});
