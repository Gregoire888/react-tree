import { useState } from "react";
import { TreeData } from "../types";
import { ChevronDown, ChevronRight, ExternalLink } from "react-feather";

type TreeNodeProps = {
  data: TreeData;
  //   onToggleExpanded: () => void;
};

export const TreeNode: React.FC<TreeNodeProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tree-node">
      <div className="tree-node_header">
        {data.children?.length ? (
          isOpen ? (
            <ChevronDown onClick={() => setIsOpen(false)} />
          ) : (
            <ChevronRight onClick={() => setIsOpen(true)} />
          )
        ) : null}
        <span className="tree-node_name">
          {data.name}
          <ExternalLink />
        </span>
      </div>
      {data.children && isOpen && (
        <div className="tree-node_children-wrapper">
          <div className="tree-node_children-container">
            {data.children.map((child) => (
              <TreeNode key={child.id} data={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
