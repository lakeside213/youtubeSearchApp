import _  from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyCeaiuIb0sxF-wdniCDshqY0mL4_2cJQGk';



class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('react native');
  }

    videoSearch(term){
      YTsearch({key: API_KEY, term: term },(videos)=> {
        this.setState({
          videos:videos,
          selectedVideo : videos[0]
        });
      })
    };


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return(
      <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
      </div>
    )

  };
}



ReactDOM.render(<App />,document.querySelector('#root'));
