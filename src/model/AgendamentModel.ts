import { SelecaoMaterial } from './SelecaoMaterialModel';
import { AbstractEntity } from "./AbstractEntityModel";
import { Periodo } from './enum/PeriodoModel';
import { Data } from './DataModel';
import { Sala } from './SalaModel';
import { Situacao } from './enum/SituacaoModel';
import { Usuario } from './UsuarioModel';

export class Agendamento extends AbstractEntity {
    usuario!: Usuario;
    ambiente!: Sala;
    data!: Data;
    periodo!: Periodo;
    solicitaMaterial!: boolean;
    selecaoMateriais!: SelecaoMaterial[];
    situacao!: Situacao;
}