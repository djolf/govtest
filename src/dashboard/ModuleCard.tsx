import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import userStore from "../util/userStore";

interface IProps {
  img: string;
  title: string;
  name: string;
}

const ModuleCard = (props: IProps) => {
  const { title, img, name } = props;
  return (
    <Card
      onClick={() => {
        if (userStore.hasPermission(name)) {
          window.location.href = process.env.PUBLIC_URL + "/" + name;
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
