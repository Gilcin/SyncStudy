const jsFlashcards = [    
    {
        id: 1,
        question: "O que é JavaScript de forma simples?",
        answer: "JavaScript é a linguagem que faz as páginas web ganharem vida! Com ela você pode:\n\n1. Fazer páginas interativas\n2. Criar animações\n3. Comunicar com servidores\n4. Construir aplicativos web\n\nÉ a linguagem mais popular da web!",
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
        question: "O que é uma Promise de forma simples?",
        answer: "Promise é como um pedido no restaurante:\n\n1. Fazendo (pending): Seu pedido está sendo preparado\n2. Pronto (resolved): Pedido chegou!\n3. Problema (rejected): Acabou o ingrediente\n\nÚtil para operações que demoram, como carregar dados da internet.",
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
        question: "Me explica o Event Loop de forma simples?",
        answer: "Event Loop é como um organizador de tarefas:\n\n1. Tarefas normais: executa na hora\n2. Tarefas que demoram: coloca na fila de espera\n3. Quando terminar as normais: pega da fila\n\nAssim o JavaScript consegue fazer várias coisas sem travar!",
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