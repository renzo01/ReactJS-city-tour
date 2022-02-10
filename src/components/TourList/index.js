import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour'
import {tourData} from '../tourData';

export default class TourList extends Component {
    state = {
        tours : tourData
    };
    removeTour = id => {
        //getting list of the tours
        const {tours} = this.state;
        const sortedTour = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTour
        });
    }
    render() {
        const {tours} = this.state;
        console.log(this.state.tours);
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}