const useSupplierTable = () => {
    const supplierColumn = [
        { 
            name: 'Supplier Name', 
            selector: supplier => <h2>{supplier?.name}</h2>
        },
        { 
            name: 'Supplier Email', 
            selector: supplier => <h2>{supplier?.email}</h2>
        },
    ]

    return [supplierColumn]
}
export default useSupplierTable;