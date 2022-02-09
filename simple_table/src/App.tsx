import { Pivot, PivotItem } from '@fluentui/react';
import { BasicTable } from './components/table';
import './App.css';
import { connect } from 'react-redux';


const AppCP = (props: AppProps) => {

  return (
    <div className="App">
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem headerText="Tất cả đơn hàng" >
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

export interface AppProps {

}

const mapStateToProps = (state: any) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {   
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppCP);