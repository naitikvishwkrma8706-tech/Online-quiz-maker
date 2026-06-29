import { useState } from "react";

import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";

function App() {
  const [page, setPage] = useState("home");

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <div>
      {page !== "home" && (
        <div
          style={{
            padding: "20px",
          }}
        >
          <button
            onClick={() => {
              setPage("home");
              setSelectedQuiz(null);
            }}
          >
            ← Back Home
          </button>
        </div>
      )}

      {page === "home" && <Home setPage={setPage} />}

      {page === "create" && <CreateQuiz />}

      {page === "take" && !selectedQuiz && (
        <QuizList setPage={setPage} setSelectedQuiz={setSelectedQuiz} />
      )}

      {page === "take" && selectedQuiz && <TakeQuiz quiz={selectedQuiz} />}
    </div>
  );
}

export default App;
