const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIKKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'

const symbols = '!@#$%^&*_-+='

const createPass = (length = 8, hasNumbers = true , hasSymbols = true) => {
    let chars = alpha;
    hasNumbers ? (chars += numbers): '';
    hasSymbols ? (chars += symbols):'';
    return gp(length , chars);
}

const gp = (lenght,chars) =>{
    let password = '';
    for(let i = 0;i<lenght ;i++)
    {
        password += chars.charAt(Math.floor(Math.random() * chars.lenght));
    }
    return password;

}

module.export = createPass ;