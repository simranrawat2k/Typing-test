import React, { useState } from "react";

const Typingbox = () => {
  const [time, setTime] = useState(15);
  let displayText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

    let keychar =0;
    return (
    <div className="typingbox">
      <div className="showTime">
        <div className="selectedTime">{time}s</div>
        <div className="timeOptions">
          <button onClick={() => setTime(15)}>15s</button>
          <button onClick={() => setTime(30)}>30s</button>
          <button onClick={() => setTime(60)}>60s</button>
        </div>
      </div>

      <div className="text">
        <p>
            {displayText.split("").map((char) => (<span key = {"char" + (keychar++)}>{char}</span>))}
        </p>
      </div>
    </div>
  );
};

export default Typingbox;
