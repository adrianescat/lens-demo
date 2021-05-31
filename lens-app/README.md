This app was coded using node `v12.16.2`

### Dev environment

```
$ npm i
$ npm run dev
```

then go to http://localhost:3000/

### Production environment

```
$ npm i
$ npm run build
$ npm run start
```

then go to http://localhost:3000/


### Information

To build this app I used `Next.js`, `TypeScript`, `Node.js` `CSS Modules (scss)`
To test the app I used `Jest` and `Enzyme`
Storybook is installed but needs a lot of work (I didn't work on it indeed. There is a problem with versions between Storybook, React and Nextjs. I needed more time)

### Characteristics

- Pure CSS components to avoid complicated Javascript that can impact on the performance. e.g Tabs, Scroll and more. Works better than the prototype.
- Smoth animations, the animations are custom, written by me and I focused on performance too. I tried to avoid JS as much as possible.
- Code divided in a nice and clean scaffolding that is scalable.
- React components. They are fully reusable and customizable.
- Nextjs API. I use nextjs functionality to provide data to the pages. The data itself is mocked but I use a `Page/Component/API` communication instead of harcoding data inside the UI components
- Server side rendering. Amazing performance
- I used CSS modules with SASS to avoid downloading unused styles, so the pages have always what its needed and nothing more. The scss are more modular and understandable.
- I used TypeScript to prevent bugs, understand better the code and get linter warnings, autocomplete options and more.

### Things that can be improved (with more time) or are missing

- Accesibility. Possibility of navigation with keyboard, role and aria labels utilization. (needed more time)
- Undo / Redo actions on `LensView` are missing (needed more time)
- More tests can be added to increase coverage. More functions and component logic can be tested too.
- More components can be created or at least divide the existent to clean the code even more.
- More optimizations can be added using `React.memo`, review logic inside `useEffect` hooks, images, css and html optimizations and review css animations (components in different layers, using `will-transform`, delete transitions `All` and more)
- A Redux store can help to avoid prop drilling in the `LensView`


### Data manipulation
I added and modified data from mocks so the backend info helps better to the frontend with a few changes. I think a lot more can be done there indeed (e.g. pagination among others)

- `summaryLabel` key added
- `urgent` key added to show in the dashboard lens that has problems or flags
- `files` collection added to each lens with the id of the files and data of them. In a real scenario this can be used to request imagens in parallel.
- `lastUpdated` key added to show it in the dashboard
- I modified box numbers for simplicity
