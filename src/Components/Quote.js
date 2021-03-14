import React from 'react';
import '../Quote.css';

const Quote = props => {

    // const [quote, setQuote] = useState('');
    // const [author, setAuthor] = useState('');

    // const getQuote = () => {
    //     let url = `https://drive.google.com/file/d/1VrxdwxoWPy0McCqGn9w8LlmW1sAY3-Gs/view?usp=sharing`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    
    // useEffect(() => {
    //     getQuote()
    // }, []);

    return (
      <>
        <div id="quote-box">
          <div id="text">
            <p>{props.quote}</p>
          </div>
          <div id="author"><p>{props.author}</p></div>
        </div>
      </>
    )
}

export default Quote;