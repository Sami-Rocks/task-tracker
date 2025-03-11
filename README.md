# Task Tracker

## Project Setup and Running Instructions

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (Node Package Manager)

### Installation
```bash
# Install all dependencies
npm install
```

### Packages and Dependencies

#### Main Dependencies
- `react` (v19.0.0) - Core React library for building user interfaces
- `react-dom` (v19.0.0) - React rendering for web browsers
- `react-feather` (v2.0.10) - Beautiful open-source icons for React
- `sass` (v1.85.1) - Advanced CSS preprocessor for styling

#### Development Dependencies
- `vite` (v6.2.0) - Modern frontend build tool and development server
- `typescript` (v5.7.2) - Adds static typing to JavaScript
- `@types/react` (v19.0.10) - TypeScript type definitions for React
- `@types/react-dom` (v19.0.4) - TypeScript type definitions for React DOM

##### ESLint and Code Quality Tools
- `eslint` (v9.21.0) - JavaScript and TypeScript linter
- `@eslint/js` (v9.21.0) - ESLint JavaScript plugin
- `eslint-plugin-react-hooks` (v5.1.0) - React Hooks linting rules
- `eslint-plugin-react-refresh` (v0.4.19) - Fast Refresh linting support
- `typescript-eslint` (v8.24.1) - TypeScript ESLint integration
- `globals` (v15.15.0) - Global variables definition for ESLint

##### Build Tools
- `@vitejs/plugin-react` (v4.3.4) - Official React plugin for Vite

### Available Scripts
- Start the development server:
  ```bash
  npm run dev
  ```
  This will start the development server at `http://localhost:5173`

- Build the project for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

- Run the linter:
  ```bash
  npm run lint
  ```

### Project Structure

The project follows a modular architecture with clear separation of concerns:

#### Root Directory
- `/public` - Static assets and public files
- `/src` - Source code of the application
- `index.html` - Entry HTML file
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

#### Source Directory (`/src`)
- `/assets` - Static assets like images, fonts, etc.
- `/components` - Reusable React components
- `/pages` - Page components and routing
- `/styles` - Global styles and SASS files
- `/context` - React Context providers and consumers
- `/reducers` - State management reducers
- `/helpers` - Helper functions and utilities
- `/utilities` - Utility functions and common code
- `/constants` - Constant values and configurations
- `/data` - Data models and mock data
- `main.tsx` - Application entry point
- `types.d.ts` - TypeScript type definitions
- `vite-env.d.ts` - Vite environment type definitions

#### Key Architectural Points
- Component-based architecture using React
- TypeScript for type safety
- Global state management using Context and Reducers
- SASS for advanced styling
- Modular file structure for better maintainability
- Clear separation between business logic and UI components

#### State Management with Context API

The application uses React's Context API for state management, split into two main contexts:

##### Data Context
```typescript
// Contains the application's data state
type State = {
    tasks: Task[]
    priority: string | null
}
```
- Manages the task list and priority filter state
- Provides read-only access to components
- Persists data in localStorage

##### Dispatch Context
- Handles state updates through actions
- Uses reducer pattern for predictable state changes
- Supports actions for:
  - Task management (add, update, remove)
  - Priority filtering

##### Context Setup
```typescript
// Root component setup
function Application() {
    const [state, dispatch] = useReducer(applicationReducer, defaultInitialState, getInitialState)
    
    return (
        <Tasks.Provider value={state}>
            <Dispatch.Provider value={dispatch}>
                <Home />
            </Dispatch.Provider>
        </Tasks.Provider>
    )
}
```

##### Usage in Components
```typescript
// Example component usage
function Component() {
    const { tasks, priority } = useContext(Data)
    const dispatch = useContext(Dispatch)
    
    // Use state and dispatch actions
}
```

### Development Features
- Hot Module Replacement (HMR)
- TypeScript type checking
- ESLint integration
- React Fast Refresh