import React from 'react';
import TSR from './img/tsr.jpg';
import TGF from './img/tgf.jpg';
import TDK from './img/tdk.jpg';
import INC from './img/inc.jpg';
import FC from './img/fc.jpg';
import { Film } from './Film';




export class App extends React.Component {

  render() {

    var filmovi = [
      { ime: "The Shawshank Redemption", zarn: "Drama", year: 1994, slika: TSR },
      { ime: "The Godfather", zarn: "Crime", year: 1972, slika: TGF },
      { ime: "The Dark Knight", zarn: "Action", year: 2008, slika: TDK },
      { ime: "Inception", zarn: "Action", year: 2010, slika: INC },
      { ime: "Fight Club", zarn: "Drama", year: 1999, slika: FC }
    ]

    return (
      <Film film={filmovi} />
    )
  }
}