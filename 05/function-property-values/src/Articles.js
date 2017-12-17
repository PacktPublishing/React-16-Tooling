// @flow
import React, { Component } from 'react';
import Article from './Article';

type Props = {};
type State = {
  summary: string,
  selected: number | null,
  articles: Array<{ title: string, summary: string}>
};

class Articles extends Component<Props, State> {
  state = {
    summary: '',
    selected: null,
    articles: [
      { title: 'First Title', summary: 'First article summary' },
      { title: 'Second Title', summary: 'Second article summary' },
      { title: 'Third Title', summary: 'Third article summary' }
    ]
  }

  onClick = (selected: number) => () => {
    this.setState(prevState => ({
      selected,
      summary: prevState.articles[selected].summary
    }));
  }

  render() {
    const {
      summary,
      selected,
      articles
    } = this.state;

    return (
      <div>
        <strong>{summary}</strong>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <Article
                index={index}
                title={article.title}
                selected={selected === index}
                onClick={this.onClick}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
