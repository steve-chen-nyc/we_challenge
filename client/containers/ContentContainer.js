import React, { Component } from 'react';
import ContentItem from '../components/ContentItem'
import contentData from '../data/contentData';

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state= {
      data: [],
      contentId: "bedding"
    }
  }
  componentDidMount() {
    this.props.match.params.contentId === undefined // bedding default data
    ? this.getContentData()
    : this.setState({
      contentId: this.props.match.params.contentId
    }, () =>  this.getContentData());
  }
  componentWillReceiveProps(newProps){
    this.setState({
      contentId: newProps.match.params.contentId
    }, () => this.getContentData());
  }
  getContentData() {
    var categoryObject = contentData.filter((obj) => {
      return obj.category.toLowerCase() === this.state.contentId.toLowerCase();
    });
    this.setState({
      data: categoryObject[0]
    })
  }
  render(){
    return (
      <ContentItem
        category={this.state.data.category}
        copy={this.state.data.copy}
        imageOne={this.state.data.imageOne}
        imageTwo={this.state.data.imageTwo}
        imageThree={this.state.data.imageThree}
        imageFour={this.state.data.imageFour}
      />
    )
  }
}

export default ContentContainer;
