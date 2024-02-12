import React from 'react';
import './App.css';
import { useState } from 'react';

const noPhrases = [
  "no",
  "are you sure?",
  "really sure?",
  "pookie please",
  "babe pls don't do this to me...",
  "my wittle wittle bwaby try again",
  "im gonna start crying",
  "you are breaking my heart </3",
  "last chance..."
]

const yesPhrases = [
  "yes",
  "hmm r u serious",
  "lol maybe u fr",
  "okok last one"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const yesButtonSize = noCount * 32 + 18;
  const [isYesButtonPressed, setIsYesButtonPressed] = useState(false);
  const [isNoButtonPressed, setIsNoButtonPressed] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top:50, left:50});

  const handleNoClick = () => setNoCount(noCount + 1);

  const handleYesClick = () => {
    setYesCount(yesCount + 1);
    // Generate random positions
    const newTop = Math.random() * (window.innerHeight - 50); // Adjust 50 for button size
    const newLeft = Math.random() * (window.innerWidth - 50); // Adjust 50 for button size
    setButtonPosition({ top: newTop, left: newLeft });
  }

  const getYesButtonText = () => yesPhrases[yesCount];

  const getNoButtonText = () => noPhrases[noCount % noPhrases.length];


  return (
    <div className="valentine-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
      }}>
      {
        yesCount === 4 ? (
          <> <img alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            style={{ width: '300px', objectFit: 'cover' }} />
            <div style={{ margin: 20, fontSize: '42px' }}>happy valentines day!</div>
            <div style={{
              marginLeft: 50,
              marginRight: 50,
              fontSize: '30px',
              textAlign: 'center',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontFamily: '"Times New Roman", Times, serif',
            }}> on a more serious note, i hope you understand how much joy you bring into my life.
              seeing your text messages everyday never fails to make me start my day off on a good note,
              and talking to you every night no matter how busy you are leaves me finding the best sleep.
              (as much as i hate saying this) i miss you very much and i cant wait to see you soon.
              <div style={{ margin: 20, fontSize: '12px' }}> p.s. you said this was your favorite font. 2/8/2024 11:26pm est. i have the timestamp loser. </div>
            </div>
            <div style={{ fontSize: '32px' }}>♡ thank you for being in my life ♡</div>
            <div style={{ fontSize: '20px', fontFamily: "sans-serif" }}>with love,</div>
            <div style={{ marginBottom: 10, fontSize: '20px', fontFamily: "sans-serif" }}>christina</div>
            <div style={{ fontSize: '32px' }}>⸜(｡˃ ᵕ ˂ )⸝ ❤︎₊ ⊹</div>
          </>
        ) : (
          <>
            <img alt="cat please"
              src="https://gifdb.com/images/high/cartoon-cat-love-bite-y0569ruhj5dnj224.webp"
              style={{ width: '500px', objectFit: 'cover' }} />
            <div style={{ margin: 20, fontSize: '32px' }}> will you be my valentine?</div>

            <div>
              <button className="yesButton"
                style={{
                  fontSize: `${yesButtonSize}px`,
                  backgroundColor: isYesButtonPressed ? '#2ca92c' : '#3ADC2B',
                  color: 'white',
                  marginRight: '10px',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transform: isYesButtonPressed ? 'translateY(4px)' : 'translateY(0px)',
                  boxShadow: isYesButtonPressed ? '2px 2px 2px rgba(0, 0, 0, 0.1)' : 'none',
                  position: yesCount > 0 ? 'absolute' : 'static', // Use absolute positioning
                  top: `${buttonPosition.top}px`, // Use state for position
                  left: `${buttonPosition.left}px`,
                }}
                onMouseDown={() => setIsYesButtonPressed(true)}
                onMouseUp={() => setIsYesButtonPressed(false)}
                onMouseLeave={() => setIsYesButtonPressed(false)}
                onClick={handleYesClick}> {getYesButtonText()} </button>

              <button className="noButton"
                style={{
                  fontSize: '18px',
                  backgroundColor: isNoButtonPressed ? '#cc0000' : 'red',
                  color: 'white',
                  marginLeft: '10px',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transform: isNoButtonPressed ? 'translateY(4px)' : 'translateY(0px)',
                  boxShadow: isNoButtonPressed ? '2px 2px 2px rgba(0, 0, 0, 0.1)' : 'none'
                }}
                onMouseDown={() => setIsNoButtonPressed(true)}
                onMouseUp={() => setIsNoButtonPressed(false)}
                onMouseLeave={() => setIsNoButtonPressed(false)}
                onClick={handleNoClick}> {getNoButtonText()} </button>
            </div>
          </>
        )
      }

    </div>
  );
}

export default App;
