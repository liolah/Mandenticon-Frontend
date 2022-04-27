import React, { useEffect, useState } from "react";
import "./mandala.css";
import Settings from "../../components/setting/Setting";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
// import hadeer from "../../assets/hadeer_1.png";

const Mandala = () => {
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);
  const [fname, setFname] = useState("");

  function apiHandler(e) {
    setImg(
      `http://localhost:4000/api/${fname}?width=${formik.values.width}&height=${
        formik.values.hight
      }&format=${formik.values.format}&greyScale=${
        formik.values.greyscale
      }&tint=${formik.values.tint.substring(1)}`
    );
    setShow(true);
    console.log(fname);
  }

  function onChangeHandler(e) {
    setFname(e.target.value);
  }

  const formik = useFormik({
    initialValues: {
      width: "500",
      hight: "500",
      format: "png",
      greyscale: false,
      tint: "#ffffff",
    },
    onSubmit: (values) => {
      setImg(
        `http://localhost:4000/api/${fname}?width=${
          formik.values.width
        }&height=${formik.values.hight}&format=${
          formik.values.format
        }&greyScale=${
          formik.values.greyscale
        }&tint=${formik.values.tint.substring(1)}`
      );
      setShow(true);
      console.log(fname);
    },
  });

  return (
    <div className="mandala__main section__padding" id="mandala">
      <div className="mandala__main-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> get creative
        </h1>
      </div>

      <div className="text">
        <h2 className="gradient__text">CANVAS</h2>
        <h2 className="gradient__text">SETTINGS</h2>
      </div>

      <div className="parent_container">
        <div className="canvas-cont">
          <div className="canvas">
            {show && <img src={img} alt="mandala" />}
            {!show && (
              <img src="http://localhost:4000/api" alt="Default-mandala" />
            )}
          </div>
          {/* <TextField className='canvas-cont__input' id="filled-basic" label="Name" variant="filled"  color='secondary'/> */}
          <input
            type="width"
            onKeyUp={apiHandler}
            onChange={onChangeHandler}
            value={fname}
            name="name"
            class="form__input1"
            id="name"
            placeholder="Name"
          />
          <label for="Same" class="form__label">
            Name
          </label>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="settings">
            <div class="form__group">
              <input
                type="width"
                onChange={formik.handleChange}
                value={formik.values.width}
                name="width"
                class="form__input"
                id="width"
                placeholder="width"
              />
              <label for="width" class="form__label">
                width
              </label>
            </div>

            <div class="form__group">
              <input
                type="hight"
                onChange={formik.handleChange}
                value={formik.values.hight}
                name="hight"
                class="form__input"
                id="hight"
                placeholder="hight"
              />
              <label for="hight" class="form__label">
                hight
              </label>
            </div>

            <div className="form__select">
              <select
                name="format"
                onChange={formik.handleChange}
                value={formik.values.format}
                class="form-select"
              >
                <option selected>raw</option>
                <option value="heic">heic</option>
                <option value="heif">heif</option>
                <option value="avif">avif</option>
                <option value="jpeg">jpeg</option>
                <option value="jpg">jpg</option>
                <option value="png">png</option>
                <option value="tiff">tiff</option>
                <option value="tif">tif</option>
                <option value="webp">webp</option>
                <option value="gif">gif</option>
                <option value="jp2">jp2</option>
                <option value="jpx">jpx</option>
                <option value="j2k">j2k</option>
                <option value="j2c">j2c</option>
              </select>
            </div>

            <div className="switch_container">
              <div className="switch_field">
                <label name="switch"> Greyscale Effect</label>

                <label class="radio">
                  <input
                    name="greyscale"
                    type="radio"
                    value="true"
                    className="radio"
                    onChange={formik.handleChange}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input
                    name="greyscale"
                    type="radio"
                    value="false"
                    className="radio"
                    onChange={formik.handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="color_container">
              <div className="color_field">
                <label for="exampleColorInput" class="form-label">
                  Color Tint
                </label>
                <input
                  type="color"
                  name="tint"
                  class="form-control form-control-color"
                  onChange={formik.handleChange}
                  value={formik.values.tint}
                  id="exampleColorInput"
                  title="Choose your color"
                ></input>
              </div>
            </div>
            <div className="btn_container">
              {" "}
              <button type="submit" className="button btn1">
                Submit
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mandala;
