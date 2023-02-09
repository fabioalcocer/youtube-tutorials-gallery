type Props = {
  modalVideoId: string;
  setOpenModal: (openModal: boolean) => any;
};

function VideoModal({ modalVideoId, setOpenModal }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex animate-fade items-center justify-center bg-black/70 p-10 text-4xl text-zinc-100 transition-all duration-300" onClick={() => setOpenModal(false)}>
      <iframe
        src={`https://www.youtube.com/embed/${modalVideoId}`}
        className='w-full h-auto max-w-3xl aspect-video bg-black'
        width="560"
        height="315"
        frame-border="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoModal;
