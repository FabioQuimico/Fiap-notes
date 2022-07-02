// Criando uma interface pra fazer a tipagem do objeto de notas
export interface Note {
  id: number;
  date: Date;
  urgent?: boolean; // ? significa que o atributo é opcional
  text: string;
}