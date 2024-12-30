import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question}></Options>
    </div>
  );
}

export default Question;
