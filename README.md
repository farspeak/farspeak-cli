# Farspeak CLI Script

This script uses the Farspeak library to process documents according to a template specified in a YAML file. It allows you to send a file to Farspeak and retrieve and inquire entities based on the specified instructions and template.

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
3. Provide your app / env name as well as your backend token (you'll get them from farspeak.ai)    
```
const farspeak = new Farspeak({
  app: "", // your app name
  env: "", // your app env
  backendToken: "", // paste your backend token
});
```

## Usage

### Command Line Arguments

- `--filename <path>`: Path to the file to be sent to Farspeak.
- `--template <path>`: Path to the YAML file containing the instructions and template.
- `--query <query>`: Query to inquire the entity.

### Example Command

```sh
node cli.js --filename path/to/your/file.txt --template path/to/your/template.yaml --query 'your query here'
```

### Example Output

```
./cli.js --filename ./example.pdf --template ./template.yaml --query "Who is the author of this book?"
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
{ answer: 'The author of the book is Prof. Dr. B. Pareigis.' }```
