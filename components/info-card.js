export default function InfoCard({ title, desc }) {
  return (
    <div className="text-white sm:w-2/6 w-full flex flex-col p-8 gap-2 items-center text-justify bg-transparent backdrop-blur-md rounded-md">
      <h1 className="font-andadaPro text-redbase text-2xl font-bold text-center h-16 flex items-center">
        {title}
      </h1>
      <p>{desc}</p>
    </div>
  );
}
