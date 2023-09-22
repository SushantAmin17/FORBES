const heading1 = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h1", {
    id: "title",
    key: "h1"
}, "Header");
const container = React.createElement("h2", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
