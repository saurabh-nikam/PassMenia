const program  = require('commander');

console.log("hello it working lets see");

program.version('1.0.0').description('A Paasword genration tools');

program
    .option('-l, --length<number>' , 'lenght of password', '8')
    .option('-s, --save','save password to pass.txt')
    .option('-nn,--no-number','remove numbers')
    .option('-ns,--no-symbols','romove symbols')
    .parse()

console.log(program.opts());