
const ComingSoonCard = () => {
  return (
    <div className=" text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center  grow">
      <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
      <p className="text-gray-400 mb-4 text-center">
        We’re working on something amazing. Stay tuned!
      </p>
      <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
        Notify Me
      </button>
    </div>
  );
};

export default ComingSoonCard;
