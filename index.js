const commander = require('commander');

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Outil de migration de code hérité')
  .option('--source <path>', 'chemin vers le code à migrer')
  .action((options) => {
    const sourcePath = options.source;
    if (!sourcePath) {
      console.error('Veuillez fournir un chemin source valide.');
      process.exit(1);
    }
    console.log(`Analyse du code dans ${sourcePath}...`);
    // Appel à la fonction d'analyse ici
  });

program.parse(process.argv);