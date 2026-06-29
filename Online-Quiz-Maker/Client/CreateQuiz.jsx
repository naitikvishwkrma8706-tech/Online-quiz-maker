import { useState } from "react";
import axios from "axios";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", ""]);
  const [correct, setCorrect] = useState("");
  const [questions, setQuestions] = useState([]);

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addQuestion = () => {
    if (!question.trim()) {
      alert("Enter question");
      return;
    }

    setQuestions([
      ...questions,
      {
        question,
        options,
        correctAnswer: correct,
      },
    ]);

    setQuestion("");
    setOptions(["", "", ""]);
    setCorrect("");
  };

  const createQuiz = async () => {
    try {
      await axios.post("https://online-quiz-maker-7b66.vercel.app", {
        title,
        questions,
      });

      alert("Quiz Created");

      setTitle("");
      setQuestion("");
      setOptions(["", "", ""]);
      setCorrect("");
      setQuestions([]);
    } catch (err) {
      console.log(err);

      alert("Create Failed");
    }
  };

  return (
    <div
      style={{
        width: "92%",
        maxWidth: "650px",
        margin: "20px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "14px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        fontFamily: "Segoe UI",
        color: "#111",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Create Quiz
      </h1>

      <input
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <hr />

      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Option 1"
        value={options[0]}
        onChange={(e) => updateOption(0, e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Option 2"
        value={options[1]}
        onChange={(e) => updateOption(1, e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Option 3"
        value={options[2]}
        onChange={(e) => updateOption(2, e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Correct Answer"
        value={correct}
        onChange={(e) => setCorrect(e.target.value)}
        style={inputStyle}
      />

      <button onClick={addQuestion} style={greenBtn}>
        Add Question{" "}
      </button>

      <button onClick={createQuiz} style={blueBtn}>
        Create Quiz{" "}
      </button>

      <hr />

      <h3>Preview Questions</h3>

      {questions.length === 0 ? (
        <p>No questions added</p>
      ) : (
        questions.map((q, i) => (
          <div key={i} style={card}>
            <b>Q{i + 1}</b>

            <br />

            {q.question}
          </div>
        ))
      )}
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const greenBtn = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const blueBtn = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const card = {
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #eee",
  borderRadius: "8px",
  background: "#fafafa",
};

export default CreateQuiz;
