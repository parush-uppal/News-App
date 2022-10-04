import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export default class News extends Component {

   

    
    static defaultProps = {
        
        category: 'sports'
      }

    constructor(){
        super();
        this.state={
            articles:[],
            heading:"General Headlines",
            loading:"false"
            
        }
    }

    async componentDidMount(){
         
         this.props.setProgress(10);
         let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
         this.setState({loading:true})
         let data = await fetch(url);
         this.props.setProgress(30);
         let parsedData = await data.json()
         this.props.setProgress(70);
         
        this.setState({ articles: parsedData.articles })
        this.setState({loading:false})
         this.props.setProgress(100);

    }
    
  render() {
   const  capt = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    
    return (
        <div className='container'>     
     
      <div className='container my-4'>


          <h2 className="text-center">News 24/7  -{capt(this.props.category)} Headlines</h2> 
          {this.state.loading&&<Spinner/>} 
          <div className="row my-3">
    {this.state.articles.map((element)=>{
    return <div className="col-md-4" >
    <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
    </div>
    })}
</div>

        
        </div>
      </div>
    )
  }
}
