import { IProductInfoProps } from "./ProductInfo";

/** Will be responsible for giving me the data exactly the way I need it in my app */
export class ResponseInterpreter {
  private data: any;

  constructor(data: any) {
    this.data = data[0];
  }

  public getProductInfo(): IProductInfoProps {
    return {
      image: this.data.image,
      title: this.data.title,
      subtitle: this.data.subtitle
    };
  }
}