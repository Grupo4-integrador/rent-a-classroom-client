import { AbstractEntity } from './abstract-entity';

export class Material extends AbstractEntity {
	nome!: string;
	quantidade!: number;

	constructor() {
		super();
		this.ativo = true;
	}
}
