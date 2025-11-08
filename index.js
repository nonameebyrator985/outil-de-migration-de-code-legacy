const commander = require('commander');

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Legacy code migration tool')
  .option('--source <path>', 'path to the code to migrate')
  .action((options) => {
    const sourcePath = options.source;
    if (!sourcePath) {
      console.error('Please provide a valid source path.');
      process.exit(1);
    }
    console.log(`Analyzing code in ${sourcePath}...`);
    // Call to the analysis function here
  });

program.parse(process.argv);