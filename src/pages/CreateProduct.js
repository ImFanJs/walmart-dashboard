import React, { Component } from 'react';
import firebase from 'firebase';

export default class CreateProduct extends Component {
  state = {
    name: '',
    price: '',
    nameTwo: '',
    priceTwo: '',
    nameThree: '',
    priceThree: ''
  };

  convertToXml = json => {
    return `<?xml version="1.0" encoding="utf-8"?>
      <product>
        <id>${json.id}</id>
        <name>${json.name}</name>
        <price>${json.price}</price>
      </product>`;
  };

  handleChanges = e => this.setState({ [e.target['name']]: e.target.value });

  saveProduct = () => {
    const { name, price } = this.state;

    const newProduct = {
      id: Date.now(),
      name,
      price
    };

    newProduct.productXml = this.convertToXml(newProduct);

    firebase
      .database()
      .ref('product')
      .set({
        name,
        price,
        productXml: newProduct.productXml
      });

    this.setState({
      name: '',
      price: ''
    });
  };

  saveProductTwo = () => {
    const { nameTwo, priceTwo } = this.state;

    const newProduct = {
      id: Date.now(),
      name: nameTwo,
      price: priceTwo
    };

    newProduct.productXml = this.convertToXml(newProduct);

    firebase
      .database()
      .ref('productTwo')
      .set({
        name: nameTwo,
        price: priceTwo,
        productXml: newProduct.productXml
      });

    this.setState({
      nameTwo: '',
      priceTwo: ''
    });
  };

  saveProductThree = () => {
    const { nameThree, priceThree } = this.state;

    const newProduct = {
      id: Date.now(),
      name: nameThree,
      price: priceThree
    };

    newProduct.productXml = this.convertToXml(newProduct);

    firebase
      .database()
      .ref('productThree')
      .set({
        name: nameThree,
        price: priceThree,
        productXml: newProduct.productXml
      });

    this.setState({
      nameThree: '',
      priceThree: ''
    });
  };

  cancel = () => {
    this.setState({
      name: '',
      price: ''
    });
  };
  cancelTwo = () => {
    this.setState({
      nameTwo: '',
      priceTwo: ''
    });
  };
  cancelThree = () => {
    this.setState({
      nameThree: '',
      priceThree: ''
    });
  };

  render() {
    const {
      name,
      price,
      nameTwo,
      priceTwo,
      nameThree,
      priceThree
    } = this.state;
    return (
      <section className="create-product">
        <header className="App-header">
          <h1 className="App-title">Walmart / Menú digital / Carnes</h1>
        </header>
        <div className="row mt-3">
          <div className="col-4 offset-4">
            <div className="form-group">
              <label htmlFor="name">Producto 1:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Nombre del producto"
                value={name}
                onChange={this.handleChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio:</label>
              <input
                type="text"
                id="price"
                name="price"
                className="form-control"
                placeholder="Precio del producto"
                value={price}
                onChange={this.handleChanges}
              />
              <small className="text-muted">
                Ejemplo: 125 (sólo números enteros)
              </small>
            </div>
          </div>
          <div className="col-4 offset-4">
            <div className="float-right px-0">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                data-dismiss="modal"
                onClick={this.cancel}
              >
                Limpiar
              </button>
              <button
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.saveProduct}
              >
                Guardar Producto
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-3">
          <div className="col-4 offset-4">
            <div className="form-group">
              <label htmlFor="nameTwo">Producto 2:</label>
              <input
                type="text"
                id="nameTwo"
                name="nameTwo"
                className="form-control"
                placeholder="Nombre del producto"
                value={nameTwo}
                onChange={this.handleChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priceTwo">Precio:</label>
              <input
                type="text"
                id="priceTwo"
                name="priceTwo"
                className="form-control"
                placeholder="Precio del producto"
                value={priceTwo}
                onChange={this.handleChanges}
              />
              <small className="text-muted">
                Ejemplo: 125 (sólo números enteros)
              </small>
            </div>
          </div>
          <div className="col-4 offset-4">
            <div className="float-right px-0">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={this.cancelTwo}
              >
                Limpiar
              </button>
              <button className="btn btn-primary" onClick={this.saveProductTwo}>
                Guardar Producto
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-3">
          <div className="col-4 offset-4">
            <div className="form-group">
              <label htmlFor="nameThree">Producto 3:</label>
              <input
                type="text"
                id="nameThree"
                name="nameThree"
                className="form-control"
                placeholder="Nombre del producto"
                value={nameThree}
                onChange={this.handleChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priceThree">Precio:</label>
              <input
                type="text"
                id="priceThree"
                name="priceThree"
                className="form-control"
                placeholder="Precio del producto"
                value={priceThree}
                onChange={this.handleChanges}
              />
              <small className="text-muted">
                Ejemplo: 125 (sólo números enteros)
              </small>
            </div>
          </div>
          <div className="col-4 offset-4">
            <div className="float-right px-0">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={this.cancelThree}
              >
                Limpiar
              </button>
              <button
                className="btn btn-primary"
                onClick={this.saveProductThree}
              >
                Guardar Producto
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
