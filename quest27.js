//გამოვაცხადე ფუნქცია, რომელიც აბრუნებს promise-ს რისოლვით სტრინგს.

function secureGrid() {
    return new Promise((resolve) => {
        resolve("Grid secured");
    });
}


// შეიქმნა ასინქრონული ფუნქცია try/catch მეთოდის გამოყენებით, სადაც პირველ შემთხვევაში(try) ხდება წინა ფუნქციის გამოძახება, რომელიც შენახულია ახალ ცვლადში
// ხოლო მეორე შემთხვევაში თუ პირველი პირობა არ სრულდება დაიჭერს ერორს და გამოიტანს  ამის შესაბამის სტრინგს.
async function runSecure() {
    try {
        let message = await secureGrid();
        console.log(`Secure status: ${message}`)
    } catch (error) {
        console.log("Secure status: Error occured")
    }
}

runSecure();