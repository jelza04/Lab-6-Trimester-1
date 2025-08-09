export default function ErrorMessage({ message }) {
  return (
    <div className="text-center py-10 text-red-500 font-semibold">
      {message}
    </div>
  );
}
