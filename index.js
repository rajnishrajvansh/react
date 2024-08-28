const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    // Add more quotes as needed
];

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: this.getRandomQuote()
        };
        this.getNewQuote = this.getNewQuote.bind(this);
    }

    getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    getNewQuote() {
        this.setState({
            currentQuote: this.getRandomQuote()
        });
    }

    render() {
        const { text, author } = this.state.currentQuote;
        const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(text)}" - ${encodeURIComponent(author)}`;

        return (
            <div id="quote-box" className="card text-center p-4">
                <div id="text" className="card-body">
                    <p className="card-text">"{text}"</p>
                    <p id="author" className="card-footer text-muted">- {author}</p>
                </div>
                <button id="new-quote" className="btn btn-primary" onClick={this.getNewQuote}>
                    New Quote
                </button>
                <a
                    id="tweet-quote"
                    className="btn btn-info ml-3"
                    href={tweetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tweet Quote
                </a>
            </div>
        );
    }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
