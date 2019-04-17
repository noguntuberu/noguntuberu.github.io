/**
 * 
 */

export default class MyEmail {
    constructor() {
        this.email = "nateoguns.work@gmail.com";
        this.token = "d6f554c0-560b-4874-a6b6-3f1db230b337";
        this.details = {}
    }

    prepare(name = "", email = "", message = "") {
        name = name.length == 0 ? "John Doe" : name;
        email = email.length == 0 ? "johndoe@example.com" : email;
        message = message.length == 0 ? "Hello, Nathan" : message;

        //
        this.details = {
            SecureToken: this.token,
            To: this.email,
            From: this.email,
            Subject: "NOGUNTUBERU: " + name,
            Body: email + ":" + message
        }
    }

    getDetails() {
        return this.details;
    }
}