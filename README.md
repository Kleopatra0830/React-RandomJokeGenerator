# Random Joke Generator

This project is a **Random Joke Generator** built with React. The application fetches jokes from an external API and displays them on the screen. Users can generate new jokes by clicking a button, with the option to view and hide the history of previously fetched jokes.

## Features

- **Fetch Random Jokes:** Retrieves jokes from the [Official Joke API](https://official-joke-api.appspot.com/jokes/random).
- **Joke Display:** Shows the current joke in a styled container.
- **Generate New Joke:** Click a button to fetch and display a new joke.
- **Joke History:** Keeps track of previously fetched jokes.
- **Toggle History View:** Users can show or hide the joke history.


## Technologies Used

- **React** (Functional components, hooks)
- **CSS** (for styling)

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/random-joke-generator.git
   ```

2. Navigate to the project directory:
   ```sh
   cd random-joke-generator
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```


### Main Files

- **App.js**: The root component that renders the `Joke` component.
- **Joke.js**: Handles fetching jokes and managing state. Includes the joke history feature.
- **Button.js**: A reusable button component.
- **Joke.css**, **Button.css**, **App.css**: Styling for components.

## API Reference

The application uses the [Official Joke API](https://official-joke-api.appspot.com/). The endpoint used is:

```
GET /jokes/random
```

Response example:
```json
{
  "id": 123,
  "type": "general",
  "setup": "What do you call a bear with no teeth?",
  "punchline": "A gummy bear!"
}
```

## Customization

You can customize the app by modifying the following:

- **API Endpoint**: Change the API URL in `Joke.js`.
- **Styling**: Update the styles in the CSS files.
- **Features**: Add more interactive elements or additional API features.

## Future Improvements

- Add more joke categories (e.g., programming, general, knock-knock).
- Implement user preferences for favorite jokes.
- Add animations for smoother transitions between jokes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- Thanks to the [Official Joke API](https://official-joke-api.appspot.com/) for providing jokes.
- Inspired by projects demonstrating React and API integration.

## Contact

For any questions or feedback, please contact **kleopatra0830@gmail.com**.

