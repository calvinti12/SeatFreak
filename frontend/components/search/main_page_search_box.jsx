import React from 'react';
import { search } from '../../actions/search_actions';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';

class MainPageSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
    this.props.search(this.state.query);
  }

  render() {
    return (
      <form className="search-form-main-page">
        <div className="search-box-container-main-page">
          <i className="fas fa-search fa-lg"></i>
          <DebounceInput
            minLength={2}
            debounceTimeout={500}
            onChange={this.handleChange} placeholder="Search by team, artist, event, or venue" />
          <input type="submit" value="Search"></input>
        </div>
      </form>
    );
  }
}

const mSP = state => {
  debugger
  return {
    results: state.ui.search
  }
}

const mDP = dispatch => {
  return {
    search: query => dispatch(search(query))
  };
};

export default connect(null, mDP)(MainPageSearchBox);
