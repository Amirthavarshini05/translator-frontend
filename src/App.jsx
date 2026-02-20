/*
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("ta");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE =
    "https://9d1yi8itd1.execute-api.ap-south-1.amazonaws.com/prodx";

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch(`${API_BASE}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "123",
          sourceLanguage,
          targetLanguage,
          text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setTranslatedText(data.translatedText);
    } catch (error) {
      alert("Error: " + error.message);
    }

    setLoading(false);
  };

  const handleSwap = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setText(translatedText);
    setTranslatedText(text);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>🌍 AI Translator</h1>

        <div style={styles.languageRow}>
          <select
            style={styles.select}
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ta">Tamil</option>
            <option value="es">Spanish</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="zh">Chinese</option>
            <option value="ar">Arabic</option>
            <option value="bn">Bengali</option>
            <option value="ur">Urdu</option>
            <option value="tr">Turkish</option>
            <option value="nl">Dutch</option>
            <option value="sv">Swedish</option>
            <option value="pl">Polish</option>
            <option value="th">Thai</option>
            <option value="vi">Vietnamese</option>
            <option value="id">Indonesian</option>
            <option value="fa">Persian</option>
            <option value="he">Hebrew</option>
            <option value="el">Greek</option>
            <option value="uk">Ukrainian</option>
            <option value="ro">Romanian</option>
            <option value="cs">Czech</option>
            <option value="da">D Danish</option>
            <option value="fi">Finnish</option>
            <option value="no">Norwegian</option>
            <option value="hu">Hungarian</option>
            <option value="ms">Malay</option>
            <option value="te">Telugu</option>
            <option value="ml">Malayalam</option>
            <option value="kn">Kannada</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
            <option value="pa">Punjabi</option>
            <option value="si">Sinhala</option>
            <option value="sw">Swahili</option>
            <option value="am">Amharic</option>
            <option value="fil">Filipino</option>
          </select>

          <button style={styles.swapButton} onClick={handleSwap}>
            ⇄
          </button>

          <select
            style={styles.select}
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="en">English</option>
<option value="ta">Tamil</option>
<option value="es">Spanish</option>
<option value="hi">Hindi</option>
<option value="fr">French</option>
<option value="de">German</option>
<option value="it">Italian</option>
<option value="pt">Portuguese</option>
<option value="ru">Russian</option>
<option value="ja">Japanese</option>
<option value="ko">Korean</option>
<option value="zh">Chinese</option>
<option value="ar">Arabic</option>
<option value="bn">Bengali</option>
<option value="ur">Urdu</option>
<option value="tr">Turkish</option>
<option value="nl">Dutch</option>
<option value="sv">Swedish</option>
<option value="pl">Polish</option>
<option value="th">Thai</option>
<option value="vi">Vietnamese</option>
<option value="id">Indonesian</option>
<option value="fa">Persian</option>
<option value="he">Hebrew</option>
<option value="el">Greek</option>
<option value="uk">Ukrainian</option>
<option value="ro">Romanian</option>
<option value="cs">Czech</option>
<option value="da">D Danish</option>
<option value="fi">Finnish</option>
<option value="no">Norwegian</option>
<option value="hu">Hungarian</option>
<option value="ms">Malay</option>
<option value="te">Telugu</option>
<option value="ml">Malayalam</option>
<option value="kn">Kannada</option>
<option value="mr">Marathi</option>
<option value="gu">Gujarati</option>
<option value="pa">Punjabi</option>
<option value="si">Sinhala</option>
<option value="sw">Swahili</option>
<option value="am">Amharic</option>
<option value="fil">Filipino</option>
          </select>
        </div>

        <div style={styles.splitArea}>
          <textarea
            style={styles.textarea}
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div style={styles.outputArea}>
            {loading
              ? "Translating..."
              : translatedText || "Translation will appear here..."}
          </div>
        </div>

        <button
          style={styles.translateButton}
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate 🚀"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
  },

  container: {
    width: "95%",
    height: "90%",
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "32px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    color: "#222",
  },

  languageRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    marginBottom: "40px",
  },

  select: {
    padding: "12px 20px",
    borderRadius: "14px",
    border: "1px solid #e0e0e0",
    fontSize: "15px",
    background: "#f9f9ff",
    cursor: "pointer",
    outline: "none",
  },

  swapButton: {
    padding: "12px 16px",
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },

  splitArea: {
    flex: 1,
    display: "flex",
    gap: "40px",
    marginBottom: "35px",
  },

  textarea: {
    flex: 1,
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid #e6e6e6",
    fontSize: "16px",
    resize: "none",
    outline: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    background: "#ffffff",
  },

  outputArea: {
    flex: 1,
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid #e6e6e6",
    backgroundColor: "#f4f6ff",
    fontSize: "16px",
    overflowY: "auto",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },

  translateButton: {
    padding: "18px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
};

export default App;*//*

import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("ta");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE = "https://9d1yi8itd1.execute-api.ap-south-1.amazonaws.com/prodx";

  const API_KEY = "JAd7QAr9Fq7j402D2iu1u9tZtv02KraeKCnFroQ7"; // 🔐 Put your API key here

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch(`${API_BASE}/translate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          userId: "123",
          sourceLanguage,
          targetLanguage,
          text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Something went wrong");
      }

      setTranslatedText(data.translatedText);
    } catch (error) {
      alert("Error: " + error.message);
    }

    setLoading(false);
  };

  const handleSwap = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setText(translatedText);
    setTranslatedText(text);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>AI Translator</h1>

        <div style={styles.languageRow}>
          <select
            style={styles.select}
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            {languageOptions}
          </select>

          <button style={styles.swapButton} onClick={handleSwap}>
            ⇄
          </button>

          <select
            style={styles.select}
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {languageOptions}
          </select>
        </div>

        <div style={styles.splitArea}>
          <textarea
            style={styles.textarea}
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div style={styles.outputArea}>
            {loading
              ? "Translating..."
              : translatedText || "Translation will appear here..."}
          </div>
        </div>

        <button
          style={styles.translateButton}
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate 🚀"}
        </button>
      </div>
    </div>
  );
}

const languageOptions = (
  <>
    <option value="en">English</option>
    <option value="ta">Tamil</option>
    <option value="es">Spanish</option>
    <option value="hi">Hindi</option>
    <option value="fr">French</option>
    <option value="de">German</option>
    <option value="it">Italian</option>
    <option value="pt">Portuguese</option>
    <option value="ru">Russian</option>
    <option value="ja">Japanese</option>
    <option value="ko">Korean</option>
    <option value="zh">Chinese</option>
    <option value="ar">Arabic</option>
    <option value="bn">Bengali</option>
    <option value="ur">Urdu</option>
    <option value="tr">Turkish</option>
    <option value="nl">Dutch</option>
    <option value="sv">Swedish</option>
    <option value="pl">Polish</option>
    <option value="th">Thai</option>
    <option value="vi">Vietnamese</option>
    <option value="id">Indonesian</option>
    <option value="fa">Persian</option>
    <option value="he">Hebrew</option>
    <option value="el">Greek</option>
    <option value="uk">Ukrainian</option>
    <option value="ro">Romanian</option>
    <option value="cs">Czech</option>
    <option value="da">Danish</option>
    <option value="fi">Finnish</option>
    <option value="no">Norwegian</option>
    <option value="hu">Hungarian</option>
    <option value="ms">Malay</option>
    <option value="te">Telugu</option>
    <option value="ml">Malayalam</option>
    <option value="kn">Kannada</option>
    <option value="mr">Marathi</option>
    <option value="gu">Gujarati</option>
    <option value="pa">Punjabi</option>
    <option value="si">Sinhala</option>
    <option value="sw">Swahili</option>
    <option value="am">Amharic</option>
    <option value="fil">Filipino</option>
  </>
);

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
  },

  container: {
    width: "95%",
    height: "90%",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "24px",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "32px",
    fontWeight: "700",
    color: "#222",
  },

  languageRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    marginBottom: "40px",
  },

  select: {
    padding: "12px 20px",
    borderRadius: "14px",
    border: "1px solid #e0e0e0",
    fontSize: "15px",
    background: "#f9f9ff",
    cursor: "pointer",
  },

  swapButton: {
    padding: "12px 16px",
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },

  splitArea: {
    flex: 1,
    display: "flex",
    gap: "40px",
    marginBottom: "35px",
  },

  textarea: {
    flex: 1,
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid #e6e6e6",
    fontSize: "16px",
    resize: "none",
  },

  outputArea: {
    flex: 1,
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid #e6e6e6",
    backgroundColor: "#f4f6ff",
    fontSize: "16px",
    overflowY: "auto",
  },

  translateButton: {
    padding: "18px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default App;*/
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("ta");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const API_BASE =
    "https://9d1yi8itd1.execute-api.ap-south-1.amazonaws.com/prodx";

  const API_KEY = "YOUR_API_KEY_HERE";

  // 🔹 Translate
  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch(`${API_BASE}/translate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          userId: "123",
          sourceLanguage,
          targetLanguage,
          text,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || data.error);

      setTranslatedText(data.translatedText);
    } catch (error) {
      alert("Error: " + error.message);
    }

    setLoading(false);
  };

  // 🔹 Fetch History
  const fetchHistory = async () => {
    try {
      const response = await fetch(`${API_BASE}/history`, {
        method: "GET",
        headers: {
          "x-api-key": API_KEY,
        },
      });

      const data = await response.json();
      setHistory(data.reverse());
      setShowHistory(true);
    } catch (error) {
      alert("Failed to load history");
    }
  };

  const handleSwap = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setText(translatedText);
    setTranslatedText(text);
  };

  const languageLabel = (code) => {
    const map = {
      en: "English",
      ta: "Tamil",
      es: "Spanish",
      hi: "Hindi",
      fr: "French",
      de: "German",
    };
    return map[code] || code;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>AI Translator</h1>

        {/* Language Select */}
        <div style={styles.languageRow}>
          <select
            style={styles.select}
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            {languageOptions}
          </select>

          <button style={styles.swapButton} onClick={handleSwap}>
            ⇄
          </button>

          <select
            style={styles.select}
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {languageOptions}
          </select>
        </div>

        {/* Input / Output */}
        <div style={styles.splitArea}>
          <textarea
            style={styles.textarea}
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div style={styles.outputArea}>
            {loading
              ? "Translating..."
              : translatedText || "Translation will appear here..."}
          </div>
        </div>

        {/* Buttons */}
        <button
          style={styles.translateButton}
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate 🚀"}
        </button>

        <button style={styles.historyButton} onClick={fetchHistory}>
          View History 📜
        </button>

        {/* History Table */}
        {showHistory && (
  <div style={styles.historyContainer}>
    <div style={styles.historyHeader}>
      <h2>Translation History</h2>
      <button
        style={styles.closeButton}
        onClick={() => setShowHistory(false)}
      >
        ✖
      </button>
    </div>

    {history.length === 0 ? (
      <p>No translations yet.</p>
    ) : (
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Original</th>
            <th style={styles.th}>Translated</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.translationId}>
              <td style={styles.td}>
                <strong>{item.sourceLanguage?.toUpperCase()}</strong> → {item.text}
              </td>
              <td style={styles.td}>
                <strong>{item.targetLanguage?.toUpperCase()}</strong> → {item.translatedText}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}
      </div>
    </div>
  );
}

const languageOptions = (
  <>
    <option value="en">English</option>
    <option value="ta">Tamil</option>
    <option value="es">Spanish</option>
    <option value="hi">Hindi</option>
    <option value="fr">French</option>
    <option value="de">German</option>
  </>
);

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  container: {
    width: "100%",
    maxWidth: "1100px",
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  languageRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
  },
  swapButton: {
    padding: "10px",
    borderRadius: "50%",
    border: "none",
    background: "#667eea",
    color: "white",
    cursor: "pointer",
  },
  splitArea: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  textarea: {
    flex: 1,
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  outputArea: {
    flex: 1,
    padding: "15px",
    borderRadius: "10px",
    background: "#f3f4ff",
  },
  translateButton: {
    width: "100%",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#667eea",
    color: "white",
    cursor: "pointer",
  },
  historyButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#444",
    color: "white",
    cursor: "pointer",
  },
  historyContainer: {
  marginTop: "40px",
  background: "#ffffff",
  padding: "30px",
  borderRadius: "15px",
  width: "100%",
  overflowX: "auto",
},

historyHeader: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
},

closeButton: {
  border: "none",
  background: "red",
  color: "white",
  borderRadius: "50%",
  width: "35px",
  height: "35px",
  cursor: "pointer",
  fontSize: "16px",
},

table: {
  width: "100%",
  borderCollapse: "collapse",
},

th: {
  borderBottom: "2px solid #ddd",
  padding: "15px",
  textAlign: "left",
  background: "#f3f4ff",
},

td: {
  padding: "15px",
  borderBottom: "1px solid #eee",
  verticalAlign: "top",
},
};

export default App;