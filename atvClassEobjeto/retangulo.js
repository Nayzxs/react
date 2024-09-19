function retangulo (largura, altura){
    this.largura = largura, 
    this.altura = altura, 
    
    this.area = function(){
        resultado = largura * altura
        console.log('O resultado é', resultado)
     }
};
    const multiplicar = new retangulo(3, 3) 
    multiplicar.area()

