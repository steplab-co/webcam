"use strict";

const {
  h
} = require('preact');

module.exports = props => {
  return h("div", {
    className: "uppy-Webcam-permissons"
  }, h("div", {
    className: "uppy-Webcam-permissonsIcon"
  }, props.icon()), h("h1", {
    className: "uppy-Webcam-title"
  }, props.hasCamera ? props.i18n('allowAccessTitle') : props.i18n('noCameraTitle')), h("p", null, props.hasCamera ? props.i18n('allowAccessDescription') : props.i18n('noCameraDescription')));
};