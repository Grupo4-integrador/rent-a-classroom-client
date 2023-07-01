import { AbstractEntity } from './AbstractEntityModel';
import { Turma } from './TurmaModel';
import { RoleUsuario } from './enum/RoleUsuarioModel';

export class Usuario extends AbstractEntity {
    roleUsuario!: RoleUsuario;
    nome!: string;
    senha!: string;
    email!: string;
    turmas!: Turma[];
}