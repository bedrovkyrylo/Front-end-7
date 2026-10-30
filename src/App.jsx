import Header from "./components/Header";
import Content from "./components/Content";
import GoodsCard from "./components/GoodsCard";
import "./App.css";

const hobbies = ["Підземелля та Дракони", "В'язання гачком", "Кімнатні рослини"];

const films = [
  `"Імла" 2007`,
  `"Проєкт "Аве Марія"" 2026`,
  `"Мандрівний замок" 2004`,
];

const education = `Освіта: 1-6 клас Гімназія "Домінанта", 7-11 клас Дніпровський технічний ліцей м. Києва, НТУУ "КПІ" м. Києва.`;

const about = `Львів — місто на заході України, адміністративний центр Львівської області, Львівського району, Львівської міської громади, національно-культурний та освітньо-науковий осередок країни. Великий промисловий центр і транспортний вузол, вважається сучасною столицею Галичини та найбільшим містом на заході країни.`;

const base = import.meta.env.BASE_URL;

const goods = [
  { id: 1, name: "Діффенбахія", price: 650, photo: base + "dieffenbachia-houseplant.jpg" },
  { id: 2, name: "Гойя",        price: 480, photo: base + "hoya-wax-plant.jpg" },
  { id: 3, name: "Філодендрон", price: 520, photo: base + "Philodendron.jpg" },
  { id: 4, name: "Аглонема",    price: 590, photo: base + "potted-aglaonema-silver-bay.jpg" },
  { id: 5, name: "Сингоніум",   price: 350, photo: base + "syngonium-podophyllum.jpg" },
  { id: 6, name: "Замія (ZZ)",  price: 750, photo: base + "zz-plant.jpg" },
];

function App() {
  return (
    <div>

      <Header name="Бедров Кирило Андрійович" />
      <Content
        birth="Народився: 10.05.2007 у Києві."
        education={education}
        hobbies={hobbies}
        films={films}
        about={about}
      />

      <h1>Завдання 2</h1>

      <div className="gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            photo={item.photo}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;