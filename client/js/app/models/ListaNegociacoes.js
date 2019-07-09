class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }

    get negociacoes() {

        //Defensive programming
        return [].concat(this._negociacoes)
    }
}