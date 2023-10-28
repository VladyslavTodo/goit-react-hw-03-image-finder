import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery';


class App extends Component {

  state = {
    value: '',
  }

  getSearchValue = (value) => {
    this.setState({ value });
  }

  render() {
    const {value} = this.state
   return (
     <div>
       <Searchbar onSubmit={this.getSearchValue} />
       <ImageGallery SearchValue={value} />
     </div>
   );
}
 
};


export default App;