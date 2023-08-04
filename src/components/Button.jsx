export default function Button({ label }) {
  return (
    <button className="bg-transparent tracking-wider font-semibold border text-[14px] text-center px-3 py-2 border-active text-active rounded-lg hover:bg-active hover:text-dark">
      {label}
    </button>
  );
}
