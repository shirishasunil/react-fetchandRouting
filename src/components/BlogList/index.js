import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedBlogData = data.map(item => ({
      id: item.id,
      author: item.author,
      avatarUrl: item.avatar_url,
      imageUrl: item.image_url,
      title: item.title,
      topic: item.topic,
    }))
    this.setState({blogData: updatedBlogData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
        
       <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
        blogData.map(eachBlog => (
              <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
            )}
          </div>
          )
  }
}

export default BlogList
