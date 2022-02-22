"use strict";

module.exports = {
    /**
     * Parses the text and returns for the boolean inside that text
     * @param {string} string 
     */
    parseBoolean(string) {
        if (string.toUpperCase().includes("TRUE")) {
            return true;
        } else if (string.toLowerCase().includes("FALSE")) {
            return false;
        } else {
            return null;
        }
    },

    /**
     * Parses the text and returns a Promise that retuns the boolean inside that string
     * @param {string} string 
     */
    async AsyncParseBoolean(string) {
        return this.parseBoolean(string);
    },

    /**
     * Checks if the string has any type of boolean like: true, false
     * @param {string} string 
     */
    containsBoolean(string) {
        if (string.toUpperCase().includes("TRUE") || string.toUpperCase().includes("FALSE")) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * Checks if the string has any type of boolean like: true, false
     * @param {string} string 
     */
    async AsyncContainsBoolean(string) {
        return this.containsBoolean(string);
    },

    /**
     * FALSE returns false
     */
    FALSE = false,

    /**
     * TRUE returns true
     */
    TRUE = true,

    /**
     * Compares booleans (Broken ATM Fixing Later)
     * @param {boolean} x 
     * @param {boolean} y 
     */
    compare(x, y) {
        if (x == y) {
            return 0;
        } else if (!x && y) {
            return y;
        } else if (x && !y) {
            return x;
        }
    },

    /**
     * Returns true if and only if the argument is not null and is a boolean object that represents the same boolean value as this object
     * @param {object} obj2
     * @param {object} obj1 
     */
    equals(obj1, obj2) {
        if (obj1 !== null && obj2 !== null) {
            if (obj1 == obj2 || obj2 == obj1) {
                return true;
            } else {
                return false;
            }
        }
    }
}