import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import StyleSelector from './../src/components/Overview/StyleSelector';
import {AddToCartButton, Img} from './../src/components/Overview/OverviewStyledCom'
import {Tooltip} from './../src/components/Overview/Tooltip';
import ProductionInfo from './../src/components/Overview/ProductInfo';
import AddToCart from './../src/components/Overview/AddToCart';
import ProductOverview from './../src/components/Overview/ProductOverview';
import ImageCarousel from './../src/components/Overview/ImageCarousel';
import Features from './../src/components/Overview/Features';
import ImageModal from './../src/components/Overview/ImageModal';


afterEach(cleanup);

it("render styleSelector with StyleSelector className", () => {
  const currentStyle = {
    name: "modern"
  };
  const styles = [];
  const setCurrentStyle = () => {}
  const styleSelector = renderer.create(<StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>)
  expect(styleSelector.toJSON().props.className).toEqual('StyleSelector');
});

it('AddToCartButton renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<AddToCartButton />)
  })
})

it('Tooltip renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<Tooltip />)
  })
})

test('Click social media icone', () => {
  const setExpanded = jest.fn();
  const children = <h1>testing</h1>;
  const zoomed = false;
  const setZoomed = () => {};
  render(<ImageModal setExpanded={setExpanded} children={children} zoomed={zoomed} setZoomed={setZoomed} onClick={setExpanded}/>)
  fireEvent.click(screen.getByTestId('testImageModal'))
  expect(setExpanded).toHaveBeenCalledTimes(1);
})


it("render ProductInfo correctly", () => {
  const productDetails = {
    category: 'testCategory',
    name: 'testName'
  };
  const currentStyle = {
    sale_price: 100,
    original_price: 120,
  }
  const ratings = 3;
  const numOfReviews = 32;
  const ProductInfo = renderer.create(<ProductionInfo productDetails={productDetails} ratings={ratings} numOfReviews={numOfReviews} currentStyle={currentStyle}/>)
  expect(ProductInfo.toJSON().children.length).toEqual(10);
});

it("render ProductInfo correctly", () => {
  const productDetails = {
    category: 'testCategory',
    name: 'testName'
  };
  const currentStyle = {
    sale_price: null,
    original_price: 120,
  }
  const ratings = 3;
  const numOfReviews = 0;
  const ProductInfo = renderer.create(<ProductionInfo productDetails={productDetails} ratings={ratings} numOfReviews={numOfReviews} currentStyle={currentStyle}/>)
  expect(ProductInfo.toJSON().children.length).toEqual(9);
});


it("render ProductInfo correctly", () => {
  const productDetails = {
    category: 'testCategory',
    name: 'testName'
  };
  const ratings = 3;
  const numOfReviews = 32;
  const ProductInfo = renderer.create(<ProductionInfo productDetails={productDetails} ratings={ratings} numOfReviews={numOfReviews}/>)
  expect(ProductInfo.toJSON().children.length).toEqual(8);
});

it("render AddToCart correctly", () => {
  const currentStyle = {
    skus: {1: {quantity: 1, }},
    name: 'testName'
  };
  const setQuantityInCart = () => {};
  const quantityInCart = 3;
  const AddToCartInstance = renderer.create(<AddToCart currentStyle={currentStyle} setQuantityInCart={setQuantityInCart} quantityInCart={quantityInCart}/>)
  expect(AddToCartInstance.toJSON().props.className).toEqual('AddToCart');
});

it("render ProductOverview correctly", () => {
  const productDetails = {
    slogan: 'testSlogan',
    description: 'testDescription'
  };
  const ProductOverviewInstance = renderer.create(<ProductOverview productDetails={productDetails} />)
  expect(ProductOverviewInstance.toJSON().children[0].children[0]).toEqual('testSlogan');
});

it("render ImageCarousel correctly", () => {
  const currentStyle = {photos: [{url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg', thumbnail_url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg' }]};
  const setExpanded = () => {};
  const setZoomed = () => {};
  const expanded = false;
  const zoomed = false;
  const ImageCarouselInstance = renderer.create(<ImageCarousel currentStyle={currentStyle} setExpanded={setExpanded} setZoomed={setZoomed} expanded={expanded} zoomed={zoomed}/>)
  expect(ImageCarouselInstance.toJSON().props.className).toEqual('ImageCarousel');
});


it("render ImageModal correctly", () => {
  const setExpanded = () => {};
  const children = <h1>testing</h1>;
  const zoomed = false;
  const setZoomed = () => {};
  const ImageModalInstance = renderer.create(<ImageModal setExpanded={setExpanded} children={children} zoomed={zoomed} setZoomed={setZoomed}/>)
  expect(ImageModalInstance.toJSON().children[0].children[1].children[0].children[0]).toEqual('testing');
});

test('Click ImageModal setExpanded been called', () => {
  const setExpanded = jest.fn();
  const children = <h1>testing</h1>;
  const zoomed = false;
  const setZoomed = () => {};
  render(<ImageModal setExpanded={setExpanded} children={children} zoomed={zoomed} setZoomed={setZoomed} onClick={setExpanded}/>)
  fireEvent.click(screen.getByTestId('testImageModal'))
  expect(setExpanded).toHaveBeenCalledTimes(1);
})

it("render Features correctly", () => {
  const productDetails = {
    features: [{feature: 'testFeature', value: 'testValue'}]
  };
  const FeaturesInstance = renderer.create(<Features productDetails={productDetails} />)
  expect(FeaturesInstance.toJSON().children[0].children[0].includes('testValue')).toEqual(true);
});