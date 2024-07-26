import Node from "./filesystem-types";
import { FilesystemItem } from "./filesystem-item";


export default function FilesystemTree({tree} : {tree : Node[]}) {
    return (
        <ul>
        {
        tree.map((node) => (
          <FilesystemItem node={node} key={node.name} />
        ))}
      </ul>

    );
}