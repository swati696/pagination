import React from "react";


class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }
  render() {
console.log(this.props);
    return (
      <ul className="pagination">
        <li>
          <span>First</span>
        </li>
        <li>
          <span>Previous</span>
        </li>
          <li>
            <span>1</span>
          </li>
        <li>
          <span >Next</span>
        </li>
        <li>
          <span>Last</span>
        </li>
      </ul>
    );
  }
}

export default Pagination;
 