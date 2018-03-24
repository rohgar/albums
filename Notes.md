1. In react, everything is a `component`.
2. A `component` returns `JSX` code which is nothing but HTML type looking JavaScript. Each component has its own js file, with the component name same as the file name. Also Each component should return a single JSX tag (which can include a nested tag structure), just like the whole HTML page is inside the <html></html> tag.
    * Functional Components: Used for static data.
    * Used for dynamic sources of data.
3. In a js file, We import the libs needed to make the component (the imports need to be "destructured"), then define the component, then either register it using the `AppRegistry` if its the `root component`, or make it available to the rest of the app to use by using `export` statements if its a `child component`.
4. Flexbox: Everything by default is rendered at top left. `justifyContent` is used to position items vertically: `flex-start`, `center` or `flex-end` pushes  everything to the top, center or bottom. Similarly `alignItems` is used to position items horizontally.
5. Whenever we want to pass data from the root to the child, we use the `props` system. We pass a `props` object from root to the child.
