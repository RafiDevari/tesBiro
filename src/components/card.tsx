interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
    return (
      <div className="bg-green-800 inline-flex w-fit items-center">
        <div>
          <img src="/images/bunga.svg" alt="Simple Image" width="40" height="40" />
        </div>
        <div>
          <h1 className="mx-4 text-white font-semibold text-xl font-sans">{title}</h1>
        </div>
      </div>
    );
  }