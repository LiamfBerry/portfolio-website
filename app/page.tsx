import Image from "next/image";

const icons = ["/icon1", "/icon2", "/icon3", "/icon4"]

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="pt-32">
        <p>MECHATRONICS AND BIOMEDICAL ENGINEERING STUDENT</p>
        <div className="text-4xl">SLOGAN HERE</div>
        <p>Description about me</p>
        <div className="m-4">
          <button className="pr-4">
            View My Work
          </button>
          <button>
            Learn More
          </button>
        </div>
        <div className="flex flex-row">
          {icons.map((icon) => (
            <Image key={icon} src={icon} alt={icon} width={50} height={50} className="m-8"/>
          ))}
        </div>
      </div>
      <div className="text-4xl">
          Photo and Graphics Here
      </div>
    </div>
  );
}
