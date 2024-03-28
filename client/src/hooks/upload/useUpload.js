import { useState } from "react";
import { request } from "../../utils/request";

export default function useUpload(resource, initialValue = null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (body = {}, callback) => {
    try {
      setLoading(true);
      const formData = new FormData();
      for (const key in body) {
        formData.append(key, body[key]);
      }
      const response = await request.post(`/${resource}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setError(null);
      callback && callback(response.data);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    create,
  };
}
