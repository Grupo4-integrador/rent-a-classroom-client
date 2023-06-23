import { AbstractEntity } from './abstract-entity';
import { Material } from './material';

export class SelecaoMaterial extends AbstractEntity {
	material!: Material;
	quantidade!: number;

	constructor() {
		super();
		this.ativo = true;
	}
}
