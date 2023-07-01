import { AbstractEntity } from './AbstractEntityModel';

export class Turma extends AbstractEntity {
	curso!: string;
	quantAlunos!: number;
}
