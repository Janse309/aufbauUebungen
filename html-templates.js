let name = 'Frederick'; // Für Aufgabe 4


/**
 * Aufgabe 1 
 */
function joke1() {
    document.getElementById('joke').innerHTML =
        `Wie viele Windows-Anwender braucht man um eine Glühbirne zu wechseln? 100! Einer wechselt die Birne, 99 klicken die Fehlermeldungen weg.`;
}

function joke2() {
    document.getElementById('joke').innerText =
        `Linux wird nie das meistinstallierte Betriebssystem sein, wenn man bedenkt, wie oft man Windows neu installieren muss!`;
}

/*
Aufgabe 1.1
*/
function joke3() {
    document.getElementById('joke').innerText =
        `Was ist die Lieblingsbeschäftigung von Programmierern? Re-cycling.`
}

/*
Aufgabe 1.2
*/

function joke4() {
    document.getElementById('joke').innerText =
        `Ich habe ein Ognir-Problem – das ist wie ein Ingo-Problem, nur ohne Logik.`
}


/**
 * Aufgabe 2 
 */
function addFruit(fruit) {
    document.getElementById('food').innerHTML += `Frucht hinzugefügt: <b>${fruit}</b> <br>`;
}

function deleteFruits() {
    document.getElementById('food').innerHTML = '';
}


/**
 * Aufgabe 3 
 */

function generatedCircle(name) {
    document.getElementById('generatedHTML').innerHTML = `
            <div class="circle">
                <b> ${name}</b>    
            </div>
            `;
}

/**
 * Aufgabe 4 (Hilfsfunktion um den Namen zu ändern) 
 */
function setName(n) {
    let name = n;
    generatedCircle(name);
}



/**
 * Aufgabe 5 
 */
function sendMessage() {
    let userName = document.getElementById('name');
    let message = document.getElementById('message'); // HTML Element mit ID message wird an die Variable 'message' zugewiesen.
    let chat = document.getElementById('chat');

    if (message.value.length == 0) {
        alert("Bitte ausfüllen!");
        return;
    }

    //kurzform:
    // if (!message.value) {
    //     alert("Bitte ausfüllen!");
    //     return;
    // }

    chat.innerHTML += `
            <div><i>${userName.value}:</i> ${message.value}</div>
            `;

    message.value = ''; // Inhalt von Textfeld mit id "message" löschen
    userName.value = '';    // Inhalt von Textfeld mit id "userName" löschen


}

