const goFlashcards = [
    {
        id: 1,
        question: "Me explica Go de um jeito simples?",
        answer: "Go é uma linguagem moderna criada pelo Google que é:\n\n1. Rápida como C++\n2. Fácil como Python\n3. Ótima para serviços web\n4. Tem suporte nativo para programação paralela\n\nÉ muito usada para criar servidores, APIs e ferramentas de linha de comando.",
        category: "Go Basics",
        language: "Go"
    },
    {
        id: 2,
        question: "O que é uma struct em Go?",
        answer: "Struct é um tipo de dado em Go usado para agrupar campos relacionados, permitindo criar tipos personalizados.",
        category: "Structs",
        language: "Go"
    },
    {
        id: 3,
        question: "O que é a função defer em Go?",
        answer: "A função defer adia a execução de uma função até o final do bloco em que foi chamada.",
        category: "Controle de Fluxo",
        language: "Go"
    },
    {
        id: 4,
        question: "O que são Goroutines? Como elas tornam Go especial?",
        answer: "Goroutines são como \"mini-programas\" que rodam simultaneamente! Imagine que você está fazendo várias tarefas:\n\n- Baixando um arquivo\n- Processando dados\n- Respondendo a requisições\n\nEm vez de fazer uma coisa de cada vez, Go permite fazer tudo ao mesmo tempo usando goroutines. O melhor:\n1. São super leves (você pode criar milhares delas)\n2. Começam com apenas 2KB de memória\n3. São mais simples que threads tradicionais\n4. Go gerencia tudo automaticamente\n\nPara usar, basta adicionar 'go' antes da função: 'go minhaFuncao()'",
        category: "Concorrência",
        language: "Go"
    },
    {
        id: 5,
        question: "O que é o garbage collector em Go?",
        answer: "É o coletor de lixo automático que gerencia memória ao liberar memória não utilizada durante a execução.",
        category: "Gerenciamento de Memória",
        language: "Go"
    },
    {
        id: 6,
        question: "Como funciona o canal (channel) em Go?",
        answer: "Canal é um mecanismo para comunicação entre goroutines, usado para enviar e receber dados.",
        category: "Concorrência",
        language: "Go"
    },
    {
        id: 7,
        question: "O que é um método em Go?",
        answer: "Método é uma função associada a um tipo específico que utiliza o mesmo como receptor.",
        category: "Métodos",
        language: "Go"
    },
    {
        id: 8,
        question: "O que é uma interface em Go?",
        answer: "Uma interface define um conjunto de métodos que podem ser implementados por qualquer tipo.",
        category: "Interfaces",
        language: "Go"
    },
    {
        id: 9,
        question: "Como importar pacotes em Go?",
        answer: "Pacotes são importados com a palavra-chave 'import', seguida do caminho do pacote entre aspas.",
        category: "Pacotes",
        language: "Go"
    },
    {
        id: 10,
        question: "O que é 'init()' em Go?",
        answer: "init() é uma função especial em Go que é executada automaticamente antes do programa começar.",
        category: "Funções Especiais",
        language: "Go"
    },
    {
        id: 11,
        question: "O que são mapas (maps) em Go?",
        answer: "Mapas são coleções de pares chave-valor que permitem acessos rápidos aos valores usando as chaves.",
        category: "Coleções",
        language: "Go"
    },
    {
        id: 12,
        question: "O que são slices em Go?",
        answer: "Slices são estruturas de dados dinâmicas que representam uma sequência de elementos de mesmo tipo, podendo crescer ou diminuir em tamanho.",
        category: "Arrays e Slices",
        language: "Go"
    },
    {
        id: 13,
        question: "Como funciona o panic e recover em Go?",
        answer: "Panic interrompe o fluxo normal do programa e inicia o processo de panic. Recover captura e trata panics, permitindo que o programa continue executando.",
        category: "Tratamento de Erros",
        language: "Go"
    },
    {
        id: 14,
        question: "O que são ponteiros em Go?",
        answer: "Ponteiros são variáveis que armazenam o endereço de memória de outras variáveis, permitindo referência direta à memória.",
        category: "Ponteiros",
        language: "Go"
    },
    {
        id: 15,
        question: "Como o select funciona na prática em Go?",
        answer: "O select é como um garçom super eficiente em um restaurante! Ele:\n\n1. Fica observando vários canais ao mesmo tempo\n2. Quando uma mensagem chega em qualquer canal, ele age imediatamente\n3. Se várias mensagens chegam juntas, ele escolhe uma aleatoriamente\n\nExemplo prático:\n- Você pode esperar por timeouts\n- Receber dados de múltiplas fontes\n- Implementar padrões de cancelamento\n\nÉ muito útil quando trabalhamos com sistemas concorrentes e precisamos lidar com múltiplos eventos simultaneamente.",
        category: "Concorrência",
        language: "Go"
    },
    {
        id: 16,
        question: "O que é um mutex em Go?",
        answer: "Mutex (mutual exclusion) é um mecanismo de sincronização que previne acesso simultâneo a recursos compartilhados em programas concorrentes.",
        category: "Concorrência",
        language: "Go"
    },
    {
        id: 17,
        question: "Como funcionam as tags de struct em Go?",
        answer: "Tags são metadados adicionados aos campos de uma struct que podem ser lidos em tempo de execução usando reflection, úteis para serialização.",
        category: "Structs",
        language: "Go"
    },
    {
        id: 18,
        question: "O que é o context package em Go?",
        answer: "O pacote context fornece ferramentas para passar deadlines, cancelamento de sinais e outros valores através da árvore de chamadas do programa.",
        category: "Pacotes",
        language: "Go"
    },
    {
        id: 19,
        question: "O que é reflection em Go?",
        answer: "Reflection permite examinar, modificar e criar tipos, variáveis, funções e structs em tempo de execução.",
        category: "Reflection",
        language: "Go"
    },
    {
        id: 20,
        question: "Como funciona o embedding em Go?",
        answer: "Embedding permite incluir um tipo dentro de outro, proporcionando composição ao invés de herança.",
        category: "Structs",
        language: "Go"
    },
    {
        id: 21,
        question: "O que são blank identifiers em Go?",
        answer: "O identificador _ (underscore) é usado para ignorar valores retornados por funções que não serão utilizados.",
        category: "Go Basics",
        language: "Go"
    },
    {
        id: 22,
        question: "O que é um workspace em Go?",
        answer: "É uma hierarquia de diretórios contendo código Go, incluindo src, pkg e bin, usado para organizar projetos.",
        category: "Go Workspace",
        language: "Go"
    },
    {
        id: 23,
        question: "O que é rate limiting em Go?",
        answer: "É uma técnica para controlar a frequência de requisições ou operações usando canais e timers.",
        category: "Concorrência",
        language: "Go"
    },
    {
        id: 24,
        question: "O que são Marshal e Unmarshal em Go? Me explica de forma simples!",
        answer: "São funções para converter dados entre Go e JSON:\n\nMarshal:\n- Transforma dados Go → JSON\n- Exemplo: struct vira texto JSON\n\nUnmarshal:\n- Transforma JSON → dados Go\n- Exemplo: texto JSON vira struct\n\nÉ como traduzir entre duas línguas diferentes!",
        category: "Serialização",
        language: "Go"
    },
    {
        id: 25,
        question: "Como usar Marshal e Unmarshal da melhor forma?",
        answer: "Dicas práticas:\n\n1. Use tags para nomear campos:\n`json:\"nome\"` ou `json:\"-\"` para ignorar\n\n2. Sempre verifique erros\n\n3. Para arquivos grandes:\nUse Encoder/Decoder ao invés de Marshal/Unmarshal\n\nExemplo:\n```go\ntype User struct {\n    Nome string `json:\"nome\"`\n    Idade int   `json:\"idade,omitempty\"`\n}\n```",
        category: "Serialização",
        language: "Go"
    }
];

// Adicione ao escopo global
window.goFlashcards = goFlashcards;