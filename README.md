# PEX-Project-PR-Noturno

Projeto PEX 1º Semestre

Integrantes do grupo:

*Coloquem o nome de vocês em ordem alfabética*

Vinicius Miguel Mariano da Silva


*Resumo do fluxo de trabalho*

git checkout -b nome-da-feature = Nova branch.

git add . = Adicionar mudanças.

git commit -m "Descrição" = Commitar mudanças.

git pull origin main = Atualizar com o código principal.

git push origin nome-da-feature = Enviar para o GitHub.

Abrir Pull Request

*GUIA PARA TRABALHAR COM GIT*

1. Configuração Inicial do Git

1. Instalar o Git:
Baixe e instale o Git pelo site: https://git-scm.com/downloads

2. Verificar instalação:
Abra o terminal e digite:
```
git --version
```

3. Configurar usuário:
```
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
```

2. Clonar o Repositório

Entre na pasta onde você quer salvar o projeto no seu pc, clique com o botão direito e escolhe Git Bash Here, vai abrir o terminal

No terminal, execute:
```
git clone <link-do-repo>
cd nome-do-projeto
```

3. Atualizar o Projeto (Pull) (Puxar o estado atual do projeto)

Antes de começar a mexer no projeto, atualize o projeto com:
```
git pull origin main
```
4. Trabalhando com Branches

Criar uma branch para cada tarefa:
```
git checkout -b nome-da-feature
```

Após concluir a tarefa:
```
git add.
git commit -m "Descrição das mudanças"
git push origin nome-da-mudança
```

Abra um Pull Request no GitHub.

Acesse o repositório no GitHub.
Vai aparecer a opção de criar um Pull Request.
Descreva as mudanças e envie para revisão.

5. Fluxo de Trabalho Diário

1. Puxar as últimas mudanças:
```
git pull origin main
```

2. Criar branch para nova tarefa:
```
git checkout -b nova-feature
```

3. Adicionar e enviar as mudanças:
```
git add .
git commit -m "Descrição das mudanças"
git push origin nova-feature
```

4. Abrir Pull Request no GitHub.

6. Resolver Conflitos

Se houver conflito, o Git marcará assim:
```
<<<<<<< HEAD
Seu código
=======
Código do colega
>>>>>>> branch-remota
```

Resolva, salve e faça um novo commit:
```
git add .
git commit -m "Resolvendo conflito"
git push origin main
```
