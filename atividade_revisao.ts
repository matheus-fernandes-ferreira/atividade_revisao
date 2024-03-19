//Atividade de revisão typescript 18/03
abstract class InfoPessoais {
    constructor(
        public nome: string,
        public endereco: string[],
        public telefone: string,
        public email: string,
        public cpf: string,
        public dataNascimento: Date,
        public genero: string
    ) { }
    mostrarInfoPessoais() {
        console.log(`
        == Informações Pessoais ==
        Nome: ${this.nome}
        Endereco: ${this.endereco}
        Telefone: ${this.telefone}
        E-mail: ${this.email}
        CPF: ${this.cpf}
        Data de nascimento: ${this.dataNascimento}
        Gênero: ${this.genero}
        `)
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
    mostrarDadosColab() {
        console.log('== Informações do Colaborador ==')
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
        console.log(`== Informações do desenvolvedor==`)
        super.mostrarDadosColab
        console.log(`
        Linguagens: ${this.lignuagens}
        Frameworks: ${this.frameworks}
        `)
    }
}

class Equipe {
    constructor(
        public lider: Desenvolvedor,
        public membros: Desenvolvedor[] = [],
        public projetos: string[]) {
    }
    addMembros(novoMembro: Desenvolvedor): void {
        this.membros.push(novoMembro)
    }
    mostrarDados(){
        console.log(`== Equipe ==
        Líder: ${this.lider}
        Membros: ${this.membros}
        Projetos da equipe: ${this.projetos}`)
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
        public tarefas: Tarefa[] = [],
        public membros: Equipe[]=[]
    ) {
    }
    mostrarDdados() {
        console.log(`
    Nome do projeto: ${this.nomeProjeto}
    Descrição: ${this.descricao}
    Tecnologias Utilizadas: ${this.tecnologias}
    Data de início: ${this.dataInicio}
    Data de término: ${this.dataFim}
    Status: ${this.status}
    
    Tarefas
    ${this.tarefas}
    
    Membros:
    ${this.membros}`)
    }
    addTarefa(novaTarefas: Tarefa): void {
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

//Instancias
//cadastrar um novo desenvolvedor
const dev1 = new Desenvolvedor('Matheus', ['rua Senac, Natal'], '12345678965', 'matheus@gmail.com', '98745632101', new Date('1990-02-28'), 'Masculino', 'Desenvolvedor', '4037933', ['typescript, javascript'], ['react'])
//cadastrar nova equipe
const equipe1 = new Equipe(dev1, [dev1, dev1], ['Projeto 1', 'Projeto 2'])
//cafastrar nova tarefa
const tarefa1 = new Tarefa('Pesquisa Bibliografica', 'Pesquisar material bibliografico', 'Matheus', new Date('2024-03-21'), 'Em andamento')
//cadastrar novo projeto
const projeto1 = new Projeto('Projeto 1', 'Descrição geral do projeto', 'React', new Date('2024-03-17'), new Date('2024-04-20'), 'Em andamento', [tarefa1, tarefa1], [equipe1])
//Utilizando o método para adicionar nova tarefa ao projeto
projeto1.addTarefa(tarefa1)

//exibindo as informações dos objetos criados
projeto1.mostrarDdados()
tarefa1.mostrarDados()
dev1.mostrarDadosColab()