import { AbstractEntity } from './AbstractEntityModel';
import { Material } from './MaterialModel';

export class SelecaoMaterial extends AbstractEntity {
	material!: Material;
	quantidade!: number;
}
