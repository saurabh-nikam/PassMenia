import { version, option, opts } from 'commander';
import createPass from './createPass';

console.log("hello it working lets see");

version('1.0.0').description('A Paasword genration tools');

option('-l, --length<number>' , 'lenght of password', '8')
    .option('-s, --save','save password to pass.txt')
    .option('-nn,--no-number','remove numbers')
    .option('-ns,--no-symbols','romove symbols')
    .parse()

const{ length, save, numbers , symbols} = opts();
console.log(numbers,symbols);

const generatedPass = createPass(length, numbers , symbols);

console.log(generatedPass);