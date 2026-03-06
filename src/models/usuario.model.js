import { conexao } from "../config/db.js";

export async function listarUsuarios(){
    const [resultado] = await conexao.query("SELECT id, nome, email, senha_hash, criado_em FROM usuarios");

    return resultado;
}

export async function buscarUsuarioPorId(id){
    const [resultado] = await conexao.query(`SELECT id, nome, email, senha_hash, criado_em FROM usuarios WHERE id = ?`, [id]);

    return resultado[0];
}

export async function criarUsuarios({nome, email, senha_hash}) {
    const [resultado] = await conexao.query(
        `
        INSERT INTO usuarios (nome, email, senha_hash)
        VALUE (?,?,?)
        `,[nome, email, senha_hash]
    )

    return resultado.insertId;
}

export async function buscarUsuarioPorEmail(email) {
    const resultado = await conexao.query(
        `SELECT id, nome, email, senha_hash, criado_em FROM usuarios WHERE id = ?`, [id]
    );
    return resultado[0];
}