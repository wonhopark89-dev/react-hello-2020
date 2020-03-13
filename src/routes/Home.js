import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Moive from "../components/Movies";


// function Food(props) {
//   console.log(props);
//   return (
//     <h1>i love {props.fav}</h1>
//   )
// }

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>i love {name}</h1>
//       <img src={picture} alt={name} />
//       <h4>{rating}</h4>
//     </div>
//   )
// }

// const foodIlike = [
//   {
//     id: 1,
//     name: 'aaa',
//     image: "data:image/png;base64,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",
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: 'bbbb',
//     image: "fdfdsdff",
//     rating: "4.4"
//   },
//   {
//     id: 3,
//     name: 'ccc',
//     image: "fdf123df",
//     rating: 3.5
//   },
//   {
//     id: 4,
//     name: 'ddd',
//     image: "fdfdsdff",
//     rating: 1.5
//   }
// ];

// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number.isRequired
// }


// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// function App() {
//   return (
//     <div>

//       {foodIlike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}


//       {/* {console.log(foodIlike.map(renderFood))} */}
//       {/* {console log key is null} */}
//       {/* {foodIlike.map(renderFood)} */}

//     </div>
//   );
// }


class Home extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    // es6 like below
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);

    // this.setState({movies:movies});
    // es6 can be this
    this.setState({ movies, isLoading: false });

  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    console.log("i am rendering");
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => (
          <Moive
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            >
          </Moive>
        ))}
      </div>
    );
  }
}

export default Home;