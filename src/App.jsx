import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SearchBar } from "./components/SearchBar";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

import sections from "./config/sections";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <SearchBar />
          {sections.map((section, index) => (
            <Section key={index} title={section.title} sites={section.sites} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
