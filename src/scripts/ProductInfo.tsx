import * as React from 'react';

export interface IProductInfoProps {
  image: string;
  title: string;
  subtitle: string;
}

export const ProductInfo = (props: IProductInfoProps): JSX.Element => {
  console.log('props', props)
  return (
    <div className='product'>
      <img className='image' src={props.image} alt={props.image}/>
      <div className='title'>{props.title}</div>
      <div className='subtitle'>{props.subtitle}</div>
    </div>
  );
}