# React Native Edu App

Welcome to the React Native Edu App! This application is designed to provide an engaging educational experience for users, featuring lessons, user profiles, and a smooth navigation system.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Screen**: Displays a list of lessons with a brief overview using the `LessonCard` component.
- **Lesson Screen**: Provides detailed information about each lesson, including content and resources.
- **Profile Screen**: Allows users to view and edit their profile information.
- **Custom Fonts**: Utilizes custom fonts to enhance the visual appeal of the app.
- **Smooth Navigation**: Implements React Navigation for seamless transitions between screens.

## Installation

To get started with the React Native Edu App, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/StephenSouth13/React-Native-Edu.git
   cd React-Native-Edu/react-native-edu-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

   You can then use the Expo Go app on your mobile device to scan the QR code and view the app.

## Usage

Once the app is running, you can navigate through the different screens:

- **Home Screen**: View available lessons.
- **Lesson Screen**: Click on a lesson to see more details.
- **Profile Screen**: Access and edit your profile information.

## Folder Structure

The project is organized as follows:

```
react-native-edu-app
├── src
│   ├── App.tsx
│   ├── components
│   │   └── LessonCard.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── LessonScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── assets
│   │   └── fonts
│   │       └── README.md
│   └── types
│       └── index.ts
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.