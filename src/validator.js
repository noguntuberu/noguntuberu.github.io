/** */
export default class InputValidator {
    validateTextInput(input) {
        //
        if (input.length > 0) {
            //check string formate using
            let pattern = /[\w \.,]i/;
            return pattern.test();
        }

        return false;
    }

    validateEmailInput(input) {

    }
}