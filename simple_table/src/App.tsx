import * as React from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Label } from '@fluentui/react/lib/Label';

import { Pivot, PivotItem, IPivotItemProps } from '@fluentui/react';
import { BasicTable } from './components/table';
import { OrderService } from './services/order.service';
import { connect } from 'react-redux';
import { Stack, IStackTokens, IIconProps } from '@fluentui/react';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { IconButton, } from '@fluentui/react/lib/Button';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

import './App.css';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';

initializeIcons();

const iconClass = mergeStyles({
  fontSize: 30,

  margin: '0 25px',
});

const classNames = mergeStyleSets({
  gray: [{ color: 'gray' }, iconClass],
});

const stackTokens: IStackTokens = { childrenGap: 10 };
const GridViewMedium: IIconProps = { iconName: 'GridViewMedium' };
const ViewList: IIconProps = { iconName: 'ViewList' };


const AppCP = (props: AppProps) => {
  const { handleLoadData } = props;

  const [lastHeader, setLastHeader] = React.useState<{ props: IPivotItemProps } | undefined>(undefined);

  return (
    <div className="App">
      <div className='App-header'>
        <Stack horizontal horizontalAlign="space-between">
          <Stack horizontal tokens={stackTokens}>
              <FontIcon aria-label="Compass" iconName="CheckList" className={classNames.gray}  />
              <Label style={{color:'Gray', fontSize:'20px'}} >Danh sách đơn hàng</Label>
          </Stack>
          <Stack horizontal tokens={stackTokens}>
            <Stack.Item>
              <IconButton iconProps={ViewList} title="ViewList" ariaLabel="ViewList" />
              <IconButton iconProps={GridViewMedium} title="Grid View" ariaLabel="Grid View" />
            </Stack.Item>
            <DefaultButton text="Xuất dữ liệu" />
            <PrimaryButton text="Tạo đơn hàng" />
          </Stack>
        </Stack>
      </div>
      <Pivot aria-label="Basic Pivot Example" onLinkClick={setLastHeader} onClick={handleLoadData(lastHeader?.props.linkText)}>
        <PivotItem headerText="Tất cả đơn hàng" linkText=""  >
          <BasicTable />
        </PivotItem>
        <PivotItem headerText="Đơn hàng mới" linkText="/getNew">
          <BasicTable />
        </PivotItem>
        <PivotItem headerText="Chưa giao hàng" linkText="/waitingDeliver">
          <BasicTable />
        </PivotItem>
        <PivotItem headerText="Chưa thanh toán" linkText="/waitingPayment">
          <BasicTable />
        </PivotItem>
      </Pivot>
    </div>
  );
}

export interface AppProps {
  handleLoadData: any
}

const mapStateToProps = (state: any) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleLoadData: (url: string) => {
      OrderService.getOrders(dispatch, url);
    }
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppCP);