export const useTableStyles = () => {
    const customTableStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
                backgroundColor: '#084F2A',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#084F2A',
                textAlign: 'center'
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8 px',
                color: 'white',
                textAlign: 'center',
                fontSize: '16px',
                margin: 'auto',
            },
        },
    };
    return [customTableStyles]
}
