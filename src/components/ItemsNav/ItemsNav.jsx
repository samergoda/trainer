import { TreeSelect } from 'primereact/treeselect';
import { useEffect, useState } from 'react';
import { NodeService } from './NodeService';
function ItemsNav() {
  const [nodes, setNodes] = useState([]);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);

  useEffect(() => {
    setNodes(NodeService);
  }, []);

  return (
    <div className=' border-0 flex justify-content-center'>
      <TreeSelect
        value={selectedNodeKey}
        onChange={(e) => setSelectedNodeKey(e.value)}
        options={nodes}
        className='w-100 border-0 border-bottom w-full'
        placeholder='Home'
      ></TreeSelect>
    </div>
  );
}

export default ItemsNav;
