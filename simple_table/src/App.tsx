import * as React from 'react';
import { Pivot, PivotItem, IPivotItemProps, Label } from '@fluentui/react';
import { BasicTable } from './components/table';
import { OrderService } from './services/order.service';
import './App.css';
import { connect } from 'react-redux';
import { useState } from 'react';


const AppCP = (props: AppProps) => {
  const {handleLoadData} = props;

  const [lastHeader, setLastHeader] = React.useState<{ props: IPivotItemProps } | undefined>(undefined);

  return (
    <div className="App">
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
      console.log(url)
      OrderService.getOrders(dispatch, url);
    }
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppCP);