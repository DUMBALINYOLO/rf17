const tabs = [
  {
    name: "Experience, Contract Type, Education",
    id: "stats",
    href: "#",
    current: false
  },

  { name: "Related Skills", id: "twins", href: "#", current: true },
  { name: "Skill Rank", id: "prior", href: "#", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ active, setActive }) {
  return (
    <div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActive(tab.id)}
              className={classNames(
                tab.id === active
                  ? "bg-indigo-500 text-purple-100"
                  : "text-gray-100 hover:text-gray-100",
                "px-3 py-2 font-medium text-sm rounded-md"
              )}
              aria-current={tab.id === active ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
