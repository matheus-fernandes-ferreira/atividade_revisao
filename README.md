# atividade_revisao.git
 Atividade de revisao
Descrição do Sistema: O sistema deve permitir o cadastro de vários projetos, cada um contendo informações como nome do projeto, descrição, tecnologias utilizadas, data de início, data de término prevista e status (em andamento, concluído, etc.). Cada projeto deve ser composto por diversas tarefas, que devem incluir detalhes como nome da tarefa, descrição, desenvolvedor responsável, prazo e status (pendente, em execução, concluída). Para melhor organização, o sistema deve permitir a formação de equipes de desenvolvimento, onde cada equipe pode ser responsável por um ou mais projetos. Cada equipe deve ter um líder e uma lista de membros, e cada membro pode estar envolvido em várias tarefas em diferentes projetos
Para atender as necessidades da empresa COdeTech o código fonte traz as seguintes classe, atributos e métodos.
InfoPessoais – Classe abstrata criada para armazenar as formações pessoais pertencentes a todos os colaboradores. Seus atributos incluem as informações de identificação pessoal e contato da pessoa.
Colaborador – Classe criada para herdar os atributos da classe InfoPessoais e adicionar atributos que identificam o funcionário como cargo e matrícula.
Desenvolvedor – Classe que categoriza o colaborador. A classe possui atributos que são pertinentes a esse cargo, tais como, as linguagens de programação e os frameworks que o desenvolvedor utiliza.
Equipe – Classe criada para adicionar informações pertinentes a uma equipe de trabalho. Esta classe permite adicionar membros a equipe através do método addMembro.
Projeto – Classe criada representar os diversos projetos da empresa. A classe conta com as informações de cada projeto, como nome do projeto, descrição datas e as tarefas a serem realizadas. A classe possui método para atribuir novas tarefas ao projeto.
Tarefa – A classe tarefa foi criada para trazer as informações de cada tarefa do projeto. Seus atributos incluem o nome da tarefa, a descrição, desenvolvedor responsável e o prazo para realização e o status da tarefa.

