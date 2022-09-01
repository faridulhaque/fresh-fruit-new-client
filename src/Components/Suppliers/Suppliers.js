import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component'

import { useSelector, useDispatch } from 'react-redux'
import { getAllItems } from '../../ReduxServices/Actions/AllItemsAction';
import Loading from '../Shared/Loading';
import useSupplierTable from '../Tables/useSuppliersTable';
import { useTableStyles } from '../Tables/useTableStyles';

const Suppliers = () => {

    const { isLoading, data, error } = useSelector((state) => state);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])



    const [supplierColumn] = useSupplierTable()
    const [customTableStyles] = useTableStyles()

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-center text-4xl mb-3 text-primary" style={{ marginTop: "100px" }}>
                Suppliers
            </h2>
            <div className='mx-20'>
                <DataTable data={data} columns={supplierColumn} pagination customStyles={customTableStyles}></DataTable>
            </div>
        </div>
    );
};

export default Suppliers;