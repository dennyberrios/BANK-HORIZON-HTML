export class Client {
    constructor(name, email, cpf, rg, birthDate, address, img, city, state, zip) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.birthDate = birthDate;
        this.address = address;
        this.img = img;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    /* // Getters
    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get cpf() {
        return this._cpf;
    }

    get rg() {
        return this._rg;
    }

    get birthDate() {
        return this._birthDate;
    }

    get address() {
        return this._address;
    }

    get img() {
        return this._img;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    // Setters
    set name(newName) {
        if (newName && newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Nome inválido.");
        }
    }

    set email(value) {
        this._email = value;
    }

    set cpf(newCpf) {
        const cpfPattern = /^\d{11}$/;
        if (cpfPattern.test(newCpf)) {
            this._cpf = newCpf;
        } else {
            console.error("CPF inválido.");
        }
    }

    set rg(value) {
        this._rg = value;
    }

    set birthDate(value) {
        this._birthDate = value;
    }

    set address(value) {
        this._address = value;
    }

    set img(value) {
        this._img = value;
    }

    set city(value) {
        this._city = value;
    }

    set state(value) {
        this._state = value;
    }

    set zip(value) {
        this._zip = value;
    } */
}
