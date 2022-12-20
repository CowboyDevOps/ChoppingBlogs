import React, { useEffect, useState } from "react";
import { PostType } from "../lib/types";

// async function postImage(dataToSend: any) {
//   const response = await fetch("../../api/photos/postImage", {
//     method: "POST",
//     body: JSON.stringify(dataToSend),
//   });

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return await response.json();
// }

export type UploadImageType = {
  post: PostType;
};

const UploadImage = ({ post }: UploadImageType) => {
  const [user, setUser] = useState<string>();

  const [image, setImage] = useState({
    id: post.id,
    image: "initial",
  });

  const openWidget = async () => {
    // create the widget
    if (typeof window !== undefined) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dwbzf4ywk",
          uploadPreset: "ygua2mh2",
          sources: ["local", "url"],
        },
        (error: any, result: any) => {
          console.log(error);
          if (
            result?.event === "success" &&
            result?.info.resource_type === "image"
          ) {
            console.log(result?.info);
            setImage((prevstate) => {
              return {
                ...prevstate,
                image: result.info.url,
              };
            });
          }
        }
      );
      widget.open(); // open up the widget after creation
    } else {
      return null;
    }
  };

  const handleSubmit = async () => {
    try {
      //post image to db to assign to user
      //await postImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-96 flex flex-col">
      <button
        className="btn btn-primary"
        type="button"
        id="leftbutton"
        onClick={openWidget}
      >
        NEW PHOTO
      </button>
      {image.image === "initial" ? null : <img src={image.image} />}
      {image.image === "initial" ? null : (
        <button className="btn btn-primary" onClick={handleSubmit}>
          Upload
        </button>
      )}
    </main>
  );
};

export default UploadImage;
