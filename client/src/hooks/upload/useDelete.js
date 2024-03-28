import { useState } from "react";

const API_URL = 'http://localhost:5000';

const useDeleteImage = (resource, initialValue = null) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteImage = (filename, callback) => {
    try {
      const url = `${API_URL}/upload/images/name/${filename}`;
      setLoading(true);

      fetch(url, {
        method: 'DELETE',
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
          }
          return resp.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          callback && callback();
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      setError(new Error('Failed to delete image'));
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    deleteImage,
  };
};

export default useDeleteImage;
