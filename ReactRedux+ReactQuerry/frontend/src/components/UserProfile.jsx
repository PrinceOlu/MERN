import { useQuery } from "@tanstack/react-query";
import { profileAPI } from "../services/userService";
import { useSelector } from "react-redux";

const UserProfile = () => {
  // get the token from store
  const userData = useSelector((state) => state?.auth?.user);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profileAPI(userData?.token),
    enabled: !!userData, // Ensure the query runs only if userData exists
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading profile</p>;
  }

  if (!data) {
    return null; // or some fallback UI
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-8 bg-gray-100 text-center">
        <div className="mb-4">
          <img
            className="rounded-full h-24 w-24 mx-auto border-2 border-gray-300"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {data.user.username}
        </h2>
        <p className="text-gray-700">{data.user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
