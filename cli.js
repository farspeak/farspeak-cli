#!/usr/bin/env node

import { Farspeak } from "farspeak";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import YAML from 'yamljs';
import { Command } from 'commander';

// Farspeak setup
//const farspeak = new Farspeak({
//  app: '', // your app name
//  env: '', // your app env
//  backendToken: '',
//  publicKey: "",
//  secretKey: "", // paste your backend token
//  vectorIndexName: ""
//});

// Pick your entity name
const entityName = "papers";

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define CLI options using commander
const program = new Command();
program
  .option('--filename <filename>', 'Path to the file to be sent to Farspeak')
  .option('--template <path>', 'Path to the YAML file containing the instructions and template')
  .option('--query <query>', 'Query string for the inquiry')
  .parse(process.argv);

const options = program.opts();

if (options.filename && options.template) {
  // Load the instructions and template from the YAML file
  const templateFilePath = path.resolve(__dirname, options.template);
  const { instructions, template } = YAML.load(templateFilePath);

  (async () => {
    const filePath = path.resolve(__dirname, options.filename);

    const doc = await farspeak
      .entity(entityName)
      .fromDocument({ filePath, instructions, template });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const entity = await farspeak.entity(entityName).get(doc.id);

    if (options.query) {
      farspeak
        .entity(entityName)
        .inquire(options.query)
        .then(console.log);
    }

    console.log(doc);
    console.log(entity);
  })();
} else if (options.query) {
  (async () => {
    farspeak
      .entity(entityName)
      .inquire(options.query)
      .then(console.log);
  })();
} else {
  console.error('Error: --query option is required if --filename and --template are not provided');
  process.exit(1);
}
