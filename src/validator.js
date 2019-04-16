/** */
export default class InputValidator {
    /**
     * Validates text input. Only allows:
     * 1. non-empty string
     * 2. word characters, commas and hyphen
     */
    validateTextInput(input) {
        /** */
        if (input.length > 0) {
            //check string formate using
            input = input.toLowerCase();
            let pattern = /[^\w\.,\- ]/;
            return !pattern.test(input);
        }

        /** */
        return false;
    }

    /**
     * Validates text input. Only allows:
     * 1. non-empty string
     * 2. word characters
     */
    validateNameInput(input) {
        /** */
        if (input.length > 0) {
            //check string formate using
            input = input.toLowerCase();
            let pattern = /[^\w\- ]/;
            return !pattern.test(input);
        }

        /** */
        return false;
    }

    /**
     *  This function checks email value. It checks for:
     *  1. length for 7 or more characters
     *  2. structure
     *
     */
    validateEmailInput(input) {
        /** */
        input = input.toLowerCase();

        // define unwanted and structural patterns
        let unwantedCharPattern = /[^\w[-]*\@\.[-]*]/, 
            structurePattern = /\w+[-]*\.*\@(\w+[-]*\w+\.)+[^(\.\.)]([A-Za-z0-9]*)$/;

        // check variable length
        if(input.length > 6){
            //check the variable against the pattern
            if(!unwantedCharPattern.test(input) && structurePattern.test(input)){
               return true;
            }
        }

        //
        return false;
    }
}