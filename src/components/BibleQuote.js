import React, {useEffect} from 'react';
import './biblequote.css';
import {quotes} from './quotes';
import {Button} from 'reactstrap';
import { connect } from 'react-redux';
import colors from './colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
const BibleQuote = ({index, changeIndex}) => {
    
    useEffect(()=>{
        const bodyElement= document.querySelector('body');
        bodyElement.style.backgroundColor=colors[index]
        const textElement= document.getElementById('text');
        const authorElement= document.getElementById('author');
        const buttonElement = document.querySelector('button');
        const twitterElement= document.getElementById('twitter-icon');
        textElement.style.backgroundColor=colors[index]
        authorElement.style.backgroundColor=colors[index]
        buttonElement.style.backgroundColor=colors[index]
        twitterElement.style.color=colors[index]
      })
    let onClick=()=>{
        changeIndex();
    }
    return(
        <div className="main">
            <div id="quote-box">
            {index}
                <div id='text'>
                    {quotes[index].quote}
                </div>
                <div id='author'>
                    {quotes[index].verse}
                </div>
                <div className="buttons">
                <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={['fab', 'twitter']} style={{backgroundColor:"white"}} id="twitter-icon"/></a>
                
                <Button onClick={onClick} id="new-quote" >
                    New quote
                </Button>
                </div>
 
            </div>
        </div>
    )
        
        
}
const mapStateToProps = state => ({
    index: state.quote.index
});
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      changeIndex: () => dispatch({ type: 'CHANGE_QUOTE',payload: Math.floor((Math.random() * 3)+1) }),
    
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(BibleQuote)