import Image from "next/image";

const categories = [
  {
    title: "Ancient Grimoires",
    image: "/images/grimoire.jpg",
    description: "Books of spells, alchemy, and lost magical knowledge.",
  },
  {
    title: "Mythical Tales",
    image: "/images/myths.jpg",
    description: "Legends of dragons, heroes, and forgotten kingdoms.",
  },
  {
    title: "Potion Recipes",
    image: "/images/potions.jpg",
    description: "Brewing guides for elixirs of power and longevity.",
  },
  {
    title: "Divination & Prophecy",
    image: "/images/prophecy.jpg",
    description: "Unveil the future with tarot, runes, and star charts.",
  },
  {
    title: "Dark Arts & Curses",
    image: "/images/dark_magic.jpg",
    description: "Forbidden texts filled with dangerous knowledge.",
  },
  {
    title: "Magical Creatures",
    image: "/images/magical_beasts.jpg",
    description: "A bestiary of enchanted beings and their secrets.",
  },
];

export default function MagicBookCategories() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-purple-900 text-center">📚 Enchanted Book Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {categories.map((category, index) => (
            <div key={index} className="bg-purple-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="relative w-full h-60">
                <Image src={category.image} alt={category.title} layout="fill" className="rounded-lg object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-purple-800">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition">
                Discover More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
