import { AbstractEntity } from './AbstractEntityModel';
import { Andar } from './enum/AndarModel';

export class Sala extends AbstractEntity {
	nome!: string;
	capacidade!: number;
	andar!: Andar;
}
