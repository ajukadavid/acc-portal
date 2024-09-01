
import Tabs from "@/components/tabs";

    export default function Reserve({ children }: { children: React.ReactNode }) {

    const tabData = [
        { label: 'Tab 1', path: 'bookingInfo' },
        { label: 'Tab 2', path: 'chooseRoom' },
      ];

  
    return (
        <main>
          
            <Tabs tabs={tabData} />
            <div>
                {children}
            </div>
        </main>
    )
}