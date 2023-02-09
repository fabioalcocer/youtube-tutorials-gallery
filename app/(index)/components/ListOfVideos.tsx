/* eslint-disable @next/next/no-img-element */
type Props = {
  listOfVideos: string[];
};

function ListOfVideos({ listOfVideos }: Props) {
  return (
    <ul className="mt-12 grid grid-cols-videosContainer gap-3 pl-0">
      {listOfVideos.map((videoId) => (
        <li key={videoId} className="relative overflow-hidden rounded-md">
          <img
            className="w-full transition-transform duration-200 cursor-pointer hover:scale-125"
            src={`https://i3.ytimg.com/vi/${videoId}/sddefault.jpg`}
            alt="Cover image for YouTube video with id ${id}"
          />
          <button className="absolute top-1 right-1 grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-zinc-100/70  pt-[1px] text-2xl transition-colors duration-200 hover:bg-zinc-700/80 hover:text-zinc-100">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListOfVideos;
