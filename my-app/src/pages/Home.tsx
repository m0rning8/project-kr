import { Button, SegmentedControl, Select } from "@mantine/core";
import VehicleCard from "../components/VehicleCard";

const Home: React.FC = () => {
  return (
    <section className="main__section flex flex-col gap-6">
      <div className="filter_block w-full flex flex-col gap-4 dark:bg-neutral-800 rounded-lg p-4 border dark:border-neutral-700">
        <div className="filder_block__header">
          <SegmentedControl data={["Усі авто", "Нові авто", "Б/У авто"]} />
        </div>
        <div className="filter_block__body flex flex-col gap-4">
          <div className="filter_block__body_item">
            <Select
              label="Тип автомобіля"
              placeholder="Оберіть тип"
              data={["Легкові", "Грузові", "Мотоцикли"]}
            />
          </div>
          <div className="filter_block__body_item">
            <Select
              searchable
              label="Марка автомобіля"
              placeholder="На чому буде їздити?"
              data={["BMW", "Daewoo", "Audi"]}
            />
          </div>
          <div className="filter_block__body_item">
            <Select
              searchable
              label="Модель автомобіля"
              placeholder="Оберіть доступні моделі"
              data={["BMW", "Daewoo", "Audi"]}
            />
          </div>
          <div className="filter_block__body_item">
            <Select
              searchable
              label="Регіон"
              placeholder="В якому місті шукаємо?"
              data={[
                "Житомирська область",
                "Київська область",
                "ЛЬвівська область",
              ]}
            />
          </div>
          <div className="filter_block__body_item flex flex-row gap-4">
            <Select
              searchable
              label="Рік випуску"
              placeholder="Новішу чи старішу?"
              data={["2024", "2023", "2022"]}
              className="w-full flex-auto"
            />
            <Select
              label="Марка автомобіля"
              placeholder="Ціна в"
              data={["Долари США", "Українська гривня", "Євро"]}
              className="w-full flex-auto"
            />
          </div>
        </div>
        <div className="filter_block__footer flex flex-row gap-4 justify-between">
          <Button fullWidth>Знайти мрію</Button>
          <Button fullWidth variant="light">
            Розширений пошук
          </Button>
        </div>
      </div>
      <div className="search_results">
        <div className="search_results__header py-2 text-lg font-semibold">
            Новинки
        </div>
        <div className="search_results__body grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <VehicleCard
                Brand="BNW"
                Model="M3 E46"
                Mileage="5455"
                Price="30000"
                Location={{
                  City: "Kyiv",
                  State: "Kyivska obl.",
                  Country: "Ukraine",
                }}
                FuelVariant="diesel"
                Images={[
                    "https://www.bmw.com/content/dam/bmw/common/topics/fascination-bmw/bmw-m-individual/bmw-m-individual-relaunch-gallery-heritage-wallpaper-07.jpg.asset.1679903183082.jpg"
                ]}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
