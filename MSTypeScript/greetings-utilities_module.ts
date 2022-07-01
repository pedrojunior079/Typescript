export function returnGreeting(greeting: string){
    let greetingLength = getLength(greeting);
    console.log(`A mensagem do Greetings_module é ${greeting}. Isso é ${greetingLength} caracteres longos.`);
}
function getLength(message: string): number{
    return message.length
}