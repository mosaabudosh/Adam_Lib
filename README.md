# AdamLib – Angular Reusable Components & Utilities

## Project Overview

**AdamLib** is an Angular workspace that contains a collection of reusable libraries designed to simplify and standardize frontend application development.

The project focuses on building reusable UI components, shared utilities, HTTP communication services, and an experimental Augmented Reality module.

Instead of implementing common functionality repeatedly across different applications, AdamLib provides shared building blocks that can be integrated into multiple Angular projects.

## Project Architecture

The workspace consists of a main Angular application and three independent libraries:

| Library | Description |
|---|---|
| AdamShared | Reusable UI components, directives, and pipes. |
| AdamHttp | Shared HTTP communication and application utility services. |
| AugmentedReality | Experimental Augmented Reality components and 3D model visualization. |

## Libraries & Features

### 1. AdamShared

A reusable Angular component library that provides common UI elements and shared frontend functionality.

**Components include:**

- Tables and data grids.
- Sidebar and navigation components.
- Buttons and input controls.
- Calendar and date-related components.
- File upload components.
- Tabs and pagination.
- Tree tables and hierarchical views.
- Image galleries.
- Stepper components.
- Lists and other reusable interface elements.

**Additional utilities:**

- Custom Angular Pipes.
- Reusable Directives.
- Input validation utilities.
- Number formatting and presentation helpers.

The library aims to improve code reuse, maintainability, and consistency across Angular applications.

### 2. AdamHttp

A shared library designed to centralize HTTP communication and common application services.

**HTTP capabilities include:**

- GET requests.
- POST requests.
- PUT requests.
- DELETE requests.
- Retrieve individual records by identifier.
- API base URL configuration.
- HTTP request parameters.

**Additional services include:**

- Local storage management.
- Report and file-opening utilities.
- Shared application communication helpers.

The library provides a common approach to handling API communication and frequently used application operations.

### 3. AugmentedReality

An experimental Angular module demonstrating Augmented Reality functionality using AR.js and 3D models.

**Demonstrated capabilities:**

- Image selection.
- AR scene initialization.
- 3D model visualization.
- GLB model integration.
- Basic animated 3D objects.

The available examples include a Toyota AE86 3D model and an animated box object.

**Note:** This library represents an experimental implementation and should not be considered a complete production-ready AR framework.

## Technology Stack

| Technology | Purpose |
|---|---|
| Angular 17 | Frontend framework and library development |
| TypeScript | Application and library development |
| PrimeNG | UI components |
| Bootstrap | Responsive layout and styling |
| RxJS | Reactive programming |
| Angular CLI | Workspace and build management |
| AR.js | Augmented Reality functionality |
| 3D / GLB Models | Three-dimensional content |

## Project Structure

```text
Adam_Lib/
│
├── projects/
│   ├── AdamShared/
│   │   └── Reusable UI components,
│   │       directives, and pipes
│   │
│   ├── AdamHttp/
│   │   └── HTTP services and
│   │       shared utilities
│   │
│   └── AugmentedReality/
│       └── AR components and
│           3D model examples
│
├── src/
│   └── Main Angular application
│
├── angular.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Development Environment

### Prerequisites

- Node.js
- npm
- Angular CLI compatible with Angular 17

### Installation

Clone the repository:

```bash
git clone https://github.com/mosaabudosh/Adam_Lib.git
```

Navigate to the project directory:

```bash
cd Adam_Lib
```

Install the project dependencies:

```bash
npm install
```

**Important:** The repository references locally packaged libraries under the `dist` directory. Ensure that the required library packages are generated before installing or consuming them from a clean environment.

## Building the Libraries

The libraries can be built independently using Angular CLI:

```bash
ng build AdamShared
```

```bash
ng build AdamHttp
```

```bash
ng build AugmentedReality
```

The generated library packages are placed in the Angular build output directory.

Build configuration and package dependencies should be checked against the current workspace configuration before publishing or distributing the libraries.

## Running the Main Application

Start the Angular development server:

```bash
ng serve
```

The application can then be accessed through the local development server.

## Key Engineering Concepts

AdamLib demonstrates practical implementation of several frontend engineering concepts:

- **Component Reusability:** Building shared UI components that can be integrated into multiple applications.
- **Separation of Concerns:** Organizing functionality into independent libraries.
- **Shared Services:** Centralizing HTTP communication and common application operations.
- **Angular Directives & Pipes:** Extending Angular functionality with reusable presentation and behavior utilities.
- **Modular Architecture:** Separating UI components, communication services, and experimental features.
- **Library Development:** Structuring Angular code as reusable libraries rather than application-specific components.

## Project Scope & Limitations

AdamLib is a reusable Angular workspace and component library collection.

The repository includes an experimental Augmented Reality module, which demonstrates basic AR and 3D model integration.

The project does not represent a complete standalone business application or a production-ready AR framework.

Some library dependencies are distributed as local package archives, so the build and installation process may require additional packaging steps.

## Future Improvements

Potential enhancements include:

- Publishing reusable libraries as versioned npm packages.
- Improving library documentation and usage examples.
- Adding automated unit and integration tests.
- Expanding shared UI components.
- Improving HTTP error handling and authentication integration.
- Enhancing the Augmented Reality module.
- Adding continuous integration and automated build pipelines.

## Repository

GitHub: https://github.com/mosaabudosh/Adam_Lib

## Author

**Mosa Abudosh**

Software Engineer | Software Developer | Full Stack .NET & Angular

- GitHub: [mosaabudosh](https://github.com/mosaabudosh)
- LinkedIn: [Mosa Abudosh](https://www.linkedin.com/in/mosa-a-abudosh/)