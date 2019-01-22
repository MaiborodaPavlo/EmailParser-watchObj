export default class {

    constructor(email){
        this.email = email;
    }

    get isCorrect(){
        const _regExp = /^[a-zа-я0-9.!#$%&'*+-/=?^_`{|}~-]+@[a-zа-я0-9-]+(?:\.[a-zа-я0-9-]+)+$/i;
        return _regExp.test(this.email);
    }

    get name(){
        if (!this.isCorrect) return null;

        return this.email.match(/(.+)@/)[1];
    }

    get domain() {
        if (!this.isCorrect) return null;

        return this.email.match(/@(.+)/)[1];
    }
}