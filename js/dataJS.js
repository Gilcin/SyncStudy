const jsFlashcards = [    
    {
        id: 1,
        question: "O que é JavaScript?",
        answer: "JavaScript é uma linguagem de programação utilizada para criar interatividade e dinamismo em páginas web.",
        category: "Conceitos Básicos",
        language: "JavaScript"
    },
    {
        id: 2,
        question: "O que é uma função callback?",
        answer: "É uma função passada como argumento para outra, para ser executada posteriormente.",
        category: "Funções",
        language: "JavaScript"
    },
    {
        id: 3,
        question: "O que é 'this' em JavaScript?",
        answer: "'this' refere-se ao objeto que invocou a função no momento da execução.",
        category: "Conceitos Básicos",
        language: "JavaScript"
    },
    {
        id: 4,
        question: "O que são Promises?",
        answer: "Promises representam operações assíncronas que podem ser resolvidas ou rejeitadas.",
        category: "Assíncrono",
        language: "JavaScript"
    },
    {
        id: 5,
        question: "O que é a função 'map'?",
        answer: "'map' é usada para iterar sobre arrays e criar um novo array com os resultados de uma função.",
        category: "Array Methods",
        language: "JavaScript"
    },
    {
        id: 6,
        question: "Como funciona 'async/await' em JavaScript?",
        answer: "Async/await são usados para trabalhar com Promises, tornando o código assíncrono mais legível.",
        category: "Assíncrono",
        language: "JavaScript"
    },
    {
        id: 7,
        question: "O que é um 'hoisting'?",
        answer: "É o comportamento em que variáveis e funções são movidas para o topo do escopo durante a execução.",
        category: "Conceitos Básicos",
        language: "JavaScript"
    },
    {
        id: 8,
        question: "O que são closures em JavaScript?",
        answer: "Closures são funções que 'lembram' do contexto onde foram criadas, mesmo após esse contexto ser encerrado.",
        category: "Funções",
        language: "JavaScript"
    },
    {
        id: 9,
        question: "O que é um evento no JavaScript?",
        answer: "Eventos são ações ou ocorrências que acontecem no navegador, como cliques ou carregamento de páginas.",
        category: "Eventos",
        language: "JavaScript"
    },
    {
        id: 10,
        question: "O que é 'spread operator'?",
        answer: "'...' é usado para expandir elementos de arrays ou objetos em elementos separados.",
        category: "ES6+",
        language: "JavaScript"
    },
    {
        id: 11,
        question: "O que é destructuring em JavaScript?",
        answer: "É uma forma de extrair valores de arrays ou objetos em variáveis individuais.",
        category: "ES6+",
        language: "JavaScript"
    },
    {
        id: 12,
        question: "O que é o Event Loop em JavaScript?",
        answer: "É o mecanismo que processa eventos assíncronos, gerenciando a execução de callbacks na fila de eventos.",
        category: "Conceitos Avançados",
        language: "JavaScript"
    },
    {
        id: 13,
        question: "O que são Web Workers?",
        answer: "São scripts que executam em segundo plano, permitindo processamento paralelo sem interferir na interface do usuário.",
        category: "APIs Web",
        language: "JavaScript"
    },
    {
        id: 14,
        question: "O que é o prototype em JavaScript?",
        answer: "É o mecanismo pelo qual objetos JavaScript herdam características uns dos outros.",
        category: "OOP",
        language: "JavaScript"
    },
    {
        id: 15,
        question: "O que é currying em JavaScript?",
        answer: "É a técnica de transformar uma função com múltiplos argumentos em uma sequência de funções com um único argumento.",
        category: "Funções",
        language: "JavaScript"
    },
    {
        id: 16,
        question: "O que é o WeakMap?",
        answer: "É uma coleção de pares chave/valor onde as chaves são objetos e são fracamente referenciadas.",
        category: "Estruturas de Dados",
        language: "JavaScript"
    }
];

// Adicione ao escopo global
window.jsFlashcards = jsFlashcards;