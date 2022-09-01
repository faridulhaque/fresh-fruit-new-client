const useAllItemsTable = () => {
    const allItemsColumn = [
        {
            name: <h2>Name</h2>,
            selector: item => <h2>{item?.name}</h2>
        },
        {
            name: <h2>Price</h2>,

            selector: item => <h2>{item?.price}</h2>
        },
        {
            name: <h2>Min Quantity</h2>,
            selector: item => <h2>{item?.minQuantity}</h2>
        },
        {
            name: <h2>Available Quantity</h2>,
            selector: item => <h2>{item?.avlQuantity}</h2>
        },
        {
            name: <h2>Supplier</h2>,
            selector: item => <h2>{item?.supplierName}</h2>
        },

    ];
    return [allItemsColumn]
}
export default useAllItemsTable;