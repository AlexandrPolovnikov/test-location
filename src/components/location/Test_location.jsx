import React from "react";
import style from "./Test_location.module.css";

const test_location = (props) => {
  return (
    <div className={style.window}>
      <div className={style.test_local}>
        <div>
          <i class="fa-solid fa-vial"></i>
        </div>
        <div className={style.icon}>
          <h3>Тестовая локация {props.number}</h3>
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
        <div className={style.envira}>
          <p>
            Среда <i class="fa-brands fa-envira"></i>
          </p>
          <input></input>
        </div>
        <div className={style.server}>
          <p>
            Серверы <i class="fa-solid fa-server"></i>
          </p>
          <input></input>
        </div>
      </div>
      <div className={style.test_prompt}>
        <p>
          Подсказка <i class="fa-solid fa-question"></i>
        </p>
        <input></input>
      </div>
    </div>
  );
};

export default test_location;
