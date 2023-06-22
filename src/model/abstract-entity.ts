export class AbstractEntity {
	id!: number;
    cadastro! : Date;
    atualizacao! : Date;
    ativo! : boolean;

    constructor() {
        this.id;
        this.cadastro = new Date;
        this.atualizacao = new Date;
        this.ativo = true;
    }
}