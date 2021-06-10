import React from 'react';

export default function Main({Data, categories, filterItems}) {
    return (
        <main>
            <header>
                <div className="banner">
                    <h1>Curated Sustainable Cloth's</h1>
                </div>
            </header>
            <div className="filter-product">
                <div className="filter">
                    <h3>FILTER</h3>
                    {categories.map((cate, index) => {
                        return (
                            <button type='button'
                             className='filter-btn'
                              key={index}
                            onClick={() => filterItems(cate)}>
                            {cate}</button>
                        );
                    })}
                </div>
                <div className="products">
                    {Data.map((item) => {
                        const {name, cate, img1, img2, price} = item;
                        
                        return (
                            <div className="container">
                                <img className='first' src={img1} alt=""/>
                                <img src={img2} alt=""/>
                                <div className="name-price">
                                    <p className='name'>{name}</p>
                                    <p className='price'>${price}</p>
                                </div>
                                <p className='cate'>{cate}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>            
    )
}
