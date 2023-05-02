interface PersonalidadeTest {
  title: string;
  inputTopo: Array<{ label: string, type: string }>;
  inputsRight: Array<{ label: string, type: string }>;
  inputsLeft: Array<{ label: string, type: string }>;
  
}

const personalidadeTest: Array<PersonalidadeTest> = [
  {
    title: 'Personalidade',
    inputTopo: [
      { label: 'Nome', type: 'text' },
      { label: 'Controle geral', type: 'text' },
      { label: 'Atividade', type: 'text' },
      { label: 'Agressividade', type: 'text' },
      
    ],
    inputsRight: [
      { label: 'Maturidade e emotividade', type: 'text' },
      { label: 'Organização de personalidade', type: 'text' },
      { label: 'Energia vital produtividade', type: 'text' }
    ],
    inputsLeft: [
      { label: 'Relacionamento interpessoal', type: 'text' },
      { label: 'Impulsividade', type: 'text' },
      { label: 'Alteração psíquicas', type: 'text' }
    ]
  }
];

export default personalidadeTest;
