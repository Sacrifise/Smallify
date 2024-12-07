import React from "react";
import "./trackCard.css"

class TrackCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            img: "",
            artist: ""
        }
        this.handleGet = this.handleGet.bind(this);


    }

    componentDidMount(){
        const url = `https://deezerdevs-deezer.p.rapidapi.com/track/${this.props.trackid}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1683d62ab0msh32b82388bbf2e0ap1e8162jsn839af447016e',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        }
        fetch(url, options).then(data => data.json()).then(json => this.handleGet(json));

    }

    handleGet(json){
        this.setState({
            name: json.title,
            img: json.album.cover_big,
            artist: json.artist.name
        })
    }

    render(){
        return(<div className="trackCard-cont">
            <img src={this.state.img} className="trackCard-cont-img"></img>
            <p className="trackCard-cont-title">{this.state.name}</p>
            <a className="trackCard-cont-artist">{this.state.artist}</a>
        </div>)
    }
}

export default TrackCard