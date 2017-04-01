import React, { Component } from 'React';
import ContentItem from './ContentItem'
import contentData from '../data/contentData';

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      data: [],
      contentId: "Bedding"
    }
  }
  componentDidMount() {
    this.props.match.params.contentId === undefined
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
      return obj.category === this.state.contentId
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
