const jsFlashcards = [    
    {
        id: 1,
        question: "De forma simples, o que é JavaScript e para que serve?",
        answer: "JavaScript é uma linguagem de programação que dá vida às páginas web! Com ela, podemos criar desde interações simples (como animar botões) até aplicações web completas. É a linguagem mais popular da web e roda em todos os navegadores modernos. Algumas coisas legais que podemos fazer: \n\n- Modificar o conteúdo da página dinamicamente\n- Responder a ações do usuário\n- Fazer requisições a servidores\n- Criar jogos e animações",
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
        question: "Me explica o que são Promises de um jeito fácil de entender?",
        answer: "Imagine que você está em um restaurante fast-food! Quando você faz um pedido, recebe uma comanda (isso é a Promise). A Promise pode ter três estados:\n\n1. Pending (Pendente): Seu lanche está sendo preparado\n2. Fulfilled (Resolvida): Seu lanche ficou pronto\n3. Rejected (Rejeitada): Ops, acabaram os ingredientes!\n\nÉ uma forma de lidar com operações que demoram, como carregar dados do servidor ou ler arquivos, sem travar seu programa.",
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
        question: "Como funciona o Event Loop? Me explica como se eu fosse iniciante!",
        answer: "Imagine o Event Loop como um gerente muito organizado de uma empresa! Ele tem:\n\n1. Uma pilha de tarefas principais (Call Stack)\n2. Uma fila de espera para tarefas extras (Callback Queue)\n\nQuando você roda um código JavaScript:\n- Tarefas síncronas vão direto para execução\n- Tarefas assíncronas (setTimeout, promessas, etc.) vão para a fila de espera\n- O Event Loop fica checando: 'A pilha principal está vazia? Então vou pegar a próxima tarefa da fila!'\n\nIsso permite que o JavaScript execute uma coisa de cada vez sem travar a página.",
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