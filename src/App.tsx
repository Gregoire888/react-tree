import "./App.css";
import { TREE_DATA } from "./data";
import { Tree } from "./Tree";

function App() {
  return <Tree data={TREE_DATA} useRootAsHeading={true} skipRoot={true} />;
}

export default App;
