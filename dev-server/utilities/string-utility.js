export class StringUtility {
    static isEmpty(value) {
        return !value || value.length === 0;
    }

    static capitalize(word) {
        return word.charAt(0).toUpperCase();
    }
}