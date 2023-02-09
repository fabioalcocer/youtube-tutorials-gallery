"use client";
import { FormEvent, ChangeEvent, useState } from "react";

type Props = {
  setListOfVideos: ([]) => any;
  listOfVideos: string[];
};

function Form({ setListOfVideos, listOfVideos }: Props) {
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (listOfVideos.some((id) => id === videoId)) {
      setError(true);
      return;
    }

    setListOfVideos([...listOfVideos, videoId]);
    setError(false);
    setVideoId("");
  };

  const handleChangeVideoId = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoId(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="videoId"
        className="mb-2 block text-2xl font-medium leading-8 text-teal-400"
      >
        Video ID
      </label>
      <input
        className="w-full rounded-md py-5 px-4 text-xl"
        type="text"
        name="videoId"
        id="videoId"
        onChange={handleChangeVideoId}
        value={videoId}
        placeholder="HSA345J9J"
      />
      {error && (
        <p className="text-base font-medium leading-8 text-red-400">
          ID invalid or already exists
        </p>
      )}
      <button
        type="submit"
        className="mt-2 w-full cursor-pointer rounded-md bg-teal-500 p-5 text-lg font-bold text-gray-200 transition-colors duration-300 hover:bg-teal-400"
      >
        Save the Video
      </button>
    </form>
  );
}

export default Form;
