# 📝 Blog Post App

A responsive Blog Post Application built with **React, TypeScript, Vite, and Tailwind CSS**. The application fetches blog posts from a REST API, validates the response at runtime using Zod, and displays posts with loading and error states.

This project demonstrates modern React development practices, type-safe API handling, asynchronous JavaScript, and responsive UI design.

## ✨ Features

* **Fetch Blog Posts:** Retrieve blog posts from the JSONPlaceholder REST API.
* **Runtime Data Validation:** Validate API responses using Zod before processing them.
* **Type Safety:** Use TypeScript to define data models and component props.
* **Loading State:** Display a loading message while fetching data.
* **Error Handling:** Handle API errors and invalid response data.
* **Responsive Layout:** Display blog posts in a responsive grid using Tailwind CSS.
* **Reusable Components:** Separate post rendering into reusable React components.
* **Modern Development Setup:** Use Vite for a fast development experience.

## 🛠️ Tech Stack

| Technology      | Purpose                             |
| --------------- | ----------------------------------- |
| React           | Building the user interface         |
| TypeScript      | Static type checking                |
| Vite            | Development server and build tool   |
| Tailwind CSS    | Responsive styling                  |
| Zod             | Runtime validation of API responses |
| Fetch API       | Making HTTP requests                |
| JSONPlaceholder | Providing sample blog post data     |

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/madhuridethe21/blog-post-app.git
```

### 2. Navigate to the project directory

```bash
cd blog-post-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### 5. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 API Integration

The application uses the JSONPlaceholder API to retrieve sample blog posts.

**Endpoint:**

`https://jsonplaceholder.typicode.com/posts`

The application fetches the response, validates it with a Zod schema, transforms the data into the application's `BlogPost` model, and renders the posts.

### Data flow

1. Fetch blog posts from the REST API.
2. Validate the response using Zod.
3. Transform the validated data into the application's data model.
4. Update React state with the retrieved posts.
5. Render the posts or display the loading/error state.

## 🛡️ Error Handling and Validation

The application uses Zod to validate external API data at runtime. This helps catch unexpected response structures before the data is used by the UI.

Loading and error states provide feedback while asynchronous requests are in progress or fail.

## 📱 Responsive Design

Tailwind CSS is used to create a clean, responsive layout.

* One column on smaller screens.
* Two columns on medium and larger screens.
* Consistent spacing, borders, and typography.
* Left-aligned titles and descriptions for readability.

## 📂 Project Structure

```text
blog-post-app/
├── public/
├── src/
│   ├── components/
│   │   └── BlogPost.tsx
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

*The structure above is illustrative; adjust it to match your actual project files.*

## 🧠 What I Learned

This project provides hands-on practice with:

* React hooks, including `useState` and `useEffect`.
* TypeScript interfaces, types, and generics.
* JavaScript Promises, `async/await`, and asynchronous API requests.
* REST API integration and response handling.
* Runtime validation using Zod.
* Conditional rendering in React.
* Reusable components and component props.
* Responsive layouts with Tailwind CSS.
* Git and GitHub version control.

## 🔮 Future Improvements

* Add search and filtering for blog posts.
* Implement pagination.
* Add individual post detail pages.
* Support creating, editing, and deleting posts.
* Introduce TanStack Query for server-state management and caching.
* Add form validation with React Hook Form and Zod.
* Write unit and component tests with Vitest and React Testing Library.

## 👨‍💻 Author

**Madhuri Dethe**

Software Engineer | React & TypeScript

* GitHub: [madhuridethe21](https://github.com/madhuridethe21)
* Portfolio: [Personal Portfolio](https://personal-portfolio-kappa-seven-99.vercel.app/)

---

*Built as a hands-on project to strengthen modern React and TypeScript development skills.*
