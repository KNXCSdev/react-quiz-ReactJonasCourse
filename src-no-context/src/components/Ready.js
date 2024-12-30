function Ready({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "ready" })}>
        Let`s start
      </button>
    </div>
  );
}

export default Ready;
