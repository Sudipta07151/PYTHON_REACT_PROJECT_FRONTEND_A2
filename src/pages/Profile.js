import { useFetchMenuData } from "../hooks/useFetchMenusData";
import { useAuthContext } from "../hooks/useAuthContext";

import { useMLBlogsDataContext } from "../hooks/useMLBlogsDataContext";


export default function Profile() {
  const context = useAuthContext();

  const url = "http://127.0.0.1:8000/user/" + context.user.user_id + "/";
  const { data } = useFetchMenuData(url);

  const data_context=useMLBlogsDataContext();
  console.log(data_context);

  return (
      <div className="bg-white shadow overflow-hidden mt-36 sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
        </div>
        {data && (
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.username}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.email}
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
  );
}
