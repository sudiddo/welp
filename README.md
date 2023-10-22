# Welp: Yelp API Integration using Vite-React

Welcome to Welp, a practical exploration into building a modern Vite-powered React application. This project demonstrates how to seamlessly integrate the Yelp API to fetch and present local business data. Utilizing an efficient tech stack with React Query, Tailwind CSS, React Router DOM v6, and Axios, this repository serves as a comprehensive learning material for developers at different stages of their journey.

## Project Structure

.
├── **src**: _Main source directory for the application._
│ ├── **api**: _Handles all API-related functions and endpoints._
│ ├── **assets**: _Static assets like images, fonts, etc._
│ ├── **modules**: _Feature-specific directories; each module represents a distinct feature or page._
│ │ └── **HomePage**: _Main landing page of the application._
│ │ └── **components**: _React components specific to HomePage._
│ ├── **shared**: _Reusable components and utilities that can be used across different modules._
│ │ └── **components**: _General components that aren't tied to a specific feature or module._
│ │ ├── **BusinessCard**: _Component to display business information._
│ │ ├── **Header**: _Application header._
│ │ ├── **Maps**: _Map rendering and related utilities._
│ │ └── **LoadingIndicator**: _Visual indicator for async operations._
│ ├── **hooks**: _Custom React hooks for managing side-effects and state._
│ └── **utils**: _Utility functions and helpers._
└── **pages**: _Entry points for application routes._
├── **App.jsx**: _Main application component._
└── **index.css**: _Global styles._

## Features

#### React Query

- **Purpose**: Client-side data-fetching and state management for React applications.
- **Features**: Optimized data fetching, caching, and asynchronous updates.
- **Why**: Reduces client-side code complexity and improves UI responsiveness.

#### Tailwind CSS

- **Purpose**: Utility-first CSS framework tailored for speedy client-side UI development.
- **Features**: Highly customizable, out-of-the-box responsiveness, minimal CSS footprint.
- **Why**: Enhances development speed while preserving the ability to customize your client-side UI.

#### React Router DOM v6

- **Purpose**: Client-side routing for React applications.
- **Features**: Declarative API, dynamic routing, nested route layouts.
- **Why**: Simplifies client-side navigation without reloads, improving user experience.

#### Axios

- **Purpose**: Promise-based HTTP client for making asynchronous requests.
- **Features**: Request and response interception, request cancellation, and more.
- **Why**: Offers a straightforward way to handle client-side HTTP interactions.

#### HeroIcons

- **Purpose**: Icon library for client-side applications.
- **Features**: Wide variety of SVG icons that are easy to integrate.
- **Why**: Because I like HeroIcons.

#### Google Maps React Markers (Alternative)

- **Purpose**: Client-side alternative to `google-maps-react` for map marker rendering.
- **Features**: Addresses limitations and issues in `google-maps-react`.
- **Why**: Provides a reliable client-side solution for integrating Google Maps markers.

## Getting Started

### Clone the Repository

```
git clone https://github.com/sudiddo/welp.git
cd welp
```

### Install Dependencies

```
yarn
```

### Setup Yelp API Credentials

- Create a Yelp Developer Account and obtain your API Key.
- Create a .env file in the root of your project.
- Add your Yelp API Key as VITE_YELP_API_KEY=<Your-API-Key>.
- Run the Application

```
yarn dev
```
