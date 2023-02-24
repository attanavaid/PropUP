import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { PropUP, PropUP_logo } from "../../../assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={PropUP_logo} alt="PropUP_logo" width="28px"/>
        ) : (
          <img src={PropUP} alt="PropUP" width="140px"/>
        )}
      </Link>
    </Button>
  );
};
