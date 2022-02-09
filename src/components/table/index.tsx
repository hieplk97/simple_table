import * as React from 'react';
import { connect } from 'react-redux';

import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Dropdown, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { IOrderItem } from '../../models/orderItem';


const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 150 },
};

const options: IDropdownOption[] = [
    { key: 'code', text: 'Mã' },
    { key: 'orderDate', text: 'Ngày đặt' },
    { key: 'customer', text: 'Khách hàng' },
    { key: 'COD', text: 'COD' },
    { key: 'total', text: 'Tổng tiền' },
    { key: 'channel', text: 'Kênh' },
];

const generateIcon = (item:any) => {
    let deliver = null;
    switch (item.deliver) {
        case 1:
            deliver = <span className="label success">Chưa</span>
            break;
        case 2:
            deliver = <span className="label other">Đã giao</span>
            break;
        default:
            deliver = <span className="label danger">null</span>
            break;
    }

    let checkout = null;
    switch (item.checkout) {
        case 1:
            checkout = <span className="label warning">Chờ xử lý</span>
            break;
        case 2:
            checkout = <span className="label other">Đã giao</span>
            break;
        default:
            checkout = <span className="label danger">null</span>
            break;
    }

    let cod = null;
    switch (item.cod) {
        case 1:
            cod = <span className="label info">Đã Nhận</span>
            break;
        case 2:
            cod = <span className="label other">Chưa nhận</span>
            break;
        default:
            cod = <span className="label danger">null</span>
            break;
    }

    return {deliver: deliver, checkout: checkout, cod: cod}
}

const TableCP = (props: ITableProps) => {
    //const { data } = props;

    const data = [
        { code: "Code1", orderDate: "2021/01/01", customer: "test", deliver: 1, checkout: 2, cod: 2, total: "300", channel: "web" },
        { code: "Code2", orderDate: "2022/01/01", customer: "test1", deliver: 2, checkout: 1, cod: 1, total: "300", channel: "web" }]

    let rowItems = data.map((item, index) => {
        const icons = generateIcon(item);
        return ({
            key: item.code,
            code: item.code,
            orderDate: item.orderDate,
            customer: item.customer,
            deliver: icons.deliver,
            checkout: icons.checkout,
            cod: icons.cod,
            total: item.total,
            channel: item.channel
        });
    })

    const columns = [
        { key: 'column1', name: 'Mã', fieldName: 'code', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Ngày đặt', fieldName: 'orderDate', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Khách hàng', fieldName: 'customer', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Giao hàng', fieldName: 'deliver', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column5', name: 'Thanh toán', fieldName: 'checkout', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column6', name: 'COD', fieldName: 'cod', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column7', name: 'Tổng tiền', fieldName: 'total', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column8', name: 'Kênh', fieldName: 'channel', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    return (
        <div>
            <Stack horizontal tokens={stackTokens}>
                <Dropdown placeholder="Điều kiện lọc" options={options} styles={dropdownStyles} />
                <SearchBox placeholder="Search" style={{ width: 500 }} onSearch={newValue => console.log('value is ' + newValue)} />

            </Stack>
            <DetailsList
                items={rowItems}
                columns={columns}
                key="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={0}
            />
        </div>
    );
}
/*********************************************** */
//       Define property of components            /
/*********************************************** */
interface ITableProps {
    data: IOrderItem[],
};
const mapStateToProps = (state: any) => {
    return {
        data: [],
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
};

export const BasicTable = connect(mapStateToProps, mapDispatchToProps)(TableCP);
