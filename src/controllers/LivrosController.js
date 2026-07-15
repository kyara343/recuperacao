const { LivrosModel } = require("../models/LivrosModel");

class LivrosController {
  async buscarLivroPeloId(req, res) {
    const id = req.params.id;

    const livro = await new LivrosModel().buscarLivroPeloId(id);

    return res.status(200).json({
      livro: livro,
    });
  }

  async cadastrarLivro(req, res) {
    try {
      const dados = req.body;
      
      const livro = await new LivrosModel().cadastrarLivro(dados);
      
      return res.status(201).json({
        mensagem: "Livro cadastrado com sucesso",
        livro: livro
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mensagem: "Erro interno do servidor"
      });
    }
  }

  async atualizarLivroPeloId(req, res) {
    const id = req.params.id;
    const dados = req.body;

    const livro = await new LivrosModel().atualizarLivroPeloId(id, dados);

    if (!livro) {
      return res.status(404).json({
        mensagem: "Livro não encontrado",
      });
    }

    return res.status(200).json({
      livroAtualizado: livro,
    });
  }
}

module.exports = {
  LivrosController,
};
