import Link from 'next/link';

const NotFound = () => (
  <div className="flex flex-col justify-center items-center h-full">
    <h2>Not Found</h2>
    <p>Could not find requested resource</p>
    <Link href="/">Return Home</Link>
  </div>
);

export default NotFound;
