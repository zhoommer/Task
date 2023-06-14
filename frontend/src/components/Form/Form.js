import React from "react";
import "./Form.css";

const Form = () => {

  const closeDiv = () => {
    let div = document.querySelector('.main-right')
    div.style.display = "none";
  }
  return (
    <div className="form">
      <div>
        <span onClick={closeDiv}>x</span>
      </div>
      <div>
        <label>Sosyal Medya Linki</label>
        <input type="text" />
      </div>

      <div>
        <label>Sosyal Medya Adı</label>
        <input type="text" />
      </div>
      <div>
        <label>Açıklama</label>
        <input type="text" />
      </div>

      <div>
        <input type="button" value="Vazgeç" />
        <input type="button" value="Kaydet" />
      </div>
    </div>
  );
};

export default Form;