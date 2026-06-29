import { useEffect, useState } from "react";

const TakeQuiz = ({ quiz }) => {
  const [quizData, setQuizData] = useState(null);

  const [current, setCurrent] = useState(0);

  const [selected, setSelected] = useState("");

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuizData(quiz);

    setCurrent(0);

    setSelected("");

    setScore(0);

    setFinished(false);
  }, [quiz]);

  if (!quizData) {
    return (
      <div
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  const question = quizData.questions[current];

  const handleNext = () => {
    if (selected === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setSelected("");

    if (current < quizData.questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div
      style={{
        width: "100%",

        maxWidth: "720px",

        margin: "40px auto",

        padding: "32px",

        background: "#fff",

        borderRadius: "22px",

        boxShadow: "0 15px 40px rgba(0,0,0,.08)",

        fontFamily: "Segoe UI",

        color: "#111",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: "10px",
        }}
      >
        <h2>{quizData.title}</h2>

        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "10px 14px",

            background: "#555",

            color: "white",

            border: "none",

            borderRadius: "10px",

            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>

      <hr
        style={{
          margin: "20px 0",
        }}
      />

      {finished ? (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            🎉 Congratulations!
          </h1>

          <h2>
            Your Score
            <br />
            {score}/{quizData.questions.length}
          </h2>

          <p
            style={{
              marginTop: "15px",
            }}
          >
            {score === quizData.questions.length
              ? "Perfect Score 🔥"
              : "Good Try 👍"}
          </p>

          <button
            onClick={() => {
              setCurrent(0);

              setSelected("");

              setScore(0);

              setFinished(false);
            }}
            style={{
              width: "100%",

              marginTop: "25px",

              padding: "16px",

              background: "green",

              color: "white",

              border: "none",

              borderRadius: "12px",

              fontSize: "18px",

              cursor: "pointer",
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <h3
            style={{
              fontSize: "28px",

              lineHeight: "1.4",

              marginBottom: "20px",
            }}
          >
            Q{current + 1}. {question.question}
          </h3>

          {question.options.map((opt, i) => (
            <label
              key={i}
              style={{
                display: "flex",

                alignItems: "center",

                justifyContent: "flex-start",

                padding: "18px",

                margin: "12px 0",

                border: "1px solid #ddd",

                borderRadius: "14px",

                background: selected === opt ? "#e8f0fe" : "#fff",

                fontSize: "18px",

                cursor: "pointer",

                gap: "10px",
              }}
            >
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selected === opt}
                onChange={(e) => setSelected(e.target.value)}
                style={{
                  margin: 0,
                  width: "18px",
                  height: "18px",
                  flexShrink: 0,
                }}
              />

              {opt}
            </label>
          ))}

          <button
            onClick={handleNext}
            disabled={!selected}
            style={{
              width: "100%",

              padding: "16px",

              marginTop: "20px",

              background: selected ? "#4CAF50" : "#ccc",

              color: "white",

              border: "none",

              borderRadius: "12px",

              fontSize: "18px",

              fontWeight: "600",

              cursor: selected ? "pointer" : "not-allowed",
            }}
          >
            {current === quizData.questions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};

export default TakeQuiz;
