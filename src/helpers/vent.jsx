import React from "react";
import { EventEmitter } from "fbemitter";

var global = {
  Vent: null
}

global.VentInit = function() {
  var self = this;

  var emitter = new EventEmitter();

  self.Vent = emitter;
  return self.Vent;
};

export default global;
