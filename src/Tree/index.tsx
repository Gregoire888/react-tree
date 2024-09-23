import { useMemo } from "react";
import { TreeData } from "../types";
import { TreeNode } from "./TreeNode";
import "./styles.css";

export const Tree: React.FC<{
  data: TreeData | TreeData[];
  skipRoot?: boolean;
  useRootAsHeading?: boolean;
}> = ({ data, skipRoot, useRootAsHeading }) => {
  const treeData = useMemo(() => {
    if (Array.isArray(data)) {
      return data;
    }
    return skipRoot && data.children?.length ? data.children : data;
  }, [data, skipRoot]);

  return (
    <div className="tree-container">
      {!Array.isArray(data) && useRootAsHeading && <h2>{data.name}</h2>}
      {Array.isArray(treeData) ? (
        treeData.map((node) => <TreeNode key={node.id} data={node} />)
      ) : (
        <TreeNode data={treeData} />
      )}
    </div>
  );
};
