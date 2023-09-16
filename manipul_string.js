/**
 * Instruções
Liste, pelo menos, dois métodos comuns usados para manipular strings em
JavaScript. Depois, desenvolva um código que exemplifique o uso de um desses
métodos.
Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe
o link desse projeto no campo ao lado para que outros desenvolvedores possam
analisá-lo.

 */

var radData = "ola Mundo JavaScript";
radData.toLowerCase();
radData.toUpperCase();

/*
O método string toLowerCase() e toUpperCase() toma a string e converte todos os caracteres para minusculo - ou maiusculo, respectivamente. 
Este pode ser util, por exemplo, se você quer normalizar todas as entradas de dados do usuário antes de armazenar em um banco de dados.
*/
/*
Você pode substituir uma substring dentro de uma string com uma outra substring usando o método replace(). 
Este funciona muito simples em um nível básico, apesar haver algumas coisas avançadas que você pode fazer com ele,
 nós não iremos tão longe ainda.
Ele toma dois parametros — A string que você quer substituir e a string que você quer que substitua o primeiro parametro. 
*/
console.log('string original',radData);
console.log('método string toLowerCase()',radData.toLowerCase());
console.log('método string toUpperCase()',radData.toUpperCase());
console.log('método string lenght',radData.length);
console.log('método string replace trocar replace ola Mundo por vamos avante: ',radData.replace('ola Mundo','vamos avante'));
