import "./style.css";

import { Component } from "react";

import { loadPosts } from "../../utils/load-post";
import { Posts } from "../../Components/Posts";
import { Button } from "../../Components/Button";
import { TextInput } from "../../Components/TextInput";
class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage:10,
    searchValue: '',

  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { posts, allPosts, postsPerPage , page } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage})
  };

  handleChange = (e) => {
  
    const {value} = e.target;

    this.setState({searchValue: value});
  }
  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPost = !!searchValue ? 
              posts.filter((post) => {
                return post.title.toLowerCase().includes(
                  searchValue.toLowerCase()
                  );
              }) : posts;
    
    
    return (
      <div className="container">
        <div className="search-container">
         {!!searchValue && (
          <h1>Search Value: {searchValue}</h1>
         )}

    <TextInput searchValue={searchValue} handleChange={this.handleChange} />
    </div>     
        {filteredPost.length > 0 && (
          <Posts posts={filteredPost} />
        )}

        {filteredPost.length === 0  && <p>Não existem mais posts</p>}
        
        <div className="button-container">
        {!searchValue && (
          <Button disabled={noMorePosts} onClick={this.loadMorePosts} text="Carregar Posts" />
        )}
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
