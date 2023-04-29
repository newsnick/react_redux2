import './App.css';
import {connect} from "react-redux";

function App(props) {

  const a = 544565;

  return (
      <div className="App">
        <h1>{props.title}: {props.myCount}</h1>
        <p>{props.verOfApp}</p>
        <button onClick={props.plus}>Plus</button>
        <button onClick={props.minus}>Minus</button>
        <br/>
        <button onClick={props.reset}>Reset</button>
      </div>
  );
}

const mapStateToProps = (state) => ({
  myCount: state.count,
  verOfApp: state.version,
  title: state.title
})



const mapDispatchToProps = dispatch => ({
  addReview: reviewObject =>
      (dispatch({ type: "ADD_REVIEW", payload: reviewObject }))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
