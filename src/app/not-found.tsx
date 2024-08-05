import { Navigation } from './_components/Header/Navigation/Navigation';

const NotFound = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center items-center text-black dark:text-white mt-10 sm:mt-20">
    <div className="flex items-center justify-center flex-col border-b-8 sm:border-r-8 sm:border-b-0 border-amber-300 px-10 h-44 w-full sm:w-auto">
      <h2 className="text-2xl font-black">Not Found</h2>
      <span className="text-xl font-black">404</span>
    </div>
    <div className="p-10">
      <h3 className="text-lg font-black text-center sm:text-left">
        {`The page you are looking for doesn't exist.`}
      </h3>
      <div className="flex flex-col gap-2 mt-5 text-center sm:text-left">
        <h4 className="text-xl font-black mb-3 sm:mb-0">Available pages:</h4>
        <Navigation />
      </div>
    </div>
  </div>
);

export default NotFound;
