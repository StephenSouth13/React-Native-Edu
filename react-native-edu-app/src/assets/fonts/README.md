# Custom Fonts for React Native Edu App

This directory contains the custom fonts used in the React Native Edu App. Below are the details regarding the fonts included in this project.

## Font Files

- **FontName-Regular.ttf**: The regular version of the font.
- **FontName-Bold.ttf**: The bold version of the font.
- **FontName-Italic.ttf**: The italic version of the font.

## Usage

To use these fonts in your application, you need to load them in your main application file (e.g., `App.tsx`) using the `expo-font` package. Here’s a quick example of how to do that:

```javascript
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'FontName-Regular': require('./assets/fonts/FontName-Regular.ttf'),
    'FontName-Bold': require('./assets/fonts/FontName-Bold.ttf'),
    'FontName-Italic': require('./assets/fonts/FontName-Italic.ttf'),
  });
}
```

## License

Please ensure that you have the appropriate licenses for the fonts you are using in your project.