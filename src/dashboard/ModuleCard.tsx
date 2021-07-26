import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import userStore from "../util/userStore";

interface IProps {
  img: string;
  title: string;
  name: string;
}

const ModuleCard = (props: IProps) => {
  const { title, img, name } = props;
  const history = useHistory();
  return (
    <Card
      onClick={() => {
        if (userStore.hasPermission(name)) {
          history.replace("/" + name);
        }
      }}
      className={userStore.hasPermission(name) ? "" : "disabled"}
    >
      <CardActionArea>
        <CardMedia image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;
