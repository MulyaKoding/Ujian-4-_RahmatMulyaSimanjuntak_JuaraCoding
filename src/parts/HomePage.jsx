import React, { Component } from 'react'
import HeaderNavigasi from './HeaderNavigasi'
import MenuCategory from './MenuCategory'

export class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <HeaderNavigasi/>
                <div className="row">
                    <div
                     className="col">
                        <MenuCategory/>
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
