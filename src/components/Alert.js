export default function Alert() {
  return (
    <div>
      <div
        className="mt-24 fixed bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">Hello User</p>
        <p>You must be logged in to view/add contents.</p>
      </div>
    </div>
  );
}
