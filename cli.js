#!/usr/bin/env node

//const farspeak = require('farspeak');
import { Farspeak } from "farspeak";
import path from "path";
import assert from "assert";

import { fileURLToPath } from 'url';

//const Farspeak = require("farspeak").Farspeak;

const farspeak = new Farspeak({
    app: "test2", // your app name
    env: "dev", // your app env
    backendToken: "sa79iett7le564", // paste your backend token
  });

// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const filePath = path.resolve(__dirname, './example.pdf');
    const instructions = "This is a scientific paper";
    const template = {
      title: "Title of the scientific paper",
      author: "Name of the author",
      affiliation: "Author's affiliation, including institution and department",
      email: "Email of the author",
      sections: "List of sections in the paper",
    };
    const doc = await farspeak
      .entity("papers")
      .fromDocument({ filePath, instructions, template });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const entity = await farspeak.entity("papers").get(doc.id);

    console.log(doc);
    console.log(entity);

  })();