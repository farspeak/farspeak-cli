# Farspeak Tool

This tool uses the `farspeak` library to process and extract information from a scientific paper PDF document. The tool is written in Node.js and uses ES module syntax.

## Requirements

- Node.js v12 or later
- npm

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-name>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Configure the `farspeak` library by updating the following fields in the script:
    - `app`: Your app name
    - `env`: Your app environment
    - `backendToken`: Your backend token

## Usage

1. Ensure your `package.json` has `"type": "module"` to support ES modules:
    ```json
    {
      "name": "your-project-name",
      "version": "1.0.0",
      "description": "Your project description",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "Your Name",
      "license": "ISC",
      "dependencies": {
        "farspeak": "^1.0.0" // Update with the correct version
      }
    }
    ```

2. Replace `example.pdf` with the path to your own PDF document.

3. Run the script:
    ```sh
    node index.js
    ```

## Script Explanation

The script performs the following steps:

1. Imports necessary modules.
    ```js
    import { Farspeak } from "farspeak";
    import path from "path";
    import assert from "assert";
    import { fileURLToPath } from 'url';
    ```

2. Configures the `farspeak` instance with your app details.
    ```js
    const farspeak = new Farspeak({
        app: "", // your app name
        env: "", // your app env
        backendToken: "", // paste your backend token
      });
    ```

3. Determines the current file path and directory name.
    ```js
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    ```

4. Defines an asynchronous function to process the PDF.
    ```js
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
    ```

## Output

The script logs the document object and entity object to the console after processing the PDF.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
