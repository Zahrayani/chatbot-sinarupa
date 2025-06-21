const generateBotResponse = async (history) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: history }),
      }
    );

    const data = await response.json();

    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return "Maaf, Tompa belum memiliki jawaban untuk itu, tapi kamu bisa menghubungi instagram @sinarupa2025 untuk informasi lebih lanjut ya.";
    }
  } catch (error) {
    console.error("❌ Error saat menghubungi Gemini API:", error);
    return "Maaf, terjadi kesalahan saat menghubungi AI.";
  }
};

export default generateBotResponse;
