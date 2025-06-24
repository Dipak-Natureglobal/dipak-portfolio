import { FaArrowLeft } from "react-icons/fa"
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center  dark:bg-primary  bg-gray-100 text-center my-24">
      <h1 className="text-9xl font-extralight text-outline  text-black/70 dark:text-white transition-all duration-500">
        404
      </h1>
      
      <h1 className="text-2xl font-bold dark:text-white mb-4 text-black/70">Page Not Found</h1>

      <Link href="/" >
        <button className="px-6 py-3 gap-3 flex flex-row items-baseline dark:bg-[#ADFF2F] bg-[#22c55e] text-black/70 font-extrabold rounded-lg dark:hover:bg-[#79ad29] hover:bg-[#2bb35d]">
          Go Back Home <FaArrowLeft className='my-3 text-[16px]  ctext-vblack/70 fill-current' />
        </button>
      </Link>
    </div>
  );
}
export default PageNotFound;