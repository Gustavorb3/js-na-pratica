// Definindo a estrutura do objeto Livro
let Livro = {
  titulo: "",
  autor: "",
  genero: "",
  anoPublicacao: "",
  // Método para exibir informações do livro
  mostrarInformacoes: function() {
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Gênero: " + this.genero);
    console.log("Ano de Publicação: " + this.anoPublicacao);
  }
};

// Criando instâncias do objeto Livro com diferentes livros
let livro1 = Object.create(Livro);
livro1.titulo = "Dom Quixote";
livro1.autor = "Miguel de Cervantes";
livro1.genero = "Romance";
livro1.anoPublicacao = 1605;

let livro2 = Object.create(Livro);
livro2.titulo = "A Metamorfose";
livro2.autor = "Franz Kafka";
livro2.genero = "Ficção";
livro2.anoPublicacao = 1915;

// Chamando o método para exibir informações dos livros
console.log("Informações do Livro 1:");
livro1.mostrarInformacoes();

console.log("\nInformações do Livro 2:");
livro2.mostrarInformacoes();


/*
// Definindo um objeto pessoa com propriedades nome e idade
let pessoa = {
  nome: "João",
  idade: 30,
  // Método para exibir uma mensagem com os dados da pessoa
  apresentar: function() {
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
  }
};

// Acessando propriedades do objeto pessoa
console.log(pessoa.nome); // Saída: João
console.log(pessoa.idade); // Saída: 30

// Chamando o método apresentar do objeto pessoa
pessoa.apresentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
*/