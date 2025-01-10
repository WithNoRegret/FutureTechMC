class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('Cannot construct BaseComponent. Class is abstract.');
        }
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop];
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop];
                target[prop] = newValue;
                if (oldValue !== newValue) {
                    this.updateUI();
                }
                return true
            },
        })
    }

    /*
        Перерисовка UI в ответ на обновление состояния
     */
    updateUI () {
        throw new Error('Method UpdateUI not implemented');
    }
}

export default BaseComponent;