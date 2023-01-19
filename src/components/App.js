import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "./Notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((noteItems) => (
        <Note
          key={noteItems.key}
          title={noteItems.title}
          content={noteItems.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
