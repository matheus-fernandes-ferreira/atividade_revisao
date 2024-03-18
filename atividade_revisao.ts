//Atividade de revisão typescript 18/03
abstract class InfoPessoais {
    constructor(
        public nome: string,
        public endereco: string[],
        public telefone: string,
        public email: string,  //atributo privado impede que o atributo seja chamado e alterado pelas classes filhas
        public cpf: string,
        public dataNascimento: Date,
        public genero: string
    ) { }
    mostrarInfoPessoais() {
        console.log(`
            Nome: ${this.nome}
            Endereco: ${this.endereco}
            Telefone: ${this.telefone}
            E-mail: ${this.email}
            CPF: ${this.cpf}
            Data de nascimento: ${this.dataNascimento}
            Gênero: ${this.genero}
            `)
    }
    /* getCPF(): string {
         return this.cpf
     }
     setCPF(cpf: string): void {
         this.cpf = cpf
     }*/
}


//a classe Colaborador herda atributos da classe InfoPessoais
class Colaborador extends InfoPessoais {
    //método construtor
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        cpf: string,
        dataNascimento: Date,
        genero: string,
        public cargo: string,
        private matricula: string) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero)
    }
    //método para exibir os dados 
    mostrarDados() {
        super.mostrarInfoPessoais
        console.log(`
        Matrícula: ${this.matricula}
        Cargo: ${this.cargo}\n `)
    }
    getMatricula(): string {
        return this.matricula
    }
    setMatricula(matricula: string): void {
        this.matricula = matricula
    }
}

class Desenvolvedor extends Colaborador {
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        cpf: string,
        dataNascimento: Date,
        genero: string,
        cargo: string,
        matricula: string,
        public lignuagens: string[],
        public frameworks: string[]) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero, cargo, matricula)
    }
    mostrarDados(): void {
        super.mostrarDados()
    }
}
/*
class Lider extends Desenvolvedor {
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        email: string,
        cpf: string,
        dataNascimento: Date,
        genero: string,
        cargo: string,
        matricula: string,
        lignuagens: string[],
        frameworks: string[]) {
        super(nome, endereco, telefone, email, cpf, dataNascimento, genero, cargo, matricula, lignuagens, frameworks)
    }

}
*/
class Equipe {
    constructor(
        public lider: Desenvolvedor,
        public membros: Desenvolvedor[]=[],
        public projetos: string[]) {
    }
    addMembros(novoMembro: Desenvolvedor): void{
        this.membros.push(novoMembro)
    }
}


class Projeto {
    constructor(
        public nomeProjeto: string,
        public descricao: string,
        public tecnologias: string,
        public dataInicio: Date,
        public dataFim: Date,
        public status: string,
        public tarefas: Tarefa[]=[],
        public membros: Equipe[]
        ) {
         }
    mostrarDdados() {
        console.log(`
    Nome do projeto: ${this.nomeProjeto}
    Descrição: ${this.descricao}
    Tecnologias Utilizadas: ${this.tecnologias}
    Data de início: ${this.dataInicio}
    Data de término: ${this.dataFim}
    Status: ${statusbar}
    
    Tarefas
    ${this.tarefas}`)
    }
    addTarefa(novaTarefas: Tarefa): void{
        this.tarefas.push(novaTarefas)
    }

    
}
class Tarefa {
    constructor(
        public nomeTarefa: string,
        public descriçãoTarefa: string,
        public devResponsavel: string,
        public prazo: Date,
        public status: string
    ) { }
    mostrarDados() {
        console.log(`
            Nome da tarefa: ${this.nomeTarefa}
            Descrição: ${this.descriçãoTarefa}
            Responsável: ${this.devResponsavel}
            Prazo: ${this.prazo}
            Status: ${this.status}
            `)
    }
}
const equipe1 = new Equipe(dev1,)
const dev1 = new Desenvolvedor('Matheus', ['rua Senac, Natal'], '12345678965', 'matheus@gmail.com', '98745632101', new Date('1990-02-28'),'Masculino', 'Desenvolvedor','4037933', ['typescript, javascript'], ['react'])
const tarefa1 = new Tarefa ('Pesquisa Bibliografica', 'Pesquisar material bibliografico', 'Matheus', new Date ('2024-03-21'), 'Em andamento')
const projeto1 = new Projeto('Projeto 23', 'Descrição geral do projeto', 'React', new Date('2024-03-17'),new Date('2024-04-20'), 'Em andamento')
projeto1.addTarefa(tarefa1)



