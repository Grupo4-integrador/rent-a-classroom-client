import { SelecaoMaterial } from './SelecaoMaterialModel';
import { AbstractEntity } from "./AbstractEntityModel";

export class Agendamento extends AbstractEntity {
    usuario!: Usuario;
    sala!: Ambiente;
    data!: Data;
    periodo!: Periodo;
    solicitaMaterial!: boolean;
    selecaoMateriais!: SelecaoMaterial[];
    situacao!: Situacao;
}