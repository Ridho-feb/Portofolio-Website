'use client';

import React from 'react';
import { FileNode } from '@/types';
import { Folder, FileText, ChevronRight } from 'lucide-react';

interface FileTreeProps {
  node: FileNode;
  onSelectFile?: (path: string) => void;
  prefix?: string;
}

export const FileTreeRenderer: React.FC<FileTreeProps> = ({ node, onSelectFile, prefix = '' }) => {
  if (node.type === 'file') {
    return (
      <div 
        onClick={() => onSelectFile && onSelectFile(`${prefix}${node.name}`)}
        className="flex items-center space-x-2 text-[#8B949E] hover:text-[#58A6FF] cursor-pointer group py-0.5"
      >
        <FileText className="w-3.5 h-3.5 text-[#8B949E] group-hover:text-[#58A6FF]" />
        <span className="font-mono text-xs">{node.name}</span>
        {node.size && <span className="text-[10px] text-[#30363D]">({node.size})</span>}
      </div>
    );
  }

  return (
    <div className="space-y-1 my-1 font-mono text-xs">
      <div className="flex items-center space-x-2 text-[#58A6FF] font-bold">
        <Folder className="w-4 h-4 text-[#58A6FF]" />
        <span>{node.name}/</span>
      </div>

      <div className="pl-4 border-l border-[#30363D] space-y-0.5 ml-2">
        {node.children?.map((child, i) => (
          <FileTreeRenderer
            key={i}
            node={child}
            onSelectFile={onSelectFile}
            prefix={`${prefix}${node.name}/`}
          />
        ))}
      </div>
    </div>
  );
};
