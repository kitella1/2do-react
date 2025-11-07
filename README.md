# 2Do - The Task Management App ✅

Welcome to 2Do! My submission for the Senior Software Engineer role with the NHS.

## Features 🔨

- Add new tasks using the input fields.
- Complete tasks individually.
- Lists are saved to local storage whenever an item is added or updated.
- Filter by item category.
- The input field will focus on page load, or after an item is added.

## Design 🎨

2Do uses the colour scheme [Dark Sunset](https://coolors.co/palette/335c67-fff3b0-e09f3e-9e2a2b-540b0e).

The teal colour #335C67 should be used as the **primary** colour for UI elements. The light yellow #FFF3B0 should be used as an **accent** where it will not impede on accessibility. Lastly, for any other UI that is required to **contrast** the primary colour, the crimson #9E2A2B should be used.

## Running locally 💻

There are two methods available for running this app locally. Details on each one are written below:

### NPM ⚛

Run the below commands to install this app and begin running it locally.

```bash
npm i
npm run dev
```

### Dockerfile 🐋

```bash
docker build -t 2do .
docker run -p 4173:4173 2do
```

## Testing 🧪

To run unit tests for this project, run the below command.
`npm run test:unit`

## AI Declaration ✨

No AI was used during any part of the development of 2Do.
The app was created by converting decaf tea and lo-fi beats into code.

## Contributors 🦸‍♂️

- 👩‍💻 Katie Adams, Engineer
- 🐶 Moose the dog, Moral Support
- 😼 Bucket the cat, Keyboard Warmer
