# Farspeak CLI Script

This script uses the Farspeak library to process documents according to a template specified in a YAML file. 

## Prerequisites

- Node.js installed
- NPM (Node Package Manager) installed
- `farspeak` library installed
- `commander` library installed
- `yamljs` library installed

## Installation

1. Clone the repository or download the script.
2. Install the required Node.js packages:

```sh
npm install
```
3. Set up Farspeak

- Entities collection.
To do vector search on your data you need to created a database in your Atlas and `entities` collection in it.
- Configure Farspeak.

```ts
const farspeak = new Farspeak({
  app: "your-app", // your app name
  env: "dev", // your app env
  backendToken: "43t8q1bc2eggnc", // paste your backend token
  publicKey: "fs-pub-...",
  secretKey: "fs-...",
  vectorIndexName: "...",
});
```

To create public key and secret key please follow the instructions in the dashboard.

Add your Atlas url in the Settings page in the dashboard:

<img width="435" alt="image" src="https://github.com/farspeak/farspeak-js/assets/170480/720d6d56-b584-45f9-9eb0-037d50f53270">

Now when you send CRUD and docs/unstructured data requests, the entities will be stored in your database in the `entities` collection you created, together with the embeddings.

Please follow instructions how to create vector search index for your database on our [wiki page](https://github.com/farspeak/farspeak-js/wiki/Create-Vector-Search-Index-in-Atlas).

To use RAG with Farspeak you will need your vector index you just created in your Atlas account, and pass it as an argument called `vectorIndexName` to the Farspeak instance, as shown above.

## Usage

### Command Line Arguments

- `--filename <path>`: Path to the file to be sent to Farspeak.
- `--template <path>`: Path to the YAML file containing the instructions and template.
- `--query <query>`: Query to inquire the entity.
- `--directory <path>`: Path to the directory to be sent to Farspeak.
- `--url <url>`: URL to a document.

### Example Command - Talk to Data in Terminal

      ./run_cli.sh --query 'your query here'

### Example Command - Single File

      ./run_cli.sh --filename path/to/your/file.txt --template path/to/your/template.yaml --query 'your query here'

### Example Command - Directory

    ./run_cli.sh --directory --template path/to/your/template.yaml --query 'your query here'

### Example Command - URL

    ./run_cli.sh --url --template path/to/your/template.yaml --query 'your query here'
    
### Example Output

    ./run_cli.sh --filename ./example.pdf --template ./template.yaml --query "Who is the author of this book?"
    {
      id: '86bv5c2a',
      title: 'Category Theory',
      author: 'Prof. Dr. B. Pareigis',
      affiliation: "Author's affiliation, including institution and department",
      email: 'Email of the author',
      sections: [
        'Introduction',
        'Foundations',
        'Graphs',
        'Monoids',
        'Categories',
        'Constructions on categories',
        'Slice categories',
        'Subcategories',
        'The product of categories',
        'The dual of a category',
        'The free category generated by a graph',
        'Functors',
        'Special types of functors',
        'Underlying functors',
        'Free functors',
        'Powerset functors',
        'Hom functors or Mor functors',
        'Natural transformations',
        'Natural transformations between functors I',
        'Diagrams',
        'Commutative diagrams',
        'Graph homomorphisms by commutative diagrams',
        'Associativity by commutative diagrams',
        'Natural transformations'
      ],
      __meta: { self: '/test2/dev/papers/86bv5c2a', subtypes: {} }
    }
    {
      id: '86bv5c2a',
      title: 'Category Theory',
      author: 'Prof. Dr. B. Pareigis',
      affiliation: "Author's affiliation, including institution and department",
      email: 'Email of the author',
      sections: [
        'Introduction',
        'Foundations',
        'Graphs',
        'Monoids',
        'Categories',
        'Constructions on categories',
        'Slice categories',
        'Subcategories',
        'The product of categories',
        'The dual of a category',
        'The free category generated by a graph',
        'Functors',
        'Special types of functors',
        'Underlying functors',
        'Free functors',
        'Powerset functors',
        'Hom functors or Mor functors',
        'Natural transformations',
        'Natural transformations between functors I',
        'Diagrams',
        'Commutative diagrams',
        'Graph homomorphisms by commutative diagrams',
        'Associativity by commutative diagrams',
        'Natural transformations'
      ],
      __meta: { self: '/test2/dev/papers/86bv5c2a', subtypes: {} }
    }
    { answer: 'The author of the book is Prof. Dr. B. Pareigis.' }
