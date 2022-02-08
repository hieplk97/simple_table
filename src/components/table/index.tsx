import * as React from 'react';
import { Announced } from '@fluentui/react/lib/Announced';
import { SearchBox } from '@fluentui/react/lib/SearchBox';

import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { Stack, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { mergeStyles } from '@fluentui/react/lib/Styling';


const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 150 },
};

const stackItemStyles: IStackItemStyles = {
    root: {
      display: 'flex',
      height: 50,
      overflow: 'hidden',
    },
  };
  const nonShrinkingStackItemStyles: IStackItemStyles = {
    root: {
      display: 'flex',
      height: 50,
      overflow: 'hidden',
      width: 500,
    },
  };

const options: IDropdownOption[] = [
    { key: 'code', text: 'Mã' },
    { key: 'orderDate', text: 'Ngày đặt' },
    { key: 'customer', text: 'Khách hàng' },
    { key: 'COD', text: 'COD' },
    { key: 'total', text: 'Tổng tiền' },
    { key: 'channel', text: 'Kênh' },
];

const exampleChildClass = mergeStyles({
    display: 'inline',
    marginBottom: '10px',
});

export interface IDetailsListBasicExampleItem {
    key: number;
    code: any;
    orderDate: string;
    customer: string;
    deliver: any;
    checkout: any;
    cod: any;
    total: string;
    channel: string;
}

export interface IDetailsListBasicExampleState {
    items: IDetailsListBasicExampleItem[];
    selectionDetails: string;
}

export class BasicTable extends React.Component<{}, IDetailsListBasicExampleState> {
    private _selection: Selection;
    private _allItems: IDetailsListBasicExampleItem[];
    private _columns: IColumn[];

    constructor(props: {}) {
        super(props);

        this._selection = new Selection({
            onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
        });

        // Populate with items for demos.
        this._allItems = [
            {
                key: 1, code: 'Item ' + 2, orderDate: "2022/02/01", customer: "",
                deliver: <span className="label other">Đã giao</span>,
                checkout: <span className="label other">Đã thanh toán</span>,
                cod: <span className="label other">Chưa nhận</span>, total: "300.000 đ", channel: "web"
            }
        ];


        this._columns = [
            { key: 'column1', name: 'Mã', fieldName: 'code', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column2', name: 'Ngày đặt', fieldName: 'orderDate', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column3', name: 'Khách hàng', fieldName: 'customer', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column4', name: 'Giao hàng', fieldName: 'deliver', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column5', name: 'Thanh toán', fieldName: 'checkout', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column6', name: 'COD', fieldName: 'cod', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column6', name: 'Tổng tiền', fieldName: 'total', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column6', name: 'Kênh', fieldName: 'channel', minWidth: 100, maxWidth: 200, isResizable: true },
        ];

        this.state = {
            items: this._allItems,
            selectionDetails: this._getSelectionDetails(),
        };
    }

    public render(): JSX.Element {
        const { items, selectionDetails } = this.state;

        return (
            <div>
                <div className={exampleChildClass}>{selectionDetails}</div>

                <Announced message={selectionDetails} />
                <Stack horizontal tokens={stackTokens}>
                        <Dropdown placeholder="Điều kiện lọc" options={options}styles={dropdownStyles}/>
                    <SearchBox placeholder="Search" style={{width:1300}} onSearch={newValue => console.log('value is ' + newValue)} />

                </Stack>

                <Announced message={`Number of items after filter applied: ${items.length}.`} />
                <MarqueeSelection selection={this._selection}>
                    <DetailsList
                        items={items}
                        columns={this._columns}
                        setKey="set"
                        layoutMode={DetailsListLayoutMode.justified}
                        selection={this._selection}
                        selectionPreservedOnEmptyClick={true}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        checkButtonAriaLabel="select row"
                        onItemInvoked={this._onItemInvoked}
                    />
                </MarqueeSelection>
            </div>
        );
    }

    private _getSelectionDetails(): string {
        const selectionCount = this._selection.getSelectedCount();

        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).code;
            default:
                return `${selectionCount} items selected`;
        }
    }

    private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
        this.setState({
            items: text ? this._allItems.filter(i => i.code.toLowerCase().indexOf(text) > -1) : this._allItems,
        });
    };

    private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
        alert(`Item invoked: ${item.code}`);
    };
}
