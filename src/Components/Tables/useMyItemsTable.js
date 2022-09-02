const useMyItemsTable = ({ handleItem }) => {
    const myItemsColumn = [
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
            selector: item => <h2 className="text-center">{item?.avlQuantity}</h2>
        },

        {
            name: <h2>Edit</h2>,
            selector: item => <td
                className="handleItem"
                onClick={() => handleItem({ ...item, method: "edit" })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                </svg>
            </td>
        },
        {
            name: <h2>Delete</h2>,
            selector: item => <td
                className="handleItem"
                onClick={() => handleItem({ ...item, method: "delete" })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </td>
        },

    ];
    return [myItemsColumn]
}
export default useMyItemsTable;