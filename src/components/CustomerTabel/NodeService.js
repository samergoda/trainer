export const NodeService = [
    {
        key: '0',
        label: 'Documents',
        data: { name: 'Documents Folder', size: '200KB', type: 'Folder' },
        icon: 'pi pi-fw pi-inbox',
        children: [
            {
                key: '0-0',
                label: 'Work',
                data: { name: 'Work Folder', size: '150KB', type: 'Folder' },
                icon: 'pi pi-fw pi-cog',
                children: [
                    { key: '0-0-0', label: 'Expenses.doc', data: { name: 'Expenses.doc', size: '30KB', type: 'Document' }, icon: 'pi pi-fw pi-file' },
                    { key: '0-0-1', label: 'Resume.doc', data: { name: 'Resume.doc', size: '20KB', type: 'Document' }, icon: 'pi pi-fw pi-file' }
                ]
            },
            {
                key: '0-1',
                label: 'Home',
                data: { name: 'Home Folder', size: '50KB', type: 'Folder' },
                icon: 'pi pi-fw pi-home',
                children: [
                    { key: '0-1-0', label: 'Invoices.txt', data: { name: 'Invoices.txt', size: '15KB', type: 'Text File' }, icon: 'pi pi-fw pi-file' }
                ]
            }
        ]
    }
];
