export function Sidebar() {
  return (
    <aside className="w-48 bg-gray-100 p-4 hidden md:block">
      <div className="font-semibold mb-2">目录导航</div>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li><a href="#酷站推荐" className="hover:text-blue-500">酷站推荐</a></li>
        <li><a href="#常用站点" className="hover:text-blue-500">常用站点</a></li>
        <li><a href="#学习资源" className="hover:text-blue-500">学习资源</a></li>
        <li><a href="#开发工具" className="hover:text-blue-500">开发工具</a></li>
      </ul>
    </aside>
  );
}
