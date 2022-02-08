import React from 'react';
import logo from './logo.svg';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
import { BasicTable } from './components/table';
import './App.css';



const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

function App() {
  return (
    <div className="App">
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem headerText="Tất cả đơn hàng">
          <BasicTable />
        </PivotItem>
        <PivotItem headerText="Đơn hàng mới">
          <BasicTable />
        </PivotItem>
        <PivotItem headerText="Chưa giao hàng">
          <BasicTable />
        </PivotItem>
        <PivotItem headerText="Chưa thanh toán">
          <BasicTable />
        </PivotItem>
      </Pivot>
    </div>
  );
}

export default App;
