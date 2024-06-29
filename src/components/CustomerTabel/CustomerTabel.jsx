import { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './NodeService.js';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons';

export default function StatefulDemo() {
  const [nodes, setNodes] = useState([]);

  const actionTemplate = (rowData) => {
    return (
      <div className='flex flex-wrap gap-2'>
        <Link
          to={`user/${rowData.data.id}`}
          className='p-button p-component p-button-rounded p-button-text p-button-icon-only p-button-secondary'
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link
          to={`edit/${rowData.data.id}`}
          className='p-button p-component p-button-rounded p-button-text p-button-icon-only p-button-secondary'
        >
          <FontAwesomeIcon icon={faPen} />
        </Link>
        {/* <Button type="button" icon="pi pi-pencil" severity="success" rounded /> */}
      </div>
    );
  };

  useEffect(() => {
    setNodes(NodeService);
  }, []);

  return (
    <>
      <h2 className='my-3'>Cutomers</h2>
      <div className='card'>
        <TreeTable
          value={nodes}
          tableStyle={{ minWidth: '50rem' }}
          stateKey={'tree-table-state-demo-session'}
          stateStorage={'local'}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
        >
          <Column
            field='id'
            header='Id'
            minWidth
            filter
            filterPlaceholder='Filter by Id'
          ></Column>
          <Column
            field='name'
            header='Name'
            filter
            filterPlaceholder='Filter by name'
          ></Column>
          <Column
            field='weight'
            header='Weight'

            //   filter
            //   filterPlaceholder='Filter by weight'
          ></Column>
          <Column
            field='gender'
            header='Gender'
            filter
            filterPlaceholder='Filter by gender'
          ></Column>
          <Column body={actionTemplate} />
        </TreeTable>
      </div>
    </>
  );
}
