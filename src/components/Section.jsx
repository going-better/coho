export function Section({ title, sites }) {
  return (
    <section id={title} className="mb-8">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="font-semibold">{site.name}</div>
            <div className="text-xs text-gray-500">{site.desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
