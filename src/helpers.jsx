import React from "react";
import _ from "lodash";
import Vent from "./helpers/vent";

let global = {};

// Load helper plugins
_.extend(global, Vent);

export default global;
