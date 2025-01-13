

import Image from 'next/image';
import loadingicon from "../../public/icons/loading-circle.svg"
const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src={loadingicon}
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
