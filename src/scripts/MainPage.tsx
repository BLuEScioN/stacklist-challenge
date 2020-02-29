import * as React from 'react';
import '../styles/MainPage';
import { Header } from './Header';
import { DataProvider } from './DataProvider';
import { ResponseInterpreter } from './ResponseInterpreter';
import { ProductInfo } from './ProductInfo';

export class MainPage extends React.Component { 
  private responseInterpreter;
  private dataProvider;
  
  constructor(props) {
    super(props);
    this.dataProvider = new DataProvider();
    this.responseInterpreter = new ResponseInterpreter(this.dataProvider.getData());

  }

  public render() {
    return (
      <div className='main'>
        <Header />
        <div className='main-content'>
          <div className='left-pane'>
            <ProductInfo {...this.responseInterpreter.getProductInfo()} />
      
            
          </div>
          <div className='right-pane'>
            Righadssdfsdfsdf
          </div>
        </div>
      </div>
    );
  }





}
