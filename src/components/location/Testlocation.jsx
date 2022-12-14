import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Testlocation.module.css";
import data from "../../data.json";

const Testlocation = (props) => {
  console.log(data.locations.name);
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
          <select>
            <option>locations</option>
          </select>
        </div>
        <div className={style.envira}>
          <p>
            Среда <i class="fa-brands fa-envira"></i>
          </p>
          <select>
            <option>envs</option>
          </select>
        </div>
        <div className={style.server}>
          <p>
            Серверы <i class="fa-solid fa-server"></i>
          </p>
          <select>
            <option> servers</option>
          </select>
        </div>
      </div>
      <div className={style.test_prompt}>
        <p>
          Подсказка <i class="fa-solid fa-question"></i>
        </p>
        <input type="text" placeholder="Комментарий по локации" />
      </div>
    </div>
  );
};

export default Testlocation;
