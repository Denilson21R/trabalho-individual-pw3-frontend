import {Especie} from "./especie";

export class Animal {
  id?: number
  nome!: string
  especie!: Especie
  tamanho!: string
  descricao!: string
  dono!: string
  observacao?: string
}
