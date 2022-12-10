import React from "react";
import style from "./Test_location.module.css";

const test_location = (props) => {
  return (
    <div className={style.window}>
      <div className={style.test_local}>
        <div className={style.icon}>
          <i class="fa-solid fa-vial"></i>
        </div>
        <div>
          <h3>
            Тестовая локация {props.number} {props.id}
          </h3>
        </div>
        <div>
          <i
            className={style.trash}
            class="fa-regular fa-trash-can"
            onClick={() => props.remove(props.post)}
          ></i>
        </div>
      </div>
      <div className={style.test_info}>
        <div className={style.local}>
          <p>
            Локация <i class="fa-solid fa-location-dot"></i>
          </p>
          <input></input>
        </div>
        <div className={style.enviro}>
          <p>Среда</p>
          <input></input>
        </div>
        <div className={style.server}>
          <p>Серверы</p>
          <input></input>
        </div>
      </div>
      <div className={style.test_prompt}>
        <p>Подсказка</p>
        <input></input>
      </div>
    </div>
  );
};

export default test_location;
