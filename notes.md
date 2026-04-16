## React Components

The react components we write on NextJS are **server components**, meaning that they will get rendered on the server-side only before being delivered to the client.

**Client-side components** are used for user interactivity! The're pre-rendered on the server side to create a static shell and then hydrated on the client side; This means that everything within the client component that does not require interactivity or isn't dependent on browser, **is still rendered on server**.

The code or parts that rely on the browser (or require interactivity), are left as placeholders during server-side pre-rendering. When they reach the client, the browser then renders the client components and fills in the placeholders left by the server.

## Routing

NextJS uses **file-based routing**, which means that all the pages and layouts can be inside the **app** folder. The components folder **contains components and not pages**.

We can also use **Nested-routes**:

```txt
├── dashboard
│   └── users
│       └── page.tsx 
```

This will create the route **/dashboard/users**. However, if we want to create many of them, instead of having a lot, we can use something called **Dynamic Routing**, which can be based on user input or specific data. We use square brackets to create such thing:

```txt
├── dashboard
│   └── [userId]
│       └── page.tsx
```

We can use parameters on the function (user input or specific data):

```tsx
const UserDetals = async ({ params }: { params: Promise<{ id: string }>}) => {

  const { id } = await params;

  return (
    <div>
        <h1>Showing details for user #{id}</h1>
    </div>
  )
}

export default UserDetals
```

## Layouts

The **layout.tsx** file that is under the app directory will be the parent layout for every other layout. That means, its components get inhereted and displayed on other layouts. It would be recommended to use it to put the NavBar or the Footer, for example.

We can use many layouts based on the current page we're working at, and those properties will get rendered on every single page under. For example:

```txt
├── dashboard
│   ├── layout.tsx
│   └── users
│       └── page.tsx
```

However, the **root layout** will still be inhereted to the dashboard layout. But, what if we don't want the root layour to appear at all? In such scenarios, we can use **Route Groups**. They allow us to organize our route segments and project structure `without impacting the URL path`. This means that we can create folders, but unlike nested routes, **these won't show up in the URL**.

We can do that by wrapping the folder name inside parenthesis:

```txt
├── dashboard
│   ├── (admin)
│   │   ├── layout.tsx
│   │   └── users
│   │       └── page.tsx
```

This way, the URL will still be **/dashboard/users** but the layout `will only be applied to the admin route group`. This is useful for cases where we want to have different layouts for different sections of our application without affecting the URL structure.

**Note**: There is a feature called layout deduplication which, when pre-fetching multiple URLs that share the same layout, the layout is downloaded only once instead of per link. This happens automatically in NextJS.

## Error Handling

NextJS provides a way to handle errors gracefully by creating an **error.tsx** file in the app directory. This file will be used to display a custom error page whenever an error occurs in the application.

The error component can be used to display a user-friendly message, log the error for debugging purposes, or even provide options for the user to navigate back to a safe page. It has to be a `client component`, because these errors happen there!

Unlike layout.tsx, which displays everything from its parent, the error file works differtely; **only the closest error file to the route takes priority**.

## Loading UIs

NextJS also provides a way to handle loading states by creating a **loading.tsx** file in the app directory. This file will be used to display a custom loading UI whenever a page is being loaded. This can be used when data is being fetched or the user is waiting for something, like a slow conenction.

## Data Fetching

NextJS allows us to fetch data on the server side using **Server Components**. This means that we can fetch data directly in our components without needing to use client-side fetching methods like `useEffect` or `fetch` on the client side.

This is done by simply using `async` functions in our components and fetching data directly from the server. The fetched data will then be rendered on the server and sent to the client as a fully rendered page.

## API Routes

NextJS also provides a way to create API routes by creating files in the **pages/api** directory. These files will be used to handle API requests and can be used to create RESTful APIs or GraphQL endpoints.

The structure for suh thing can look like the following:

```txt
├── pages
│   └── api
│       ├── users
│       │   ├── index.ts
│       │   └── [id].ts
```

This way, we can handle requests to **/api/users** in the `index.ts` file and requests to **/api/users/:id** in the `[id].ts` file. This allows us to create a structured and organized API within our NextJS application.

## Caches

NextJS has a built-in caching mechanism that helps improve performance by caching data and pages. This can be configured using the `next.config.js` file, where we can specify caching strategies for different types of content.

**Note**: We can use the 'use cache' keyword in our code to indicate which part we want to cache.

## Metadata

NextJS allows us to define metadata for our pages using the `metadata` export in our components. This metadata can include information such as the page title, description, and other SEO-related information.

