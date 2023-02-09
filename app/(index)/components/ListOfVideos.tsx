/* eslint-disable @next/next/no-img-element */
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  listOfVideos: string[];
  setListOfVideos: (listOfVideos: string[]) => any;
  setModalVideoId: (id: string) => any;
  setOpenModal: (openModal: boolean) => any;
};

function ListOfVideos({
  setListOfVideos,
  listOfVideos,
  setModalVideoId,
  setOpenModal,
}: Props) {
  const handleRemove = (id: string) => {
    const filteredListOfVideos = listOfVideos.filter(
      (videoId: any) => videoId !== id
    );
    setListOfVideos(filteredListOfVideos);
  };

  const handleClick = (id: string) => {
    setModalVideoId(id);
    setOpenModal(true);
  };

  return (
    <ul className="mt-12 grid grid-cols-videosContainer gap-3 pl-0">
      {listOfVideos.map((videoId) => (
        <li key={videoId} className="relative overflow-hidden rounded-md">
          <img
            className="w-full cursor-pointer transition-transform duration-200 hover:scale-125"
            src={`https://i3.ytimg.com/vi/${videoId}/sddefault.jpg`}
            alt="Cover image for YouTube video with id ${id}"
            onClick={() => handleClick(videoId)}
          />
          <button
            onClick={() => handleRemove(videoId)}
            className="absolute top-[6px] right-[6px] grid place-content-center h-7 w-7 cursor-pointer rounded-full bg-zinc-100/70 text-2xl transition-colors duration-200 hover:bg-zinc-700/80 hover:text-zinc-100"
          >
            <AiOutlineClose className="text-lg font-bold"/>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListOfVideos;
