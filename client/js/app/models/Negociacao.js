class Negociacao {
  constructor() {
    this._data = new Date();
    this._quantidade = 1;
    this._valor = 0.0;
    Object.freeze(this);
  }

  get volume() {
    return this._valor * this._quantidade;
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
