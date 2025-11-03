# 2Do - The Task Management App ✅

Welcome to 2Do! My submission for the Senior Software Engineer role with the NHS.

## Features

2Do has a range of features available.

- Add new tasks using the input fields.
- Complete and delete tasks individually.
- Complete and delete multiple items on your list with 'Edit mode'.
- Lists are saved to local storage whenever an item is added, deleted, or updated.

## Running locally

There are two methods available for running this app locally. Details on each one are written below:

### NPM

Run the below commands to install this app and begin running it locally.

```bash
npm i
npm run dev
```

### Dockerfile

```bash
docker build -t 2do .
docker run -p 4173:4173 2do
```

## Testing

To run unit tests for this project, run the below command.
`npm run test:unit`

To run end-to-end tests for this project, run the below command:
`npm run test:e2e`

## AI Declaration

No AI was used during any part of the development of 2Do.
The app was created by converting decaf tea and lo-fi beats into code.

## Contributors

👩‍💻 Katie Adams, Engineer
🐶 Moose the dog, Moral Support
😼 Bucket the cat, Keyboard Warmer
