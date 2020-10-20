import React from "react";

import { Checkbox } from "@material-ui/core";

const TagToggle = (props) => {
  return (
    <React.Fragment>
      <Checkbox
        checked={props.onTagCheck(props.tag)}
        onChange={(e) => props.onTagChange(e, props.tag)}
      />
      {props.tag}
    </React.Fragment>
  );
};

export default TagToggle;
