// filesystem-item.tsx
'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { DocumentIcon, FolderIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type Node = {
  name: string;
  nodes?: Node[];
};

export function FilesystemItem({ node, isRoot }: { node: Node, isRoot:boolean }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {node.name}
      </span>

      {(isOpen || isRoot) && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FilesystemItem node={node} isRoot={false} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
