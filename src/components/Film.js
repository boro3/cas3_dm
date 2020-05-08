import React from 'react';
import PropTypes from 'prop-types'

export class Film extends React.Component {

    render() {
        return (
            <div id="film">
                <ul>
                    {this.props.film.map((film, i) => {
                        return (
                            <li key={i}>
                                <span>Name: {film.ime}</span> <br />
                                <span>Genre: {film.zarn}</span> <br />
                                <span>Year: {film.year}</span> <br />
                                <img src={film.slika} alt="" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

Film.propTypes = {
    film: PropTypes.array.isRequired
}