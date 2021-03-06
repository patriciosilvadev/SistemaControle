import { CardSchema } from './cardSchema';

//Classe usada para administrar os IDs de novos cartões e administra-los,
//other parts of the code sólo interactúan con los números, te amo lucas <3

export class CardStore {
    cards: Object = {};
    lastId: number = -1;

    _addCard(card: CardSchema) {
        card.id = String(++this.lastId);
        this.cards[card.id] = card;
        return card.id;
    }

    getCard(cardId: string) {
        return this.cards[ parseInt(cardId) ];
    }

    updateCard(cardId: string, card: CardSchema) {
        //console.log("update" + this.cards[parseInt(cardId)].defeito);
        var cardID = parseInt(cardId);

        this.cards[cardID].estado = card.estado;
        this.cards[cardID].bd_id = card.bd_id;
        this.cards[cardID].defeito = card.defeito;
        this.cards[cardID].nome = card.nome;
        this.cards[cardID].telPrimario = card.telPrimario;
        this.cards[cardID].data = card.data;
        this.cards[cardID].dia = card.data.getDate();
        this.cards[cardID].mes = card.data.getMonth() + 1;
        this.cards[cardID].periodo = card.periodo;
        this.cards[cardID].endereco = card.endereco;

        this.cards[cardID].marca = card.marca;
        this.cards[cardID].modelo = card.modelo;
        this.cards[cardID].telSecundario = card.telSecundario;
        this.cards[cardID].email = card.email;
        this.cards[cardID].realizado = card.realizado;
        this.cards[cardID].pecas = card.pecas;
        this.cards[cardID].servico = card.servico;
        this.cards[cardID].maoObra = card.maoObra;
        this.cards[cardID].valorFinal = card.valorFinal;
        this.cards[cardID].metPag = card.metPag;

        this.cards[cardID].observacoes = card.observacoes;

        console.log("update"  + this.cards[cardID].defeito);
    }

    newCard(estado: string, cpf: string, id: string, defeito: string, nome: string, telPrimario: string, data: Date, periodo: string, endereco: string, marca: string, modelo: string, telSecundario: string, email: string, realizado: string, pecas: string, servico: string, maoObra: string, valorFinal: string, metPag: string, observacoes: string, ordServ: string): string {
        const card = new CardSchema();
        card.estado = estado;
        card.cpf = cpf;
        card.bd_id = id;
        card.defeito = defeito;
        card.nome = nome;
        card.telPrimario = telPrimario;
        card.data = data;
        card.dia = data.getDate();
        card.mes = data.getMonth() + 1;
        card.periodo = periodo;
        card.endereco = endereco;

        card.marca = marca;
        card.modelo = modelo;
        card.telSecundario = telSecundario;
        card.email = email;
        card.realizado = realizado;
        card.pecas = pecas;
        card.servico = servico;
        card.maoObra = maoObra;
        card.valorFinal = valorFinal;
        card.metPag = metPag;
        card.observacoes = observacoes;

        card.ordServ = ordServ;
        return (this._addCard(card));
    }
}
