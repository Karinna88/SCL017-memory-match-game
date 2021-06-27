import objeto from './App.js';

describe('objeto', () => {
  it('debería ser un objeto', () => {
    expect(typeof objeto).toEqual('object');
  });

describe('objeto.App', () => {
  it('should render without crashing', () => {
    const el = objeto.App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe("objeto.App", () => {
  it('debería ser una función', () => {
    expect(typeof objeto.App).toEqual('function');
  });
});

describe("objeto.shuffle", () => {
  it("debería ser una función", () => {
    expect(typeof objeto.shuffle).toEqual('function');
  });


  it('debería retornar true para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];
  expect(objeto.shuffle(array)).toHaveLength(4);
  });

  it('debería retornar true para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];
  expect(objeto.shuffle(array)).toContain(3);
  });

});

describe('objeto.efectoMatch', () => {
  it('should render without crashing', () => {
    const elll = objeto.efectoMatch();
    expect(elll instanceof HTMLElement).toBe(true);
  });
});

});




/*Arrays y contenido
.toContain: Contiene el elemento dentro del array
.toHaveLength: El array tiene la longitud*/
