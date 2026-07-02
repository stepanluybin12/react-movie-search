import React from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"


const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


export class Main extends React.Component{

    state = {
        movies : [],
        loading : true,
    }


    componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies : data.Search, loading : false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading : false})
            })
    }


    searchMovies = (str, type='all') => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies : data.Search, loading : false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading : false})
            })
    }


    render(){
        return <main className="container content">


            <Search searchMovies={this.searchMovies}/>
            {
            this.state.loading ? <Preloader/> : <Movies movies={this.state.movies}/> 
            }

            
        </main>
        
        
    }
}