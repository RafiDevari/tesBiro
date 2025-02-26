interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
    return (
      <div className="bg-green-800 inline-flex w-fit items-center ">
        <div>
          <img src="/images/bunga.svg" alt="Simple Image" className="md:w-10 md:h-10 w-8 h-8"  />
        </div>
        <div>
          <h1 className="mx-4 text-white font-medium md:text-xl font-sans tracking-wide">{title}</h1>
        </div>
      </div>
    );
  }