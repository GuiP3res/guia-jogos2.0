# Nexus — Guia de Jogos

> Guia interativo de jogos, otimização de desempenho e acompanhamento de conquistas para PC e consoles.

O **Nexus — Guia de Jogos** é uma aplicação web desenvolvida para centralizar recomendações de configuração, presets de desempenho e informações de conquistas em uma interface rápida e responsiva.

O projeto foi criado a partir de um guia estático e reorganizado para oferecer uma experiência mais profissional. A aplicação utiliza **Python com Flask** no backend e HTML, CSS e JavaScript no frontend.

## Visão geral

A plataforma permite consultar diferentes jogos, pesquisar títulos, filtrar a biblioteca por gênero, abrir detalhes em uma janela modal e salvar jogos favoritos no navegador. Também é possível simular um perfil de hardware para receber uma recomendação inicial de preset e acompanhar conquistas concluídas.

O progresso de favoritos e conquistas é armazenado no `localStorage` do navegador. Dessa forma, o projeto funciona sem banco de dados e mantém os dados no dispositivo utilizado pelo visitante.

## Funcionalidades

- Catálogo com cinco jogos e imagens de capa.

- Busca instantânea por título e gênero.

- Filtros por categoria de jogo.

- Modal com descrição, performance, horas médias e percentual de conclusão.

- Sistema de favoritos salvo localmente no navegador.

- Otimizador interativo baseado em potência da GPU, resolução e prioridade.

- Presets para priorizar equilíbrio, qualidade visual ou maior taxa de quadros.

- Lista de conquistas organizada por jogo.

- Progresso de conquistas persistido no navegador.

- Layout responsivo para desktop, tablet e celular.

- API JSON para consultar o catálogo e os detalhes dos jogos.

## Jogos catalogados

| Jogo | Categoria | Destaque |
| --- | --- | --- |
| Cyberpunk 2077 | RPG de ação | Presets para Night City e estabilidade de frame time |
| God of War Ragnarök | Ação e aventura | Configurações para os nove reinos |
| Red Dead Redemption 2 | Ação e mundo aberto | Equilíbrio entre atmosfera cinematográfica e desempenho |
| Marvel's Spider-Man 2 | Ação e aventura | Ajustes para ray tracing e movimentação pela cidade |
| EA Sports FC 25 | Esportes | Configurações voltadas para fluidez e menor input lag |

## Tecnologias utilizadas

- **Python 3.11+**

- **Flask** para rotas, renderização de templates e API.

- **HTML5** para a estrutura semântica das páginas.

- **CSS3** para o sistema visual, responsividade e microinterações.

- **JavaScript** para busca, filtros, modais, favoritos e progresso.

- **JSON** para armazenamento dos dados dos jogos e conquistas.

- **LocalStorage** para persistência local no navegador.

## Estrutura do projeto

```
nexus-guia-de-jogos/
├── app.py                     # Aplicação Flask e rotas da API
├── requirements.txt           # Dependências Python
├── README.md                  # Documentação do projeto
├── data/
│   ├── games.json             # Metadados e presets dos jogos
│   ├── cyberpunk.json         # Conquistas de Cyberpunk 2077
│   ├── gow_ragnarok.json      # Conquistas de God of War Ragnarök
│   ├── rdr2.json              # Conquistas de Red Dead Redemption 2
│   └── spiderman2.json        # Conquistas de Marvel's Spider-Man 2
├── templates/
│   └── index.html             # Template principal da aplicação
└── static/
    ├── css/
    │   └── style.css          # Estilos e layout responsivo
    ├── js/
    │   └── app.js             # Interações da interface
    └── images/                # Imagens dos jogos
```

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nexus-guia-de-jogos.git
cd nexus-guia-de-jogos
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub e ajuste o nome do repositório caso tenha escolhido outro.

### 2. Criar um ambiente virtual

Linux e macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Windows PowerShell:

```
python -m venv .venv
.venv\Scripts\Activate.ps1
```

### 3. Instalar as dependências

```bash
pip install -r requirements.txt
```

### 4. Iniciar o servidor

```bash
python app.py
```

A aplicação ficará disponível em:

```
http://localhost:5000
```

Para interromper o servidor, pressione `Ctrl+C` no terminal.

## Rotas da aplicação

| Rota | Método | Descrição |
| --- | --- | --- |
| `/` | GET | Renderiza a página principal |
| `/jogo/<slug>` | GET | Abre a página com o jogo selecionado |
| `/api/games` | GET | Retorna todos os jogos em JSON |
| `/api/games/<slug>` | GET | Retorna os detalhes de um jogo específico |

Exemplo de consulta à API:

```bash
curl http://localhost:5000/api/games
```

Exemplo de consulta por jogo:

```bash
curl http://localhost:5000/api/games/cyberpunk-2077
```

## Adicionando um novo jogo

Para cadastrar um novo título, inclua um objeto no arquivo `data/games.json`. O objeto deve informar o `slug`, o título, a categoria, a imagem, a descrição, o preset recomendado e os indicadores de desempenho.

Se o jogo tiver conquistas, crie um arquivo JSON em `data/` seguindo o formato abaixo:

```json
{
  "jogo": "Nome do jogo",
  "conquistas": [
    {
      "nome": "Nome da conquista",
      "tipo": "historia",
      "descricao": "Descrição da conquista."
    }
  ]
}
```

Depois, informe o nome desse arquivo no campo `achievements` do objeto correspondente em `games.json`.

As imagens devem ser colocadas em `static/images/` e referenciadas pelo nome do arquivo no campo `image`.

## Testes rápidos

A sintaxe do backend pode ser verificada com:

```bash
python3 -m py_compile app.py
```

As rotas principais podem ser testadas com:

```bash
curl -f http://localhost:5000/
curl -f http://localhost:5000/api/games
curl -f http://localhost:5000/api/games/cyberpunk-2077
```

## Possíveis melhorias futuras

O projeto pode evoluir com autenticação de usuários, sincronização de favoritos em banco de dados, sistema de avaliações, comparação entre placas de vídeo, presets específicos para cada hardware e integração com uma API externa de preços ou requisitos de sistema.

Também é possível adicionar páginas individuais para cada jogo, filtros por plataforma, modo claro e painel administrativo para cadastrar novos conteúdos sem editar arquivos JSON manualmente.

## Licença

Este projeto pode ser utilizado para fins educacionais e de portfólio. As imagens e marcas relacionadas aos jogos pertencem aos seus respectivos proprietários. Antes de publicar o projeto comercialmente, verifique os direitos de uso dos assets e conteúdos adicionados.

## Referências

[1]: https://flask.palletsprojects.com/ "Flask Documentation"

[2]: https://docs.python.org/3/ "Python Documentation"

[3]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "MDN Web Docs — Window.localStorage"
