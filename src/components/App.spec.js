import objeto from "./App.js";

describe("objeto", () => {
  it("debería ser un objeto", () => {
    expect(typeof objeto).toEqual("object");
  });
});

describe("objeto.App", () => {
  it("should render without crashing", () => {
    const el = objeto.App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe("objeto.App", () => {
  it("debería ser una función", () => {
    expect(typeof objeto.App).toEqual("function");
  });
});

describe("objeto.shuffle", () => {
  it("debería ser una función", () => {
    expect(typeof objeto.shuffle).toEqual("function");
  });

  it('debería retornar true para "[1,2,3,4]"', () => {
    let array = [1, 2, 3, 4];
    expect(objeto.shuffle(array)).toHaveLength(4);
  });

  it('debería retornar true para "[1,2,3,4]"', () => {
    let array = [1, 2, 3, 4];
    expect(objeto.shuffle(array)).toContain(3);
  });
});

describe("objeto.efectoMatch2", () => {
  it("zzzzz", () => {
    expect(typeof objeto.efectoMatch2).toEqual("function");
  });

  it("xxxx", () => {
    expect(objeto.efectoMatch2("charmeleon")).toBe(true);
  });
});

describe("displayTime", () => {
  it("debería mostrar 00:10 cuando son 10 segundos", () => {
    expect(objeto.secondsToHms(10)).toEqual("00:10 seconds");
  });

  it("deberia mostrar 1:10 cuando son 70 segundos", () => {
    expect(objeto.secondsToHms(70)).toEqual("1 minute: 10 seconds");
  });
  it("deberia mostrar 2:10 cuando son 130 segundos", () => {
    expect(objeto.secondsToHms(130)).toEqual("2 minutes: 10 seconds");
  });
});
