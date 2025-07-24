import React from "react";

const RSSFeed = () => {
  const mockHeadlines = [
    {
      title: "New Campaign Finance Rules Could Reshape 2026 Races",
      link: "#",
    },
    {
      title: "Andre Park Surges in NV–03 as Donations Spike",
      link: "#",
    },
    {
      title: "Grassroots Donors Back Reform Slate in Key Districts",
      link: "#",
    },
  ];

  return (
    <div className="p-4 border rounded-md bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">📰 Latest Headlines</h2>
      <ul className="space-y-1">
        {mockHeadlines.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-blue-600 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              • {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RSSFeed;
