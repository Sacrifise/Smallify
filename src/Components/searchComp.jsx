import React from "react";
import "./searchComp.css"
import SoundPlay from "./soundPlay";


export default class SearchComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search_results: [],
            value: '',
            isOpen: false,
        };
        this.getSearch = this.getSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.renderSearch = this.renderSearch.bind(this);
    }

    getSearch(search){
        const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1683d62ab0msh32b82388bbf2e0ap1e8162jsn839af447016e',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };
        try{
            fetch(url, options).then(data => data.json()).then(json => this.handleSearch(json));
        } catch (err){
            console.error(err)
        }
    }
    handleSearch(json){
        console.log(json.data);
        this.setState({
            search_results: json.data,
        })
    }

    renderSearch(){
        if (this.state.search_results){
            return  this.state.search_results.map((json) => <div className="search-list-item"key={json.id}>{json.title} - {json.artist.name}<SoundPlay preview={json.preview}/><img className="search-list-item-img"src={json.album.cover_medium}></img></div>)
        }
    }


    render(){
        return(
            <div className="search-cont">
                <div className="search-modal-blockscreen none" onClick={(e) => {e.target.classList.toggle("none"); document.querySelector(".search-modal").classList.toggle("none")}}></div>
                <form onSubmit={(e) => {this.getSearch(this.state.value); e.preventDefault(); document.querySelector(".search-modal").classList.toggle("none"); document.querySelector(".search-modal-blockscreen").classList.toggle("none")}}>
                    <input placeholder="type here..." value={this.state.value} onChange={(e) =>  this.setState({value: e.target.value})}></input>
                    <button type="submit"> search </button>
                    <div className="search-list">
                    </div>
                </form>

                <div className="search-modal none">SEARCH RESULTS
                   {this.renderSearch()}
                </div>
            </div>
        )
    }
}