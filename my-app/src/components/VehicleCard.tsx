import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import {
  IconBrandSpeedtest,
  IconGasStation,
  IconMapPin,
} from "@tabler/icons-react";

interface Location {
  Country: string;
  City: string;
  State: string;
}

interface VechicleCardProps {
  Brand: string;
  Model: string;
  Price: string;
  Images: string[];
  Mileage: string;
  Location: Location;
  FuelVariant: "diesel" | "gas";
}

/*
* ToDo:
*    - implement spring motion so we can animate stuff
*    - redesign details block, so it would copy autoria's block
*/



const VechicleCard: React.FC<VechicleCardProps> = ({
  Brand,
  Model,
  Price,
  Images,
  Mileage,
  Location,
  FuelVariant,
}) => {
  return (
    <div className="vehicle_card flex-auto h-full dark:bg-neutral-800 rounded-lg border dark:border-neutral-700 hover:dark:bg-neutral-700 hover:cursor-pointer group">
      <div className="vehicle_card__images">
        <div className="vehicle_card__images--carousel relative">
          <div className="absolute top-2 right-2 rounded-md w-fit h-auto p-2 bg-[#1971c2] font-semibold z-[10]">
            <div className="fuel_variant flex flex-row gap-2 items-center">
              <div className="fuel_icon">
                <IconGasStation className="w-4 h-4" />
              </div>
              <div className="fuel_type text-sm">{FuelVariant}</div>
            </div>
          </div>
          <Carousel withIndicators withControls={false} height="full">
            {Images.map((image, index) => (
              <Carousel.Slide key={index}>
                <Image
                  src={image}
                  alt={`Фотография ${index + 1}`}
                  fit="scale-down"
                  fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="vehicle_card__header p-4">
        <div className="vehicle__details flex flex-row gap-4 items-center justify-between">
          <div className="vehicle__details--brand">
            <div className="brand__name text-lg font-semibold">{Brand}</div>
            <div className="brand__model text-sm text-neutral-600 group-hover:text-neutral-500">
              {Model}
            </div>
          </div>
          <div className="vehicle__details--additional flex flex-row gap-10 items-center">
            <div className="location flex flex-col gap-1 items-end">
              <div className="location__state flex flex-row gap-1 items-center text-base">
                <IconMapPin className="w-4 h-4" /> {Location.State}
              </div>
              <div className="location__city text-sm text-neutral-500">
                {Location.City}
              </div>
            </div>
            <div className="milage__price flex flex-col gap-1 items-end">
              <div className="mileage flex flex-row gap-1 items-center text-sm text-neutral-500">
                <IconBrandSpeedtest className="w-4 h-4" />
                {Mileage.replace(/(.)(?=(\d{3})+$)/g, "$1,")} км
              </div>
              <div className="price text-base font-semibold">
                {Price.replace(/(.)(?=(\d{3})+$)/g, "$1,")} USD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VechicleCard;
