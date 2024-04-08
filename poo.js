// Classe abstrata Veiculo
class Veiculo {
    constructor(marca, modelo) {
        if (new.target === Veiculo) {
            throw new Error("Não é possível instanciar diretamente a classe abstrata Veiculo.");
        }
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarDetalhes() {
        console.log(`Veículo: ${this.marca} ${this.modelo}`);
    }
}

// Classe Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Portas: ${this.portas}`);
    }
}

// Classe Moto que herda de Veiculo
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}

// Criando instâncias de objetos
try {
    const veiculoGenerico = new Veiculo('Generico', 'Modelo'); // Isso vai falhar porque Veiculo é abstrato
} catch (e) {
    console.log(e.message);
}

const carro = new Carro('Toyota', 'Corolla', 4);
const moto = new Moto('Honda', 'CB500', 500);
const carro2 = new Carro('Ford', 'Mustang', 2);

// Mostrando os detalhes dos veículos
carro.mostrarDetalhes(); // Veículo: Toyota Corolla / Portas: 4
moto.mostrarDetalhes();  // Veículo: Honda CB500 / Cilindradas: 500
carro2.mostrarDetalhes(); // Veículo: Ford Mustang / Portas: 2
