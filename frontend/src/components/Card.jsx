import { builder } from "../api/SanityClient";
import { Link } from "react-router-dom";

export default function Card({ course }) {
  return (
    <div className="max-w-md border shadow-md border-gray-200 overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl m-4">
      <img
        className="w-full h-48 object-cover transition duration-500 hover:opacity-90"
        src={builder.image(course.image).width(300).height(200).url()}
        alt="Course"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">{course.description}</p>
      </div>
      <div className="px-6 py-4">
        <Link
          to={`/course/${course.slug.current}`}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}