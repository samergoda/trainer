import { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './NodeService.js';

export default function StatefulDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        setNodes(NodeService);
    }, [])

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}