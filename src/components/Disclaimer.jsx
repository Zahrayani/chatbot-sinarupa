import React from "react";
import "../styles/disclaimer.css";

const Disclaimer = ({ onContinue }) => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-box">
        <h1 className="disclaimer-title">DISCLAIMER</h1>
        <p className="disclaimer-intro">
          Hai, aku Tompa!<br />
          Selamat datang dan makasih sudah ngobrol sama aku~<br />
          Sebelum kita lanjut, ada beberapa hal penting yang perlu kamu tahu, ya!
        </p>
        <div className="disclaimer-list">
          <ol>
            <li>
              Aku bukan manusia, tapi aku berusaha bantu sebisa mungkin!
            </li>
            <li>
              Aku adalah chatbot untuk bantu jawab pertanyaan kamu soal acara ini. Tapi kadang-kadang jawabanku bisa aja kurang tepat. Kalau ragu, tanya ke panitia ya!
            </li>
            <li>Jangan terlalu serius sama semua jawabanku.</li>
            <li>
              Aku belajar dari banyak data, tapi aku bukan sumber kebenaran mutlak. Info penting atau sensitif? Konfirmasi ke panitia juga!
            </li>
            <li>Privasi kamu aman kok!</li>
            <li>
              Aku nggak simpan data pribadi kamu. Obrolan ini cuma buat bantu kamu selama acara aja.
            </li>
            <li>Gunakan aku dengan bijak.</li>
            <li>
              Jangan ngobrol hal-hal yang nggak pantas, nyesatin, atau aneh-aneh. Yuk jaga suasana tetap seru!
            </li>
            <li>Aku siap nemenin kamu!</li>
            <li>
              Kalau kamu butuh bantuan dari manusia, aku bakal kasih info ke mana kamu bisa pergi.
            </li>
          </ol>
        </div>
        <button className="disclaimer-button" onClick={onContinue}>
          Aku setuju & lanjut ngobrol!
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
