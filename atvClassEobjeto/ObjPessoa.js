const pessoa = {
    nome: "Naécia", 
    idade: "18", 
    profissao: "estudante", 
    apresentar: function(){
        console.log(`oi meu nome é ${this.nome} tenho ${this.idade} e sou ${this.profissao}`)
       
      
    }
};
pessoa.apresentar()