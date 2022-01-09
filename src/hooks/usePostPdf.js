import { useState } from "react";

import axiosInstance from "../functions/axios";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

import { toast } from "react-toastify";


export const usePostPdf = () => {

  const context = useAuthContext();
  const [isPending,setIsPending]=useState(false);

  const postPdf = async (data, file) => {
    setIsPending(true);
    try {
      console.log(data);
      const response = await axiosInstance.post("addpdf/", {
        data,
      });
      if (response) console.log("RESPONSE GOT IN usePostPdf Hook: ", response);
      console.log(response);
      const res = await axios.put(response.data.url, file);
      console.log("PUT RESPONES:", res);
      if (res.status == 200) {
        const options = {
          url: "http://127.0.0.1:8000/s3objecttodb/",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: localStorage.getItem("access_token")
              ? "JWT " + localStorage.getItem("access_token")
              : null,
          },
          data: {
            user: context.user.user_id,
            name: file.name,
            filename:response.data.key
          },
        };

        axios(options).then((response) => {
          console.log("SUCCESSFULLY SAVE FILE URL TO DB",response);
          setIsPending(false);
          toast("DONE UPLOADING", {
            autoClose: 1500,
          });
          // setTimeout(() => {
          //   navigate("/");
          // }, 2000);
        });
      } else {
        throw new Error("COULD NOT SAVE FILE");
      }
    } catch (err) {
      console.log(err);
      setIsPending(false);
      toast("ERROR! FILE NOT UPLOADED", {
        autoClose: 1500,
      });
    }
  };

  return {
    isPending,
    postPdf,
  };
};
