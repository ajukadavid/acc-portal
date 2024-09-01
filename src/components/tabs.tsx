"use client"
import { useRouter, usePathname } from 'next/navigation';

interface Tab {
  label: string;
  path: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const router = useRouter();
    const pathname = usePathname();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      {/* Tab Headers */}
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${pathname === tab.path ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.path)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        .tab-headers {
          display: flex;
          border-bottom: 1px solid #ddd;
        }
        .tab-button {
          padding: 10px 20px;
          cursor: pointer;
          border: none;
          background: none;
          font-size: 16px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s;
        }
        .tab-button.active {
          border-bottom-color: #0070f3;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
