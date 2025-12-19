# Front-end test project: News List

- Tailwind CSS is integrated for styling and implementing responsive layouts.
- To simulate API requests, I created a "request" wrapper using promises and a timeout.
- For the state manager, I decided to store the authenticated user. Normally, detailed data of an entity on its page is fetched via an API request, while user data is usually stored in the state, so I placed it there.
- The detailed news object for the news/{id} request is taken from the general list to reduce the amount of mock data.
- The content part of the news detail page is represented as an array, where each object is essentially a paragraph. It can be refactored into an HTML structure and rendered using v-html.