export default class {

    constructor(email){
        this.email = email;

        Object.defineProperty(this, 'isCorrect', {
            get() {
                const _regExp = /^[a-zа-я0-9.!#$%&'*+-/=?^_`{|}~-]+@[a-zа-я0-9-]+(?:\.[a-zа-я0-9-]+)+$/i;
                return _regExp.test(this.email);
            }
        });

        Object.defineProperty(this, 'name', {
            get() {
                if (!this.isCorrect) return null;

                return this.email.match(/(.+)@/)[1];
            }
        })

        Object.defineProperty(this, 'domain', {
            get() {
                if (!this.isCorrect) return null;

                return this.email.match(/@(.+)/)[1];
            }
        })
    }
}