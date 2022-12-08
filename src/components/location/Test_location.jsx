import React from "react";
import style from "./Test_location.module.css";

const test_location = () => {
  return (
    <div className={style.window}>
      <div className={style.test_local}>
        <div>
          <h3>Тестовая локация</h3>
        </div>
        <div>
          <p>Удалить</p>
        </div>
      </div>
      <div className={style.test_info}>
        <div className={style.local}>
          <p>локация</p>
        </div>
        <div className={style.sreda}>
          <p>среда</p>
        </div>
        <div className={style.server}>
          <p>серверы</p>
        </div>
      </div>
      <div className={style.test_prompt}>
        <h3>Подсказка</h3>
        <input />
      </div>
    </div>
  );
};

export default test_location;
