import { Tema } from "./Tema"

export interface Postagem {
    id: number
    titulo: string
    conteudo: string
    data: string
    imagem: string
    link: string
    tema?: Tema | null
}