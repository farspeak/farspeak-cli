#!/bin/bash

# Function to display usage
usage() {
  echo "Usage: $0 --directory <dir> [other arguments for cli.js]"
  exit 1
}

# Check if --directory argument is provided
if [[ "$1" == "--directory" ]]; then
  DIRECTORY=$2
  shift 2
else
  usage
fi

# Check if the directory exists
if [[ ! -d "$DIRECTORY" ]]; then
  echo "Directory $DIRECTORY does not exist."
  exit 1
fi

# Iterate over all PDF files in the directory and run the Node.js script
for FILE in "$DIRECTORY"/*.pdf; do
  if [[ -f "$FILE" ]]; then
    echo "Processing $FILE"
    ./script.js --filename "$FILE" "$@"
  fi
done
