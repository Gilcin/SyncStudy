const flashcards = [
    {
        id: 1,
        question: "O que é Go?",
        answer: "Go é uma linguagem de programação criada pelo Google que foca em ser simples, eficiente e fácil de usar.",
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
        question: "Como funcionam goroutines em Go?",
        answer: "Goroutines são funções que podem ser executadas de forma concorrente, utilizando a palavra-chave 'go'.",
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
    }
];

export default flashcards;